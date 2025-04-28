import { ProductMethod } from "../api/productmethod.js";
import uiMaker from "./uimakerproducts.js";

export const SearchValue = () => {
  document
    .getElementById("SearchValue")
    .addEventListener("input", async (e) => {
      let SearchValuee = e.target.value;

      let products = await ProductMethod.getAll();

      let temp = products.filter((ele) =>
        ele.name.toLowerCase().includes(SearchValuee.toLowerCase())
      );

      uiMaker(temp);
    });
};
