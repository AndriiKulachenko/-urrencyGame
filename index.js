


const img = [{path: "images/cent.png"}, {path: "./images/euro.webp"}, {path: "./images/grn.jpg"}, {path: "./images/peso.jpg"}, {path: "./images/sterling.jpg"}, {path: "./images/yen.png"}, {path: "./images/zloty.jpg"}, {path: "./images/real.jpg"}];

const button = document.querySelector('.start');

const container = document.querySelector('.container');

let newImg = [...img, ...img];

function renderImg(){
    newImg.forEach(element =>{
            container.insertAdjacentElement('beforeend', newImg) 
    })
};

button.addEventListener('click', renderImg());