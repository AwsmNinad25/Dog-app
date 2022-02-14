const DOG_BREEDS = "https://dog.ceo/api/breeds/list/all";
const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const select = document.querySelector('.breeds');
const spinner = document.querySelector('.spinner');
const img = document.querySelector('.img-breed');


fetch(DOG_BREEDS)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const breedList = Object.keys(data.message);
        for (let i = 0; i < breedList.length; i++) {
            const option = document.createElement('option');
            option.value = breedList[i];
            option.innerText = breedList[i];
            select.appendChild(option);
        }
    });
spinner.classList.add('show');
img.classList.remove('show');
fetch(DOG_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        img.src = data.message;
        img.alt = "cute doggo";
    });

select.addEventListener('change', function (event) {
    let imgURL = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    spinner.classList.add('show');
    img.classList.remove('show');
    fetch(imgURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            img.src = data.message;
            img.alt = "cute doggo";
        });
});
img.addEventListener('load', function () {
    spinner.classList.remove('show');
    img.classList.add('show');
});