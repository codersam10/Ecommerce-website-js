import loginSvg from "../assets/login.svg";
import registerSvg from "../assets/register.svg";
import cartSvg from "../assets/cart.svg";
const Header = () => {
  const headerElement = document.createElement("header");
  headerElement.classList.add(
    "header",
    "flex",
    "justify-between",
    "items-center",
    "px-10",
    "py-5",
    "bg-slate-100"
  );
  headerElement.innerHTML = `
    <h1 class="text-3xl font-bold">Ecommerce</h1>
            <nav>
                <ul class="flex gap-5 text-slate-500">
                    <li class="hover:text-black"><a href="/">Home</a></li>
                    <li class="hover:text-black"><a href="/">Products</a></li>
                    <li class="hover:text-black"><a href="/">About</a></li>
                    <li class="hover:text-black"><a href="/">Cart</a></li>
                </ul>
            </nav>
            <div class="flex gap-3">
                <button class="flex border-2 border-black rounded-md px-2 py-1">
                    <img class="w-6 h-6" src="${loginSvg}"/>
                    Log In
                </button>
                <button class="flex border-2 border-black rounded-md px-2 py-1">
                    <img class="w-6 h-6" src="${registerSvg}"/>
                    Register
                </button>
                <button class="flex border-2 border-black rounded-md px-2 py-1">
                    <img class="w-6 h-6" src="${cartSvg}"/>
                    Cart(0)
                </button>
            </<div>`;

  return headerElement;
};

export default Header;
