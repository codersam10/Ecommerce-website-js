const Card = (productObj) => {
  const card = document.createElement("article");
  card.classList.add("card", "w-80", "border-2", "border-slate-300", "rounded-md");
  card.innerHTML = `
        <img class="h-64 w-full object-contain mx-auto p-2" src="${productObj?.image}" alt="${productObj?.image}" />

        <h1 class="px-24 line-clamp-1 text-lg font-semibold">${productObj?.title}</h1>
        <p class="px-10 line-clamp-3">${productObj?.description}</p>
        <p class="mt-3  border border-l-0 border-r-0 text-center text-slate-600">$ ${productObj?.price}</p>
        <div class="text-center py-4">
          <button class="border bg-black text-white py-1 px-2 rounded-md">Details</button>
          <button class="border bg-black text-white py-1 px-2 rounded-md active:scale-95 active:bg-slate-600">Add to Cart</button>
        </div>

    `;
  return card;
};

export default Card;
