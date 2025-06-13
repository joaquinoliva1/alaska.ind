// array que permite más flexibilidad a la hora de agregar o quitar secciones
// en el navbar, ya que solo hay que modificar el array y no el HTML
const sectionRoutes = [
  { name: "pantalones", path: "#pantalones" },
  { name: "remeras", path: "#remeras" },
  { name: "camperas", path: "#camperas" },
];

let log = window.location.pathname.endsWith("home.html");

const footer = `
      <div>© 2025 Alaska. Todos los derechos reservados.</div>
      <div style="font-size: 0.9em">
        Hecho con <span style="color: #e25555">♥</span> por Joaquin Oliva.
      </div>
`;
let footerContainer = document.querySelector("footer");

window.addEventListener("load", () => {
  if (footerContainer) {
    footerContainer.innerHTML = footer;
  }
  // generar dinámicamente los enlaces del navbar usando sectionRoutes
  const menuList = document.querySelector(".navbar-nav.flex-row");
  if (menuList) {
    menuList.innerHTML = sectionRoutes
      .map(
        (route) => `
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadSection('${
          route.name
        }'); return false;">
          ${route.name.charAt(0).toUpperCase() + route.name.slice(1)}
        </a>
      </li>
    `
      )
      .join("");
  }

  (function () {
    "use strict";

    var registerFormElement = document.getElementById("registerFormElement");
    var loginBtn = document.querySelector('[data-form="loginForm"]');
    var registerBtn = document.querySelector('[data-form="registerForm"]');
    var formSections = document.querySelectorAll(
      ".dropdown-menu-form .form-section"
    );

    var navbarDropdownAuthBtn = document.getElementById("navbarDropdownAuth");
    var dropdownMenu = document.querySelector(".dropdown-menu-form");
    var isDropdownOpen = false;
    function showForm(formIdToShow) {
      formSections.forEach(function (section) {
        if (section.id === formIdToShow) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });

      if (loginBtn && registerBtn) {
        loginBtn.classList.remove("active", "btn-primary");
        loginBtn.classList.add("btn-outline-primary");
        registerBtn.classList.remove("active", "btn-primary");
        registerBtn.classList.add("btn-outline-primary");
      }

      if (formIdToShow === "loginForm") {
        loginBtn && loginBtn.classList.add("active", "btn-primary");
        loginBtn && loginBtn.classList.remove("btn-outline-primary");
      } else if (formIdToShow === "registerForm") {
        registerBtn && registerBtn.classList.add("active", "btn-primary");
        registerBtn && registerBtn.classList.remove("btn-outline-primary");
      }
    }

    loginBtn &&
      loginBtn.addEventListener("click", function () {
        showForm("loginForm");
        if (
          registerFormElement &&
          registerFormElement.classList.contains("was-validated")
        ) {
          registerFormElement.classList.remove("was-validated");
          registerFormElement
            .querySelectorAll(".form-control")
            .forEach((input) => {
              input.classList.remove("is-valid", "is-invalid");
            });
          registerFormElement
            .querySelector("#termsCheck")
            .classList.remove("is-valid", "is-invalid");
        }
      });
    registerBtn &&
      registerBtn.addEventListener("click", function () {
        showForm("registerForm");
      });

    showForm("loginForm");
    if (registerFormElement) {
      registerFormElement.addEventListener(
        "submit",
        function (event) {
          event.preventDefault(); // Evita el envío tradicional
          var password = document.getElementById("password");
          var confirmPassword = document.getElementById("confirmPassword");
          if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Las contraseñas no coinciden.");
          } else {
            confirmPassword.setCustomValidity("");
          }
          if (!registerFormElement.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            alert("Te registraste con exito.");
            window.location.href = "home.html";
            dropdownMenu.classList.remove("show-always");
            navbarDropdownAuthBtn.setAttribute("aria-expanded", "false");
            dropdownMenu.classList.remove("show");
            isDropdownOpen = false;
            registerFormElement.reset();
            registerFormElement.classList.remove("was-validated");
            registerFormElement
              .querySelectorAll(".form-control")
              .forEach((input) => {
                input.classList.remove("is-valid", "is-invalid");
              });
            registerFormElement
              .querySelector("#termsCheck")
              .classList.remove("is-valid", "is-invalid");
            showForm("loginForm");
          }

          registerFormElement.classList.add("was-validated");
        },
        false
      );
      document
        .getElementById("password")
        .addEventListener("input", validatePasswordMatch);
      document
        .getElementById("confirmPassword")
        .addEventListener("input", validatePasswordMatch);

      function validatePasswordMatch() {
        var password = document.getElementById("password");
        var confirmPassword = document.getElementById("confirmPassword");

        if (confirmPassword.value === "") {
          confirmPassword.setCustomValidity("");
          confirmPassword.classList.remove("is-valid", "is-invalid");
        } else if (password.value !== confirmPassword.value) {
          confirmPassword.setCustomValidity("Las contraseñas no coinciden.");
          confirmPassword.classList.remove("is-valid");
          confirmPassword.classList.add("is-invalid");
        } else {
          confirmPassword.setCustomValidity("");
          confirmPassword.classList.remove("is-invalid");
          confirmPassword.classList.add("is-valid");
        }
      }
    }
    if (navbarDropdownAuthBtn && dropdownMenu) {
      navbarDropdownAuthBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!isDropdownOpen) {
          dropdownMenu.classList.add("show-always");
          navbarDropdownAuthBtn.setAttribute("aria-expanded", "true");
          isDropdownOpen = true;
        } else {
          dropdownMenu.classList.remove("show-always");
          navbarDropdownAuthBtn.setAttribute("aria-expanded", "false");
          isDropdownOpen = false;
        }
      });
    }
    if (dropdownMenu) {
      dropdownMenu.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
    var loginFormElement = document.querySelector("#loginForm form");
    if (loginFormElement) {
      loginFormElement.addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "home.html";
      });
    }
  })();
});

