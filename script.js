const back = document.querySelector("#back");
const next = document.querySelector("#next");

const photos = ["merch1.jpeg", "merch2.jpeg", "merch3.jpeg", "merch4.jpeg"];

let i = 0;

next.addEventListener("click", () => {
    i ++;

    if (i > photos.length -1) {
        i=0;
    }

    document.querySelector(".merch").src = photos[i];
})

back.addEventListener("click", () => {
    i --;
    if (i<0) {
        i=photos.length -1;
    }
    document.querySelector(".merch").src = photos[i];
})

console.log(next);
console.log(back);
console.log(photos);


