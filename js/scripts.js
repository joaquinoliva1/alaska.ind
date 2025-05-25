const navBar = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- Logo a la izquierda -->
      <a class="navbar-brand me-3" href="index.html">
        <img
          src="./assets/img/logo.png"
          alt="Logo"
          height="30rem"
          class="d-inline-block align-top"
        />
      </a>
      <!-- Menú de secciones en el centro -->
      <div class="d-none d-lg-flex flex-grow-1 justify-content-center">
        <ul class="navbar-nav mb-2 mb-lg-0 flex-row gap-3">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              onclick="loadSection('pantalones'); return false;"
              >Pantalones</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              onclick="loadSection('remeras'); return false;"
              >Remeras</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              onclick="loadSection('camperas'); return false;"
              >Camperas</a
            >
          </li>
        </ul>
      </div>
      <!-- Dropdown a la derecha -->
      <div class="ms-auto">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownAuth"
              role="button"
              aria-expanded="false"
            >
              access
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-form"
              aria-labelledby="navbarDropdownAuth"
            >
              <div class="d-flex gap-2 mb-4 form-selector-buttons">
                <button
                  type="button"
                  class="btn btn-outline-primary active"
                  data-form="loginForm"
                >
                  Iniciar Sesión
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  data-form="registerForm"
                >
                  Registrarse
                </button>
              </div>

              <div id="loginForm" class="form-section active">
                <h5 class="text-center mb-3">Iniciar Sesión</h5>
                <form>
                  <div class="mb-2">
                    <label for="loginEmail" class="form-label"
                      >Correo electrónico</label
                    >
                    <input
                      type="email"
                      class="form-control form-control-sm"
                      id="loginEmail"
                      placeholder="nombre@ejemplo.com"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="loginPassword" class="form-label"
                      >Contraseña</label
                    >
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      id="loginPassword"
                      placeholder="Tu contraseña"
                      required
                    />
                  </div>
                  <div class="d-grid gap-2 mb-2">
                    <button type="submit" class="btn btn-primary btn-sm">
                      Acceder
                    </button>
                  </div>
                  <div class="text-center small mt-3">
                    <a href="#" class="text-decoration-none"
                      >¿Olvidaste tu contraseña?</a
                    >
                  </div>
                </form>
              </div>

              <div id="registerForm" class="form-section">
                <h5 class="text-center mb-3">Registro de Usuario</h5>
                <form
                  class="needs-validation"
                  novalidate
                  id="registerFormElement"
                >
                  <div class="mb-2">
                    <label for="nombre" class="form-label"
                      >Nombre completo</label
                    >
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="nombre"
                      placeholder="Ingresa tu nombre"
                      required
                    />
                    <div class="invalid-feedback">
                      Por favor, ingresa tu nombre completo.
                    </div>
                    <div class="valid-feedback">¡Se ve bien!</div>
                  </div>
                  <div class="mb-2">
                    <label for="email" class="form-label"
                      >Correo electrónico</label
                    >
                    <input
                      type="email"
                      class="form-control form-control-sm"
                      id="email"
                      placeholder="nombre@ejemplo.com"
                      required
                    />
                    <div class="invalid-feedback">
                      Por favor, ingresa un correo electrónico válido.
                    </div>
                    <div class="valid-feedback">¡Correo válido!</div>
                  </div>
                  <div class="mb-2">
                    <label for="password" class="form-label"
                      >Contraseña</label
                    >
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      id="password"
                      placeholder="Ingresa tu contraseña"
                      required
                      minlength="6"
                    />
                    <div class="invalid-feedback">
                      La contraseña debe tener al menos 6 caracteres.
                    </div>
                    <div class="valid-feedback">Contraseña aceptable.</div>
                  </div>
                  <div class="mb-2">
                    <label for="confirmPassword" class="form-label"
                      >Confirmar contraseña</label
                    >
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      id="confirmPassword"
                      placeholder="Confirma tu contraseña"
                      required
                    />
                    <div class="invalid-feedback">
                      Las contraseñas no coinciden.
                    </div>
                    <div class="valid-feedback">Contraseñas coinciden.</div>
                  </div>
                  <div class="form-check mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="termsCheck"
                      required
                    />
                    <label class="form-check-label" for="termsCheck">
                      Acepto los
                      <a href="#" class="text-decoration-none"
                        >términos y condiciones</a
                      >
                    </label>
                    <div class="invalid-feedback">
                      Debes aceptar los términos y condiciones.
                    </div>
                  </div>
                  <div class="d-grid gap-2 mb-2">
                    <button type="submit" class="btn btn-primary btn-sm">
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;
const footer = `
      <div>© 2025 Alaska. Todos los derechos reservados.</div>
      <div style="font-size: 0.9em">
        Hecho con <span style="color: #e25555">♥</span> por Joaquin Oliva.
      </div>
`;
let navContainer = document.querySelector("header");
let footerContainer = document.querySelector("footer");

window.addEventListener("load", () => {
  navContainer.innerHTML = navBar;
  if (footerContainer) {
    footerContainer.innerHTML = footer;
  }

  // --- Mueve aquí toda la lógica de listeners y selectores ---
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

      loginBtn.classList.remove("active", "btn-primary");
      loginBtn.classList.add("btn-outline-primary");
      registerBtn.classList.remove("active", "btn-primary");
      registerBtn.classList.add("btn-outline-primary");

      if (formIdToShow === "loginForm") {
        loginBtn.classList.add("active", "btn-primary");
        loginBtn.classList.remove("btn-outline-primary");
      } else if (formIdToShow === "registerForm") {
        registerBtn.classList.add("active", "btn-primary");
        registerBtn.classList.remove("btn-outline-primary");
      }
    }
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
    registerBtn.addEventListener("click", function () {
      showForm("registerForm");
    });
    showForm("loginForm");
    if (registerFormElement) {
      registerFormElement.addEventListener(
        "submit",
        function (event) {
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
  })();
});

