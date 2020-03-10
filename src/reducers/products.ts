import { ProductModel } from "../models/ProductModel";
import { Action } from "redux";

let initProducts = [
  {
    id: 1,
    name: "IPhone XS",
    brand: "Apple",
    description: "",
    price: 1000,
    inventory: 100,
    image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    rating: 5
  },
  {
    id: 2,
    name: "Galaxy S100",
    brand: "Saamsung",
    description: "",
    price: 800,
    inventory: 100,
    image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    rating: 4
  },
  {
    id: 3,
    name: "Realme",
    brand: "Unknown",
    description: "",
    price: 100,
    inventory: 100,
    image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    rating: 3
  },
];

export const products = (state: ProductModel[] = initProducts, action: Action) => {
  switch(action.type) {
    default: 
      return {
        products: state
      }
  }
}