
function shuffle(array){
    for(let i = array.length - 1; i >= 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}


let imgContainer = document.querySelector(".imgContainer")

let showButton = document.querySelector(".showButton")
let shuffleButton = document.querySelector(".shuffleButton")

showButton.onclick = (e)=>{ //rodyti mygtukas
    shuffleButton.style.display = "inline";
    for(i = 0; i < 10; i++){
        let img = document.createElement("img")
        img.classList.add(i)
        img.src = `images/${i+1}.jpg`
        imgContainer.appendChild(img);


}


shuffleButton.onclick = (e)=>{ //maisyti mygtukas
    let imgArray = Array.from(document.querySelectorAll(".imgContainer img")); //+array
    shuffle(imgArray)
    imgContainer.innerHTML = ""; //clear container?
    imgArray.forEach(img =>{  //.
        imgContainer.appendChild(img);
    });
    console.log("click shuffle works")
    
}

//double click, neveikia.
img.addEventListener("dblclick", () => { 
    console.log("double click happened")
    img.src = "images/11.png";
});
}