function logout() {
  window.location.href = "index.html";
}

function createCard(nombre, img, pre) {
  if (log) {
    return `
      <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
        <div class="card text-center mx-auto outfit-card">
          <img src="${img}" class="card-img-top img-fluid" alt="${nombre}" />
          <div class="card-body">
            <p class="card-text">${nombre}</p>
            <p class="card-text text-primary fw-bold">$${pre}</p>
            <button class="btn btn-primary add-to-cart" data-outfit="${nombre}" data-price="${pre}">Add to cart</button>
          </div>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
        <div class="card text-center mx-auto outfit-card">
          <img src="${img}" class="card-img-top img-fluid" alt="${nombre}" />
          <div class="card-body">
            <p class="card-text">${nombre}</p>
          </div>
        </div>
      </div>
    `;
  }
}

function loadSection(section) {
  console.log("Section: ", section);
  const mainContent = document.getElementById("main-content");
  let html = "";
  let productos = [];

  // Productos hardcodeados (sin precio)
  if (section === "pantalones") {
    productos = [
      { nombre: "Pantalón #1", img: "./assets/cards/pantalon1.jpg" },
      { nombre: "Pantalón #2", img: "./assets/cards/pantalon2.jpg" },
      { nombre: "Pantalón #3", img: "./assets/cards/pantalon3.jpg" },
      { nombre: "Pantalón #4", img: "./assets/cards/pantalon4.jpg" },
      { nombre: "Pantalón #5", img: "./assets/cards/pantalon5.jpg" },
      { nombre: "Pantalón #6", img: "./assets/cards/pantalon6.jpg" },
      { nombre: "Pantalón #7", img: "./assets/cards/pantalon7.jpg" },
      { nombre: "Pantalón #8", img: "./assets/cards/pantalon8.jpg" },
      { nombre: "Pantalón #9", img: "./assets/cards/pantalon9.jpg" },
      {
        nombre: "Pantalón #10",
        img: "./assets/cards/pantalon10.jpg",
        pre: 10.0,
      },
    ];
  } else if (section === "remeras") {
    productos = [
      { nombre: "Remera #1", img: "./assets/cards/remera1.jpg" },
      { nombre: "Remera #2", img: "./assets/cards/remera2.jpg" },
      { nombre: "Remera #3", img: "./assets/cards/remera3.jpg" },
      { nombre: "Remera #4", img: "./assets/cards/remera4.jpg" },
      { nombre: "Remera #5", img: "./assets/cards/remera5.jpg" },
      { nombre: "Remera #6", img: "./assets/cards/remera6.jpg" },
      { nombre: "Remera #7", img: "./assets/cards/remera7.jpg" },
      { nombre: "Remera #8", img: "./assets/cards/remera8.jpg" },
      { nombre: "Remera #9", img: "./assets/cards/remera9.jpg" },
      { nombre: "Remera #10", img: "./assets/cards/remera10.jpg" },
    ];
  } else if (section === "camperas") {
    productos = [
      { nombre: "Campera #1", img: "./assets/cards/campera1.jpg" },
      { nombre: "Campera #2", img: "./assets/cards/campera2.jpg" },
      { nombre: "Campera #3", img: "./assets/cards/campera3.jpg" },
      { nombre: "Campera #4", img: "./assets/cards/campera4.jpg" },
      { nombre: "Campera #5", img: "./assets/cards/campera5.jpg" },
      { nombre: "Campera #6", img: "./assets/cards/campera6.jpg" },
      { nombre: "Campera #7", img: "./assets/cards/campera7.jpg" },
      { nombre: "Campera #8", img: "./assets/cards/campera8.jpg" },
      { nombre: "Campera #9", img: "./assets/cards/campera9.jpg" },
      { nombre: "Campera #10", img: "./assets/cards/campera10.jpg" },
    ];
  } else if (section === "index") {
    productos = [
      { nombre: "Outfit #1", img: "./assets/cards/outfit1.jpg" },
      { nombre: "Outfit #2", img: "./assets/cards/outfit2.jpg" },
      { nombre: "Outfit #3", img: "./assets/cards/outfit3.jpg" },
      { nombre: "Outfit #4", img: "./assets/cards/outfit4.jpg" },
      { nombre: "Outfit #5", img: "./assets/cards/outfit5.jpg" },
      { nombre: "Outfit #6", img: "./assets/cards/outfit6.jpg" },
      { nombre: "Outfit #7", img: "./assets/cards/outfit7.jpg" },
      { nombre: "Outfit #8", img: "./assets/cards/outfit8.jpg" },
      { nombre: "Outfit #9", img: "./assets/cards/outfit9.jpg" },
      { nombre: "Outfit #10", img: "./assets/cards/outfit10.jpg" },
    ];
  }

  // Traer precios desde precios.json y combinarlos
  fetch("./assets/data/precios.json")
    .then((response) => response.json())
    .then((precios) => {
      productos = productos.map((p) => ({
        ...p,
        pre: precios[p.nombre] !== undefined ? precios[p.nombre] : "N/A",
      }));

      if (productos.length > 0) {
        html = `<div class="row justify-content-center g-2 outfits-row">
          ${productos.map((p) => createCard(p.nombre, p.img, p.pre)).join("")}
        </div>`;
      } else {
        html = "<p>No hay productos para mostrar.</p>";
      }
      mainContent.innerHTML = html;
      attachCartButtons();
    })
    .catch((error) => {
      console.error("Error cargando precios:", error);
      mainContent.innerHTML = "<p>Error al cargar precios.</p>";
    });
}

