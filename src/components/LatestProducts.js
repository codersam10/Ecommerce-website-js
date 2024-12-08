import fetchProductDetails from "../utils/fetchProductDetails";
import Card from "../components/Card";

const LatestProducts = () => {
      //create latest-product section
  const latestProduct = document.createElement("section");
  latestProduct.classList.add("latest-product", "pt-9");
  latestProduct.innerHTML = `
  <h1 class="text-2xl text-center">Latest Product</h1>
  <hr class="my-5"/>
  <nav class="flex justify-center gap-2">
    <button class="border-2 border-black px-2 rounded-md hover:bg-black hover:text-white">All</button>
    <button class="border-2 border-black px-2 rounded-md hover:bg-black hover:text-white">Men's Clothing</button>
    <button class="border-2 border-black px-2 rounded-md hover:bg-black hover:text-white">Women's Clothing</button>
    <button class="border-2 border-black px-2 rounded-md hover:bg-black hover:text-white">Jewellery</button>
    <button class="border-2 border-black px-2 rounded-md hover:bg-black hover:text-white ">Electronics</button>
  </nav>
  <div class="card-container pt-10 flex flex-wrap gap-5 justify-center">

  </div>
  `;

    //cards rendering function
    function renderCards(productDataArray) {
        productDataArray.forEach((productObj) => {
          document.querySelector(".card-container").appendChild(Card(productObj));
        });
      }
    
      //fetch data and render
      fetchProductDetails().then((productDataArray) => {
        renderCards(productDataArray);
      });

  return latestProduct;
};

export default LatestProducts;
