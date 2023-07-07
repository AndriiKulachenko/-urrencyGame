


const img = [images/cent.png, images/euro.webp, images/grn.jpg, images/peso, images/sterling.jpg, images/yen.png, images/zloty.jpg, images/real.jpg];

const button = document.querySelector('.start');

const container = document.querySelector('.container');

let newImg = [...img, ...img];

function renderImg(){
    newImg.forEach(element => {
            container.insertAdjacentElement('beforeend', newImg) 
    })
};

button.addEventListener('click', renderImg());
   





