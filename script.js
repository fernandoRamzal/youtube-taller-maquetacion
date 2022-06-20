// * ---------------------------------------- MENU --------------------------------------------

(() => {
  const btnMenu = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  btnMenu.addEventListener("click", (e) => {
    btnMenu.firstElementChild.classList.toggle("none");
    btnMenu.lastElementChild.classList.toggle("none");
    menu.classList.toggle("is-active");
  });
    
    
    document.addEventListener("click", (e) => {
        if (!e.target.matches('.menu a')) return false;
          btnMenu.firstElementChild.classList.remove("none");
          btnMenu.lastElementChild.classList.add("none");
          menu.classList.remove("is-active");
    })
})(document);


// * ---------------------------------------- FORM --------------------------------------------
(() => {
  const form = document.querySelector('.contact-form');
  const loader = document.querySelector('.contact-form-loader');
  const response = document.querySelector('.contact-form-response');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    loader.classList.remove('none');
    fetch("https://formsubmit.co/ajax/fernanramirez1998@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        loader.classList.add("none");
        location.hash = "#gracias";
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || "ocurrio un error";
        response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status} || ${message} `;
        loader.classList.add("none");
      })
      .finally(() => {
        loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });

  });

})()