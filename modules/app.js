import './commands/all.js';
import './commands/links.js';

import { sufiCommands, addCommand } from './commands.js';


export default function App() {

  let sufiApp = createElement(`<sufi-app>
<sufi-container class="">
  <sufi-input class="sufi-input">
      <input type="search" placeholder="Search">
  </sufi-input>
  <sufi-data>
      <sufi-anchors>
      </sufi-anchors>
  </sufi-data>
</sufi-container>
</sufi-app>`);

  window.addEventListener("keydown", function (evt) {
    if (evt.key == "." && evt.altKey && evt.ctrlKey) {
      // sufiContainer.classList.toggle("sufi-active");
      showMainApp();
    }
  });

  let btn = createElement(
    `<sufi-button><svg  viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z" fill="#FFFFFF" /><path d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z" fill="#E6E6E6" /><path d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z" fill="#06F3FF" /><path d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z" fill="#FFFFFF" /><path d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z" fill="#005BFF" /><path d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z" fill="#FFFFFF" /><path d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z" fill="#005BFF" /><path d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z" fill="#005BFF" /><path d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z" fill="#005BFF" /></svg></sufi-button>`
  );
  sufiApp.appendChild(btn);

  document.body.appendChild(sufiApp);

  let searchInput = document.querySelector("sufi-input input");
  let achorContainer = document.querySelector("sufi-anchors");
  // let btn = document.querySelector("sufi-button")
  let sufiContainer = document.querySelector("sufi-container");

  btn.addEventListener("click", () => {
    showMainApp();
  });

  sufiContainer.addEventListener("mouseleave", function () {
    filterCommands();
  });
  updateCommandPallete(achorContainer);
  searchInput.addEventListener("input", filterCommands);


  function showMainApp() {
    Swal.fire({
      html: "<div id='sufi-usama'></div>",
      showCancelButton: false,
      showConfirmButton: false,
      stopKeydownPropagation: true,
      didOpen: () => {
        document.getElementById("sufi-usama").append(sufiContainer);
        sufiContainer.classList.add("sufi-active");
      },
      didDestroy: () => {
        sufiApp.appendChild(sufiContainer);
        sufiContainer.classList.remove("sufi-active");
      },
    });

    // sufiContainer.classList.toggle("sufi-active");
  }

  function updateCommandPallete() {
    achorContainer.innerHTML = "";
    for (let sufiCommandName in sufiCommands) {
      let sufiCommand = sufiCommands[sufiCommandName];
      let a = createElement(
        `<sufi-command>${sufiCommand.title}</sufi-command>`
      );
      achorContainer.append(a);
      a.addEventListener("mouseover", function () {
        removeSufiActive();
        this.classList.add("sufi-active");
      });

      a.addEventListener("click", function (evt) {
        evt.preventDefault();
        sufiCommand.fn({ reOpenMain });
      });
    }
  }

  function reOpenMain() {
    setTimeout(showMainApp, 500);
  }


  function removeSufiActive() {
    let anchors = document.querySelectorAll("sufi-anchors sufi-command");
    for (let i = 0; i < anchors.length; i++) {
      let anchor = anchors[i];
      anchor.classList.remove("sufi-active");
    }
  }

  function filterCommands() {
    let searchText = searchInput.value.trim().toLowerCase();
    let anchorElements = document.querySelectorAll("sufi-anchors sufi-command");

    anchorElements.forEach(function (item) {
      let text = item.textContent.trim().toLowerCase();
      if (text.includes(searchText)) {
        let regex = new RegExp(searchText, "gi");
        item.innerHTML = item.textContent.replace(regex, function (match) {
          return '<span class="highlight">' + match + "</span>";
        });

        item.classList.remove("sufi-hidden");
      } else {
        item.classList.add("sufi-hidden");
      }
    });
  }

  function createElement(markup) {
    let tmp = document.createElement("div");
    tmp.innerHTML = markup.trim();
    return tmp.firstChild;
  }
}