function logout() {
  window.location.href = "index.html";
}
function loadSection(section) {
  const mainContent = document.getElementById("main-content");
  let html = "";
  if (section === "pantalones") {
    html = `
        <div class="row justify-content-center g-2 outfits-row">
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon1.jpg" class="card-img-top img-fluid" alt="Pantalón #1" />
              <div class="card-body">
                <p class="card-text">Pantalón #1</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon2.jpg" class="card-img-top img-fluid" alt="Pantalón #2" />
              <div class="card-body">
                <p class="card-text">Pantalón #2</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon3.jpg" class="card-img-top img-fluid" alt="Pantalón #3" />
              <div class="card-body">
                <p class="card-text">Pantalón #3</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon4.jpg" class="card-img-top img-fluid" alt="Pantalón #4" />
              <div class="card-body">
                <p class="card-text">Pantalón #4</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon5.jpg" class="card-img-top img-fluid" alt="Pantalón #5" />
              <div class="card-body">
                <p class="card-text">Pantalón #5</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon6.jpg" class="card-img-top img-fluid" alt="Pantalón #6" />
              <div class="card-body">
                <p class="card-text">Pantalón #6</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon7.jpg" class="card-img-top img-fluid" alt="Pantalón #7" />
              <div class="card-body">
                <p class="card-text">Pantalón #7</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon8.jpg" class="card-img-top img-fluid" alt="Pantalón #8" />
              <div class="card-body">
                <p class="card-text">Pantalón #8</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon9.jpg" class="card-img-top img-fluid" alt="Pantalón #9" />
              <div class="card-body">
                <p class="card-text">Pantalón #9</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/pantalon10.jpg" class="card-img-top img-fluid" alt="Pantalón #10" />
              <div class="card-body">
                <p class="card-text">Pantalón #10</p>
              </div>
            </div>
          </div>
        </div>
      `;
  } else if (section === "remeras") {
    html = `
        <div class="row justify-content-center g-2 outfits-row">
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera1.jpg" class="card-img-top img-fluid" alt="Remera #1" />
              <div class="card-body">
          <p class="card-text">Remera #1</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera2.jpg" class="card-img-top img-fluid" alt="Remera #2" />
              <div class="card-body">
          <p class="card-text">Remera #2</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera3.jpg" class="card-img-top img-fluid" alt="Remera #3" />
              <div class="card-body">
          <p class="card-text">Remera #3</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera4.jpg" class="card-img-top img-fluid" alt="Remera #4" />
              <div class="card-body">
          <p class="card-text">Remera #4</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera5.jpg" class="card-img-top img-fluid" alt="Remera #5" />
              <div class="card-body">
          <p class="card-text">Remera #5</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera6.jpg" class="card-img-top img-fluid" alt="Remera #6" />
              <div class="card-body">
          <p class="card-text">Remera #6</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera7.jpg" class="card-img-top img-fluid" alt="Remera #7" />
              <div class="card-body">
          <p class="card-text">Remera #7</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera8.jpg" class="card-img-top img-fluid" alt="Remera #8" />
              <div class="card-body">
          <p class="card-text">Remera #8</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera9.jpg" class="card-img-top img-fluid" alt="Remera #9" />
              <div class="card-body">
          <p class="card-text">Remera #9</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/remera10.jpg" class="card-img-top img-fluid" alt="Remera #10" />
              <div class="card-body">
          <p class="card-text">Remera #10</p>
              </div>
            </div>
          </div>
        </div>
      `;
  } else if (section === "camperas") {
    html = `
        <div class="row justify-content-center g-2 outfits-row">
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera1.jpg" class="card-img-top img-fluid" alt="Campera #1" />
              <div class="card-body">
          <p class="card-text">Campera #1</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera2.jpg" class="card-img-top img-fluid" alt="Campera #2" />
              <div class="card-body">
          <p class="card-text">Campera #2</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera3.jpg" class="card-img-top img-fluid" alt="Campera #3" />
              <div class="card-body">
          <p class="card-text">Campera #3</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera4.jpg" class="card-img-top img-fluid" alt="Campera #4" />
              <div class="card-body">
          <p class="card-text">Campera #4</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera5.jpg" class="card-img-top img-fluid" alt="Campera #5" />
              <div class="card-body">
          <p class="card-text">Campera #5</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera6.jpg" class="card-img-top img-fluid" alt="Campera #6" />
              <div class="card-body">
          <p class="card-text">Campera #6</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera7.jpg" class="card-img-top img-fluid" alt="Campera #7" />
              <div class="card-body">
          <p class="card-text">Campera #7</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera8.jpg" class="card-img-top img-fluid" alt="Campera #8" />
              <div class="card-body">
          <p class="card-text">Campera #8</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera9.jpg" class="card-img-top img-fluid" alt="Campera #9" />
              <div class="card-body">
          <p class="card-text">Campera #9</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card text-center mx-auto outfit-card">
              <img src="./assets/cards/campera10.jpg" class="card-img-top img-fluid" alt="Campera #10" />
              <div class="card-body">
          <p class="card-text">Campera #10</p>
              </div>
            </div>
          </div>
        </div>
      `;
  }
  mainContent.innerHTML = html;
}
