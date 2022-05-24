import {
  AddToShoppingCart,
  CheckedRating,
  HalfCheckedRating,
  ProductBeforePrice,
  ProductContent,
  ProductDescription,
  ProductHeader,
  ProductIdAndNumber,
  ProductImageDiv,
  ProductMainDiv,
  ProductNowPrice,
  ProductPageContentDiv,
  ProductRatingDiv,
  ProductSecondaryDiv,
  ProductShopDiv,
  ProductTextDiv,
  ProductTitle,
  RatingInNumber,
  UnCheckedRating,
} from "./productPage/ProductStyle";

export default function ProductPage() {
  return (
    <ProductPageContentDiv>
      <ProductHeader>
        <ProductTextDiv>
          <ProductTitle>Product Title</ProductTitle>
          <ProductDescription>Product description</ProductDescription>
          <ProductIdAndNumber>Product ID and Product Number</ProductIdAndNumber>
        </ProductTextDiv>
        <ProductRatingDiv>
          <CheckedRating></CheckedRating>
          <CheckedRating></CheckedRating>
          <CheckedRating></CheckedRating>
          <CheckedRating></CheckedRating>
          <HalfCheckedRating></HalfCheckedRating>
          <UnCheckedRating></UnCheckedRating>
          <RatingInNumber>4.5/6</RatingInNumber>
        </ProductRatingDiv>
      </ProductHeader>

      <ProductContent>
        <ProductMainDiv>
          <ProductImageDiv></ProductImageDiv>
        </ProductMainDiv>

        <ProductSecondaryDiv>
          <ProductShopDiv>
            <ProductBeforePrice>2145.-</ProductBeforePrice>
            <ProductNowPrice>2100.-</ProductNowPrice>
            <AddToShoppingCart>Add To Shopping Cart</AddToShoppingCart>
          </ProductShopDiv>
        </ProductSecondaryDiv>
      </ProductContent>
    </ProductPageContentDiv>
  );
}
