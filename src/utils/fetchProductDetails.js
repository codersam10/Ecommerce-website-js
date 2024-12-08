import { apiURL } from "./constants";
const fetchProductDetails = async () => {
  try {
    const result = await fetch(`${apiURL}/products`);
    if (!result.ok) {
      throw new Error(result.statusText);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchProductDetails;
