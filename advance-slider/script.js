
let item = document.querySelector(".inner-box3");
let box = item.querySelector(".box");
let boxwidth = box.offsetWidth;
let boxchild = [...item.children]
let isbuttonclick = false;

// for content and image changer.......................
let h3 = document.querySelector("h3")
let em = document.querySelectorAll("em")
let replacesrc = document.querySelector("img")

// for number of boxes who can't hidden
let offwidth = Math.round(item.offsetWidth / boxwidth)

// add copy of boxes afterbigin
boxchild.slice(-offwidth).reverse().forEach(card => {
    item.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// add copy of boxes afterend
boxchild.slice(0, offwidth).forEach(card => {
    item.insertAdjacentHTML("beforeend", card.outerHTML);
});
// for seen in front of original value
item.classList.add("no-tranzition")
item.scrollLeft = item.offsetWidth;
item.classList.remove("no-tranzition")

// for scrolling next box.. & box selector
let boxselector = document.getElementsByClassName("box")
let selector = offwidth;
 boxselector[offwidth].classList.add("margin");
let next = document.getElementsByClassName("next")[0]
next.addEventListener("click", function () {
    if (!isbuttonclick) {
        item.scrollLeft += boxwidth + 1;
        // box selector...
        Nboxselector();
        Ncreplace();
        isbuttonclick = true;
    }
    setTimeout(() => {
        isbuttonclick = false;
    }, 1000);
});

// for scrolling prev box.. & box selector
let prev = document.getElementsByClassName("prev")[0]
prev.addEventListener("click", function () {
    if (!isbuttonclick) {
        item.scrollLeft -= boxwidth + 1;
        // box selector
        Pboxselector();
        Pcreplace();
        isbuttonclick = true;
    }
    setTimeout(() => {
        isbuttonclick = false;
    }, 1000);
})

// for infinite scrolling.
item.addEventListener("scroll", function () {
    if (item.scrollLeft <= 1) {
        item.classList.add("no-tranzition")
        item.scrollLeft = item.scrollWidth - (2 * item.offsetWidth)
        item.classList.remove("no-tranzition")
    }
    else if (Math.ceil(item.scrollLeft) == item.scrollWidth - item.offsetWidth) {
        console.log("last")
        item.classList.add("no-tranzition")
        item.scrollLeft = item.offsetWidth;
        item.classList.remove("no-tranzition")
    }
})

let papa = document.querySelectorAll(".box")
for (let i = 0; i < papa.length; i++) {
    console.log("hello")
    papa[i].addEventListener("click", function () {
        selector = i;
        for (let z of boxselector) {
            if (z != i) {
                z.classList.remove("margin");
            }
        }
        if (i > 9) {
            boxselector[i - 5].classList.add("margin");
            item.scrollLeft = i * boxwidth;
            selector = i;
            Ncreplace();
            Pcreplace();
            selector = offwidth;
            return;
        }
        boxselector[i].classList.add("margin");
        item.scrollLeft = i * boxwidth;
        Ncreplace();
        Pcreplace();
    })
}


//........................................................

function Nboxselector() {
    selector += 1;
    for (let z of boxselector) {
        if (z != selector) {
            z.classList.remove("margin");
        }
    }
    if (selector > 9) {
        selector = 5;
        boxselector[offwidth].classList.add("margin");
        return;
    }
    boxselector[selector].classList.add("margin");
}
//
function Pboxselector() {    
    selector -= 1;
    for (let z of boxselector) {
        if (z != selector) {
            z.classList.remove("margin");
        }
    }
    if (selector < 1) {
        selector = offwidth;
        boxselector[offwidth].classList.add("margin");
        return;
    }
    boxselector[selector].classList.add("margin");
}

function Ncreplace() {
    switch (selector) {

        case 5:
        case 10:
            h3.innerHTML = "MONTEREY"
            replacesrc.src = "01.webp"
            em[0].innerHTML = "4"
            em[1].innerHTML = "2"
            em[2].innerHTML = "4"
            em[3].innerHTML = "76.94"
            em[4].innerHTML = "YES"
            em[5].innerHTML = "2000"
            break;
        case 6:
        case 11:
            h3.innerHTML = "SEA BREEZE"
            replacesrc.src = "02.jpg"
            em[0].innerHTML = "3"
            em[1].innerHTML = "1"
            em[2].innerHTML = "3"
            em[3].innerHTML = "46.80"
            em[4].innerHTML = "NO"
            em[5].innerHTML = "1200"
            break;
        case 7:
        case 12:
            h3.innerHTML = "SUNRISE"
            replacesrc.src = "03.jpg"
            em[0].innerHTML = "5"
            em[1].innerHTML = "5"
            em[2].innerHTML = "14"
            em[3].innerHTML = "158.88"
            em[4].innerHTML = "YES"
            em[5].innerHTML = "2500"
            break;
        case 8:
        case 13:
            h3.innerHTML = "VISTA"
            replacesrc.src = "04.webp"
            em[0].innerHTML = "6"
            em[1].innerHTML = "3"
            em[2].innerHTML = "6"
            em[3].innerHTML = "120.00"
            em[4].innerHTML = "YES"
            em[5].innerHTML = "2200"
            break;
        case 9:
        case 14:
            h3.innerHTML = "PENTHOUSE"
            replacesrc.src = "05.jpg"
            em[0].innerHTML = "7"
            em[1].innerHTML = "4"
            em[2].innerHTML = "12"
            em[3].innerHTML = "200.00"
            em[4].innerHTML = "YES"
            em[5].innerHTML = "3000"
            break;
        // case 10:
        //     h3.innerHTML = "MONTEREY"
        //     replacesrc.src = "01.webp"
        //     em[0].innerHTML = "4"
        //     em[1].innerHTML = "2"
        //     em[2].innerHTML = "4"
        //     em[3].innerHTML = "76.94"
        //     em[4].innerHTML = "YES"
        //     em[5].innerHTML = "2000"
        //     break;

        default:
            break;
    }

}

function Pcreplace() {
    switch (selector) {
        case 5:
            h3.innerHTML = "MONTEREY"
            replacesrc.src = "01.webp"
            em[0].innerHTML = "4"
            em[1].innerHTML = "2"
            em[2].innerHTML = "4"
            em[3].innerHTML = "76.94"
            em[4].innerHTML = "YES"
            em[5].innerHTML = "2000"
            break;
        case 4:
            h3.innerHTML = "PENTHOUSE"
            replacesrc.src = "05.jpg "
            em[0].innerHTML = "7"
            em[1].innerHTML = "4"
            em[2].innerHTML = "12"
            em[3].innerHTML = "200.00"
            em[4].innerHTML = "YES"
            em[5].innerHTML = "3000"
            break;
        case 3:
            h3.innerHTML = "VISTA"
            replacesrc.src = "04.webp"
            em[0].innerHTML = "6"
            em[1].innerHTML = "3"
            em[2].innerHTML = "6"
            em[3].innerHTML = "120.00"
            em[4].innerHTML = "YES"
            em[5].innerHTML = "2200"
            break;
        case 2:
            h3.innerHTML = "SUNRISE"
            replacesrc.src = "03.jpg"
            em[0].innerHTML = "5"
            em[1].innerHTML = "5"
            em[2].innerHTML = "14"
            em[3].innerHTML = "158.88"
            em[4].innerHTML = "YES"
            em[5].innerHTML = "2500"
            break;
        case 1:
            h3.innerHTML = "SEA BREEZE"
            replacesrc.src = "02.jpg"
            em[0].innerHTML = "3"
            em[1].innerHTML = "1"
            em[2].innerHTML = "3"
            em[3].innerHTML = "46.80"
            em[4].innerHTML = "NO"
            em[5].innerHTML = "1200"
            break;
        default:
            break;
    }
}


// // Define your media query
// var mediaQuery = window.matchMedia("(max-width: 600px)");
// // Define the callback function to execute when the media query matches
// var handleMediaQueryChange = function(mediaQuery) {
//   if (mediaQuery.matches) {
//     // Media query condition is met (screen width is <= 600px)
//     // Execute your JavaScript code here
//     console.log("i am media querry")
//     next.addEventListener("click", function () {
//         if (!isbuttonclick) {
//             item.scrollLeft += boxwidth + 1;
//             // box selector...
//             // Nboxselector();
//             selector += 1;
//             for (let z of boxselector) {
//                 if (z != selector) {
//                     z.classList.remove("margin");
//                 }
//             }
//             if (selector > 10) {
//                 console.log("am in")
//                 selector = offwidth;
//                 boxselector[offwidth].classList.add("margin");
//                 return;
//             }
//             boxselector[selector].classList.add("margin");
//             Ncreplace();
//             isbuttonclick = true;
//         }
//         setTimeout(() => {
//             isbuttonclick = false;
//         }, 1000);
//     });
//   }
// //     // Media query condition is not met (screen width is > 600px)
// //     // Execute any necessary cleanup code here
// //     console.log("Media query not matched!");
// //   }
// };
// // Add an event listener to the media query
// mediaQuery.addListener(handleMediaQueryChange);




