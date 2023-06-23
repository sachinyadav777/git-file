



let box = document.getElementsByClassName("box")
let currentActive = 1;
for (let i = 1; i < box.length - 1; i++) {
    box[i].addEventListener("mouseover", function (e) {
        if (currentActive != i) {
            currentActive = i
            document.getElementsByClassName("image")[i - 1].classList.add(`img${i}`)
            for (let z = 0; z < box.length; z++) {
                document.getElementsByClassName("div")[z].classList.add(`anim${z}`)
            }
            for (let j = 1; j < box.length - 1; j++) {
                if (j != i) {
                    document.getElementsByClassName("image")[j - 1].classList.remove(`img${j}`)
                }
            }
        }
    })
    box[i].addEventListener("animationend", function (e) {
        remove_animation();

    })
}

function remove_animation() {
    for (let z = 0; z < box.length; z++) {
        document.getElementsByClassName("div")[z].classList.remove(`anim${z}`)
    }
}
