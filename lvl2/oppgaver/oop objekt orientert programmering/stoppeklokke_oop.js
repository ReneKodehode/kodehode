function Stoppeklokke() {
    let startTime, endTime, running, varighet = 0;
    this.start = function() {
        if (running)
            throw new Error('Stoppeklokken har allerede startet');
        running = true;
        startTime = new Date();
    };
    this.stopp = function() {
        if (!running)
            throw new Error('Stoppeklokken har ikke startet');
        running = false;
        endTime = new Date();
        let sekunder = (endTime.getTime() - startTime.getTime()) / 1000;
        varighet += sekunder;
    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        varighet = 0;

    };
    Object.defineProperty(this, "varighet", {
        get: function() { return varighet; }
    });

}
const resetDisplay = document.getElementById("reset")
const startDisplay = document.getElementById("start")
const stopDisplay = document.getElementById("stopp")