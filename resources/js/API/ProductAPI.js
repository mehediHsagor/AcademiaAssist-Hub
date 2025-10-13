import API from "./API";

// GET all products
export const getProductsAPI = () => {
    return API.get("/products");
};

// CREATE new product
export const createProductAPI = (data) => {
    return API.post("/products", data);
};
