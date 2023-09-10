document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("icone-hamburger");
  const navbarIconesContainer = document.querySelector(".navbar__icones");
  const navbar = document.getElementsByClassName("header");
  let isNavOpen = false;
  const botaoExperiencia = document.getElementById("botao-experiencia");
  const botaoEducacao = document.getElementById("botao-educacao");
  const botaoHome = document.getElementById("botao-home");

  let isInfoBoxAppended = false;
  let isColumnAppended = false;
  let isFullHomeText = false;

  function toggleHomeText(){
    const homeText = document.querySelector(".texto__descricao");
    if (isFullHomeText) {
      homeText.textContent = `I'm a Tunisian based web designer & front‑end developer focused on
      crafting clean & user‑friendly experiences, I am passionate about
      building excellent software that improves the lives of those around
      me.`
      botaoHome.textContent = "MAIS";
      isFullHomeText = false;
    } else {
      homeText.textContent = `I'm a Tunisian based web designer & front‑end developer focused on
      crafting clean & user‑friendly experiences, I am passionate about
      building excellent software that improves the lives of those around
      me. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into electronic 
      typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
      of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum.`;

      isFullHomeText = true;
      botaoHome.textContent = "MENOS";
    }
  }

  botaoHome.addEventListener("click", toggleHomeText)

  function toggleColumn() {
    // Check if the info box is already appended
    if (isColumnAppended) {
      const lastColumn = document.querySelector(
        ".section-educacao__coluna__wrapper ul:last-child"
      );
      lastColumn.remove();
      botaoEducacao.textContent = "MAIS";
      isColumnAppended = false;
    } else {
      // Create a new li element
      const newColumn = document.createElement("ul");
      newColumn.classList.add("section-educacao__coluna");

      // Create and set the content for the new li element
      newColumn.innerHTML = `

      <li class="section-educacao__coluna__titulo">
        CURSO DE ESPECIALIZAÇÃO
      </li>
      <li class="info-box">
        <div class="info-box__data">
          <span class="material-symbols-outlined data__icone-calendario"> calendar_month </span>
          <h6 class="data__periodo">2014 - 2018</h6>
        </div>

        <span class="info-box__titulo">BOOKING</span>
        <p class="info-box__descricao">
          Cargo de desenvolvedor junior na equipe de desenvolvimento back
          end.
        </p>
      </li>

      <li class="info-box">
        <div class="info-box__data">
          <span class="material-symbols-outlined data__icone-calendario"> calendar_month </span>
          <h6 class="data__periodo">2014 - 2018</h6>
        </div>

        <span class="info-box__titulo">BOOKING</span>
        <p class="info-box__descricao">
          Cargo de desenvolvedor junior na equipe de desenvolvimento back
          end.
        </p>
      </li>

      <li class="info-box">
        <div class="info-box__data">
          <span class="material-symbols-outlined data__icone-calendario"> calendar_month </span>
          <h6 class="data__periodo">2014 - 2018</h6>
        </div>

        <span class="info-box__titulo">BOOKING</span>
        <p class="info-box__descricao">
          Cargo de desenvolvedor junior na equipe de desenvolvimento back
          end.
        </p>
      </li>

        `;

      // Append the new li element to the ul
      document
        .querySelector("#section-educacao__coluna__wrapper")
        .appendChild(newColumn);
      botaoEducacao.textContent = "MENOS";

      isColumnAppended = true;
    }
  }

  botaoEducacao.addEventListener("click", toggleColumn)

  function toggleInfoBox() {
    // Check if the info box is already appended
    if (isInfoBoxAppended) {
      const lastInfoBox = document.querySelector(
        ".section-experiencia__info li:last-child"
      );
      lastInfoBox.remove();
      botaoExperiencia.textContent = "MAIS";
      isInfoBoxAppended = false;
    } else {
      // Create a new li element
      const newInfoBox = document.createElement("li");
      newInfoBox.classList.add("info-box");

      // Create and set the content for the new li element
      newInfoBox.innerHTML = `
        <div class="info-box__data">
          <span class="material-symbols-outlined data__icone-calendario"> calendar_month </span>
          <h6 class="data__periodo">2022 - Trabalhando</h6>
        </div>
        <span class="info-box__titulo">Apple</span>
        <p class="info-box__descricao">Cargo de desenvolvedor Back End, desenvolvendo APIs em .NET</p>
        `;

      // Append the new li element to the ul
      document
        .querySelector("#section-experiencia__info")
        .appendChild(newInfoBox);
      botaoExperiencia.textContent = "MENOS";

      isInfoBoxAppended = true;
    }
  }

  botaoExperiencia.addEventListener("click", toggleInfoBox);

  hamburgerIcon.addEventListener("click", function () {
    if (isNavOpen) {
      closeNavbar();
    } else {
      openNavbar();
    }
  });

  function openNavbar() {
    navbarIconesContainer.style.transform = "translateX(-22%)";
    navbarIconesContainer.style.visibility = "visible";
    navbarIconesContainer.style.top = "2%";
    hamburgerIcon.classList.add("open");
    hamburgerIcon.classList.remove("close");
    isNavOpen = true;
  }

  function closeNavbar() {
    navbarIconesContainer.style.transform = "translateX(1000%)";
    navbarIconesContainer.style.visibility = "hidden";
    hamburgerIcon.classList.remove("open");
    hamburgerIcon.classList.add("close");
    isNavOpen = false;
  }

  window.addEventListener("scroll", function () {
    const yScroll = window.scrollY;
    if (yScroll > 0) {
      navbar[0].style.backgroundColor = "#111111";
    } else {
      navbar[0].style.backgroundColor = "transparent";
    }
  });

  function showSnackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  document.getElementById("botao-contato").addEventListener("click", showSnackbar)

  function filterPortfolioItems(category) {
    const portfolioItems = document.querySelectorAll(
      ".section-portfolio__imagem"
    );

    portfolioItems.forEach((item) => {
      if (item.classList.contains(category) || category === "all") {
        item.style.opacity = 1;
        item.style.transform = "translateX(0)";

        item.classList.remove("hidden");
      } else {
        item.style.opacity = 0;
        item.style.transform = "translateX(-100%)";

        item.classList.add("hidden");
      }
    });
  }

  document
    .getElementById("botao-portfolio__back-end")
    .addEventListener("click", () => {
      filterPortfolioItems("back-end");
    });

  document
    .getElementById("botao-portfolio__front-end")
    .addEventListener("click", () => {
      filterPortfolioItems("front-end");
    });

  document
    .getElementById("botao-portfolio__figma")
    .addEventListener("click", () => {
      filterPortfolioItems("figma");
    });
  document
    .getElementById("botao-portfolio__all")
    .addEventListener("click", () => {
      filterPortfolioItems("all");
    });
});
