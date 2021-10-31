async function asign_values() {
    for (i = 1; i <= 16; i++) {
        let execute = document.getElementById(`i_${i}`)
        execute.src = `imgs/img${i}.jpg`;
    }
}

asign_values();


const imagenes = document.querySelectorAll(".img");
const fullscreen = document.querySelector(".big-image");
//const fullscreen_container = document.querySelector(".open");
const manto = document.querySelector(".manto");

function fullscreen2(img_width, img_height, manto_width, manto_height) {
    imagenes.forEach(img2 => {

        img2.addEventListener("click", () => {
            //fullscreen_container.style.display = "block";
            fullscreen.style.display = "block";
            manto.style.display = "flex";
            fullscreen.src = img2.src;

            setTimeout(() => {

                fullscreen.style.width = img_width;
                fullscreen.style.height = img_height;
                fullscreen.style.zIndex = "3";
                fullscreen.style.transition = "2s";
            }, 50)

        })


        img2.addEventListener("mouseout", () => {})
    })

    manto.addEventListener("click", () => {
        fullscreen.style.width = manto_width;
        fullscreen.style.height = manto_height;
        fullscreen.style.transition = "2s";

        setTimeout(() => {
            fullscreen.style.display = "none";
            manto.style.display = "none";
        }, 2060)

    })
}


if (innerWidth > 600) {
    fullscreen2("40vw", "60vh", "20vw", "40vh");
}


if (innerWidth < 600) {
    fullscreen2("50vw", "30vh", "30vw", "20vh");
}