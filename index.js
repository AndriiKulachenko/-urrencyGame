(() => {
    const cardsSource = [
        {
            pathToImage    : "images/cent.png",
            pairWasSelected: true, // пара для картинки була знайдена (показуємо картинку завжди під час гри). окрім цього, цей параметр по дефолту має значення true, оскільки нам треба юзеру показти всі картинки на 5 секунд перед початком гри
            openedCard     : false, // стан каточки, коли вона була вибрана для подальшого пошуку пари
        },
        {
            pathToImage    : "./images/euro.webp",
            pairWasSelected: true,
            openedCard     : false,
        },
        {
            pathToImage    : "./images/grn.jpg",
            pairWasSelected: true,
            openedCard     : false,
        },
        {
            pathToImage    : "./images/peso.jpg",
            pairWasSelected: true,
            openedCard     : false,
        },
        {
            pathToImage    : "./images/sterling.jpg",
            pairWasSelected: true,
            openedCard     : false,
        },
        {
            pathToImage    : "./images/yen.png",
            pairWasSelected: true,
            openedCard     : false,
        },
        {
            pathToImage    : "./images/zloty.jpg",
            pairWasSelected: true,
            openedCard     : false,
        },
        {
            pathToImage    : "./images/real.jpg",
            pairWasSelected: true,
            openedCard     : false,
        }
    ];

//    const imagesObjectsSourceNew = [];
//
//    for (let i = 0; i < 8; i++) {
//        imagesObjectsSourceNew.push({
//            path: `${i}.png`
//        })
//    }

    let cards;
    let cardsElements = [];


    const button = document.querySelector('.start');

    const container = document.querySelector('.container');

    const renderCards = () => {
        cards               = [...cardsSource, ...cardsSource];
        container.innerHTML = '';
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');

            const cardImage = document.createElement('img');
            cardImage.classList.add('card-image');
            cardImage.setAttribute('src', card.pathToImage);

            cardElement.appendChild(cardImage);
            cardsElements.push(cardElement);

            container.insertAdjacentElement('beforeend', cardElement)
        });
        changeCardsView();

        console.log(cards);
        console.log(cardsElements);
    }

    const changeCardsView = () => {
        cards.forEach((card, index) => {
            if (card.openedCard === true) {
                cardsElements[index].children[0].classList.add('opened-card');
            } else {
                cardsElements[index].children[0].classList.remove('opened-card');
            }

            if (card.pairWasSelected === true) {
                cardsElements[index].children[0].classList.add('pair-was-selected');
            } else {
                cardsElements[index].children[0].classList.remove('pair-was-selected');
            }
        });
    }

    button.addEventListener('click', () => {
        renderCards();
        setTimeout(() => {
            cards.forEach(card => card.pairWasSelected = false);
            changeCardsView();
        }, 5000);
    });
})()
