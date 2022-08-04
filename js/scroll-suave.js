
const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"');





function ScrollTop(event) {

    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    const topo = document.querySelector(href);

    topo.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

}



linkInterno.addEventListener('click', ScrollTop);



