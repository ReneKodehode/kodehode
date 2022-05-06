import { useEffect, useState } from "react";
import words from "./apiCallAppPage/Words.txt";

export default function ApiCallAppPage() {
  const [data, dataSet] = useState();

  useEffect(() => {
    fetchMyAPI();
  }, []);
  async function fetchMyAPI() {
    let response = await fetch(words);
    response = await response.text();
    let arrayOfWords = response.split("\n");
    let randomIDX = Math.floor(Math.random() * arrayOfWords.length);
    let randomWord = arrayOfWords[randomIDX];
    randomWord.trim();
    randomWord.replace(/\s/g, "%20");
    randomWord.replace(/-/g, "");

    let res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/` + (await randomWord)
    );
    console.log(randomWord);
    res = await res.json();
    console.log(res);
    //const newResponse = response.map((response, idx) => response);
    dataSet(res[0]);
  }

  if (data) {
    return (
      <div>
        <h1>Word Of the day</h1>
        <h1>{data.word}</h1>

        <h2>{data.phonetics.text}</h2>

        {/*     play a sound to "trick" the browser a sound has played
         */}
        <iframe
          src={data.phonetics.audio}
          allow="autoPlay"
          id="iframeAudio"
          style={{ display: "none" }}
        ></iframe>

        {data.meanings.map((meanings, idx) => (
          <div>
            <h1 key={idx}>{meanings.partOfSpeech}</h1>
            {meanings.definitions.map((definitions, idx) => (
              <div>
                <h2 key={idx}>{definitions.definition}</h2>

                {definitions.synonyms.map((synonyms, idx) => (
                  <p key={idx}>{synonyms ? synonyms : ""}</p>
                ))}

                <p>{definitions.example}</p>

                {definitions.antonyms.map((antonyms, idx) => (
                  <p key={idx}>{antonyms}</p>
                ))}
              </div>
            ))}
            <p>
              {meanings.synonyms.length === 0
                ? ""
                : "Synonyms: " + meanings.synonyms}
            </p>
            <p>
              {meanings.antonyms.length === 0
                ? ""
                : "Antonyms: " + meanings.antonyms}
            </p>
          </div>
        ))}

        {/* the real sound that plays */}
        <audio src={data.phonetics.audio} autoPlay={1}></audio>
      </div>
    );
  } else {
    <div>
      <h1>Page Loading...</h1>
    </div>;
  }
}
