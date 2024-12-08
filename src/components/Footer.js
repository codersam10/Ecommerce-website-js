const Footer = () => {
  const footerElement = document.createElement("footer");
  footerElement.classList.add(
    "footer",
    "text-center",
    "text-slate-600",
    "py-10"
  );
  footerElement.innerHTML = `
 <p>Made with ❤️ by <a class="underline" href="https://github.com/codersam10">Samarth Savant</a></p>
 `;
  return footerElement;
};

export default Footer;
