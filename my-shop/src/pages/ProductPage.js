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

import Products from "../ProductLists";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [products, productsSet] = useState(Products);
  const [selectedProduct, selectedProductSet] = useState(Products);

  useEffect(() => {
    selectedProductSet(products[0]);
  }, []);

  return (
    <ProductPageContentDiv>
      <ProductHeader>
        <ProductTextDiv>
          <ProductTitle>{selectedProduct.name}</ProductTitle>
          <ProductDescription>
            {selectedProduct.ProductDescription}
          </ProductDescription>
          <ProductIdAndNumber>
            ProductID: {selectedProduct.id} productNumber:{" "}
            {selectedProduct.number}
          </ProductIdAndNumber>
        </ProductTextDiv>
        <ProductRatingDiv rating={selectedProduct.rating} />
      </ProductHeader>

      <ProductContent>
        <ProductMainDiv>
          <ProductImageDiv></ProductImageDiv>
        </ProductMainDiv>

        <ProductSecondaryDiv>
          <ProductShopDiv>
            <ProductBeforePrice>
              {selectedProduct.beforePrice}.-
            </ProductBeforePrice>
            <ProductNowPrice>{selectedProduct.price}.-</ProductNowPrice>
            <AddToShoppingCart>Add To Shopping Cart</AddToShoppingCart>
          </ProductShopDiv>
        </ProductSecondaryDiv>
      </ProductContent>
    </ProductPageContentDiv>
  );
}
