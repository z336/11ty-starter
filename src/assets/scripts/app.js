// Mobile nav menu

const nav = document.querySelector(".navbar");
const list = nav.querySelector("ul");
const burgerClone = document.querySelector("#burger-template").content.cloneNode(true);
const svg = nav.querySelector("svg");

const button = burgerClone.querySelector("#menu");
button.addEventListener("click", (event) => {
  const isOpen = button.getAttribute("aria-expanded") === "false";
  button.setAttribute("aria-expanded", isOpen);
});

// avoid DRY: disabling menu
const disableMenu = () => {
  button.setAttribute("aria-expanded", false);
  button.focus();
};

//  close on escape
nav.addEventListener("keyup", (event) => {
  if (event.code === "Escape") {
    disableMenu();
  }
});

// close if clicked outside of event target
document.addEventListener("click", (event) => {
  const isClickInsideElement = nav.contains(event.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

nav.insertBefore(burgerClone, list);

// Toggle details in left navbar to stay open for current page

const currentPage = document.querySelector(`#sidebar details a[aria-current="page"]`);
const currentPageMobile = document.querySelector(`.navbar details a[aria-current="page"]`);

if (currentPage) {
  currentPage.closest("details").setAttribute("open", "");
}

if (currentPageMobile) {
  currentPageMobile.closest("details").setAttribute("open", "");
}

// Add a copy button to code blocks

const blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // Only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    const button = document.createElement("button");

    button.classList.add("copy");
    button.setAttribute("aria-label", "Copy to clipboard");
    button.innerText = "Copy";

    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block);

      button.innerText = "Copied ✅";

      setTimeout(() => {
        button.innerText = "Copy";
      }, 2000);
    });
  }
});

async function copyCode(block) {
  const code = block.querySelector("code");
  const text = code.innerText;

  await navigator.clipboard.writeText(text);
}
