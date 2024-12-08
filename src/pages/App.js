import Header from "../components/Header";
import Hero from "../assets/hero.png";
import latestProduct from "../components/LatestProducts";
import Footer from "../components/Footer";
const App = () => {
  //create wrapper and append header to it
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.appendChild(Header());

  //create hero section and append to wrapper
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero", "relative");

  heroSection.innerHTML = `
<img src="${Hero}"/>
<div class="absolute top-1/2 text-white p-5">
  <h1 class="text-2xl">New Season Arrivals</h1>
  <p>Discover the latest trends and styles in fashion with our curated selection of clothing and accessories.</p>
</div>
  `;
  wrapper.appendChild(heroSection);

  //append latest product section to wrapper
  wrapper.appendChild(latestProduct());

  //append footer to wrapper
  wrapper.appendChild(Footer());

  return wrapper;
};

export default App;