const cart = {};
const cartDropdown = document.getElementById("cart-dropdown");
const cartItemsList = document.getElementById("cart-items");

function updateCartUI() {
  cartItemsList.innerHTML = "";
  const outfits = Object.entries(cart);

  if (outfits.length === 0) {
    cartItemsList.innerHTML =
      '<li class="dropdown-item text-muted">Carrito vacío</li>';
    return;
  }

  let total = 0;
  outfits.forEach(([outfit, data]) => {
    const price = data.price || 0;
    const count = data.count;
    const subtotal = price * count;
    total += subtotal;

    const li = document.createElement("li");
    li.className =
      "dropdown-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${outfit} <span class="badge bg-secondary">${count}</span></span>
      <span>$${subtotal.toLocaleString()}</span>
    `;
    cartItemsList.appendChild(li);
  });

  const totalLi = document.createElement("li");
  totalLi.className =
    "dropdown-item fw-bold border-top mt-2 d-flex justify-content-between";
  totalLi.innerHTML = `<span>Total</span><span>$${total.toLocaleString()}</span>`;
  cartItemsList.appendChild(totalLi);

  // Botón para continuar compra
  const checkoutLi = document.createElement("li");
  checkoutLi.className = "dropdown-item text-center";
  checkoutLi.innerHTML = `
    <a href="checkout.html" class="btn btn-success w-100 mt-2">Continuar compra</a>
  `;
  cartItemsList.appendChild(checkoutLi);
}

function attachCartButtons() {
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const outfit = btn.getAttribute("data-outfit");
      const price = parseFloat(btn.getAttribute("data-price")) || 0;

      if (!cart[outfit]) {
        cart[outfit] = { count: 1, price: price };
      } else {
        cart[outfit].count++;
      }

      cartDropdown.style.display = "block";
      updateCartUI();
    });
  });
}

document.querySelectorAll(".globo").forEach((globo) => {
  globo.addEventListener("click", function (e) {
    e.stopPropagation();
    cartItemsList.parentElement.classList.toggle("show");
  });
});
document.addEventListener("click", function () {
  cartItemsList.parentElement.classList.remove("show");
});
