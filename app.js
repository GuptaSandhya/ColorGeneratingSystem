let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    // console.log("clicked");
    let h3 = document.querySelector("h3");
    let getRandomColor = randomColor();
    h3.innerText = getRandomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = getRandomColor;
})

function randomColor(){
    let R = Math.floor(Math.random()*255);
    let G = Math.floor(Math.random()*255);
    let B = Math.floor(Math.random()*255);

    let color = `rgb(${R}, ${G}, ${B})`;
    return color;
}