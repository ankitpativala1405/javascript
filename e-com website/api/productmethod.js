import { apiUrl } from "../config/api.js";

export const ProductMethod = {
  getAll: async () => {
    let req = await fetch(apiUrl.products);
    let res = await req.json();
    return res;
  },
  post: async (data) => {
    await fetch(apiUrl.products, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  update: async (id, data) => {
    await fetch(`${apiUrl.products}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  delete: async (id) => {
    await fetch(`${apiUrl.products}/${id}`, {
      method: "DELETE",
    });
  },
  getByID: async (id) => {
    let req = await fetch(`${apiUrl.products}/${id}`);
    let res = await req.json();
    return res;
  },
};
