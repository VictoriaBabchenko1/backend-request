const container = document.querySelector('.cards-container');

const createCard = (cardData) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img_wrapper = document.createElement('div');
    img_wrapper.classList.add('card__image-wrapper');
    card.appendChild(img_wrapper);

    const img = document.createElement('img');
    img.src = cardData.image;
    img.classList.add('card__image');
    img_wrapper.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = cardData.title;
    title.classList.add('card__title');
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = cardData.description;
    description.classList.add('card__description');
    card.appendChild(description);

    return card;
};

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        data.forEach(item => {
            const cardData = {
                image: 'https://picsum.photos/150/150?random=' + item.id,
                title: item.title,
                description: item.body
            };
            container.appendChild(createCard(cardData));
        });
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});
