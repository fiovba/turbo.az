const threeBtn = document.getElementById('three-btn')
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const marka = document.getElementById('marka')
const model = document.getElementById('model')
const seher = document.getElementById('seher')
const kreditBtn = document.getElementById('kredit-btn')
const barterBtn = document.getElementById('barter-btn')
const banNovu = document.getElementById('banNovu')
const ilMinMax1 = document.getElementById('ilMinMax1')
const ilMinMax2 = document.getElementById('ilMinMax2')
const cardContainer = document.getElementById('cardContainer')
changeColor(0)

function changeColor(tem) {
    btn1.style.background = 'white';
    btn1.style.color = '#bcbcbc';
    btn2.style.background = 'white';
    btn2.style.color = '#bcbcbc';
    btn3.style.background = 'white';
    btn3.style.color = '#bcbcbc';

    if (tem === 0) {
        btn1.style.background = '#ca1016';
        btn1.style.color = 'white';
    } else if (tem === 1) {
        btn2.style.background = '#ca1016';
        btn2.style.color = 'white';
    } else if (tem === -1) {
        btn3.style.background = '#ca1016';
        btn3.style.color = 'white';
    }
}

const brands = [];
data.forEach((item) => !brands.includes(item.brand) && brands.push(item.brand));
brands.sort().forEach(item => marka.innerHTML += `<option value="${item}">${item}</option>`);

const models = [];
data.forEach((item) => !models.includes(item.model) && models.push(item.model));
models.sort().forEach(item => model.innerHTML += `<option value="${item}">${item}</option>`);

const cities = [];
data.forEach((item) => !cities.includes(item.city) && cities.push(item.city));
cities.sort().forEach(item => seher.innerHTML += `<option value="${item}">${item}</option>`);

const banTypes = [];
data.forEach((item) => !banTypes.includes(item.banType) && banTypes.push(item.banType));
banTypes.sort().forEach(item => banNovu.innerHTML += `<option value="${item}">${item}</option>`);

changeBtnColor();

function changeBtnColor(t) {
    kreditBtn.style.borderColor = '#e0e0e0';
    kreditBtn.style.color = '#000';
    barterBtn.style.borderColor = '#e0e0e0';
    barterBtn.style.color = '#000';

    if (t === 1) {
        kreditBtn.style.borderColor = '#ca1016';
        kreditBtn.style.color = '#ca1016';
    } else if (t === 0) {
        barterBtn.style.borderColor = '#ca1016';
        barterBtn.style.color = '#ca1016';
    }
}

for (let i = 2025; i >= 1905; i--) {
    ilMinMax1.innerHTML += `<option value="il${i}"> ${i} </option>`
    ilMinMax2.innerHTML += `<option value="il2${i}"> ${i} </option>`
}

// swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let count = 8;

function printCards() {
    cardContainer.innerHTML = ""

    for (let i = 0; i < count; i++) {
        cardContainer.innerHTML += `
        <div  class="relative w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col h-[540px]">
          <a class="flex-grow relative">
            <img onclick="showDetails(${data[i].id})" class="w-full h-[200px] object-cover p-4 rounded-t-lg" src="${data[i].images}" alt="product image" style="width: 100%; height: 200px; object-fit: cover;" />
            <span onclick="makeRed(${data[i].id})" id="heart-${data[i].id}" class="hover:text-[#c10007] p-5 absolute top-3 right-0 text-gray-400 cursor-pointer">
              <i class="fa fa-heart text-2xl text-white"></i>
            </span>
          </a>
          <div class="px-5 pb-5 flex flex-col justify-between flex-grow" onclick="showDetails(${data[i].id})">
            <a href="#">
              <h3 class="text-md sm:text-xl font-semibold tracking-tight text-gray-900">${data[i].brand}</h3>
              <h4 class="text-sm sm:text-lg font-semibold tracking-tight text-gray-700">${data[i].model}</h4>
              <h4>${data[i].banType} ${data[i].odometer} ${data[i].odometerUnit} </h4>
              <h5 class="text-gray-500">${data[i].dates}</h5>
            </a>
            <div class="flex items-center">
              <div class="flex items-center space-x-1 flex-wrap text-[10px] sm:text-lg">
                <i class="fa fa-star text-yellow-300"></i>
                <i class="fa fa-star text-yellow-300"></i>
                <i class="fa fa-star text-yellow-300"></i>
                <i class="fa fa-star text-yellow-300"></i>
                <i class="fa fa-star text-gray-200"></i>
              </div>
            </div>
            <div class="flex items-center justify-between text-sm sm:text-2xl">
              <span class=" font-bold text-black">${data[i].price} ${data[i].currency}</span>
            </div>
          </div>
        </div>`;
    }
}
function showDetails(){

}
function makeRed(id) {
    const heartIcon = document.querySelector(`#heart-${id} i`);
    const favoriteList = document.getElementById('favorite');
    const existingItem = document.getElementById(`fav-item-${id}`);
    const item = data.find(item => item.id == id);
    if (heartIcon.style.color == "rgb(255, 255, 255)" || heartIcon.style.color == "") {
        heartIcon.style.color = "rgb(202, 16, 22)";

        if (!existingItem) {
            favoriteList.innerHTML += `
            <li id="fav-item-${id}" class="flex flex-col sm:flex-row sm:justify-between p-5">
                <div class="flex w-full space-x-2 sm:space-x-4">
                    <img class="flex-shrink-0 object-cover w-20 h-20 rounded sm:w-32 sm:h-32"
                        src="${item.images}" 
                        alt="${item.name}">
                    <div class="flex flex-col justify-between w-full pb-4">
                        <div class="flex justify-between w-full pb-2 space-x-2">
                            <div class="space-y-1">
                                <h3 class="text-lg font-semibold">${item.brand}, ${item.model}, ${item.year}</h3>
                                <p class="text-sm text-gray-600">${item.banType}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-semibold">${item.price}€</p>
                            </div>
                        </div>
                        <button onclick="removeFavorite(${id})" class="text-red-500 text-sm mt-2">Remove</button>
                    </div>
                </div>
            </li>`;
        }
    } else {
        heartIcon.style.color = "rgb(255, 255, 255)";
        if (existingItem) {
            existingItem.remove();
        }
    }
}

function removeFavorite(id) {
    document.getElementById(`fav-item-${id}`).remove();
    document.querySelector(`#heart-${id} i`).style.color = "rgb(255, 255, 255)";
}

printCards();

const showMoreBtn = document.getElementById('showMoreBtn')

function showMore() {
    if (count < data.length) {
        count += 8;
    }
    if (count > data.length) count = data.length
    printCards();
    if (count == data.length) showMoreBtn.innerHTML = '';
}

function filterCards() {
    cardContainer.innerHTML = "";
    showMoreBtn.innerHTML = '';
    data
        .filter(item => item.brand == marka.value)
        .forEach(item => {
            cardContainer.innerHTML += `
        <div class="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col h-[400px]">
          <a class="flex-grow relative">
            <img class="w-full h-[200px] object-cover p-4 rounded-t-lg" src="${item.images}" alt="product image" style="width: 100%; height: 200px; object-fit: cover;" />
            <span onclick="makeRed(${item.id})" id="heart-${item.id}" class="hover:text-[#c10007] p-5 absolute top-3 right-0 text-gray-400 cursor-pointer">
              <i class="fa fa-heart text-2xl text-white"></i>
            </span>
          </a>
          <div class="px-5 pb-5 flex flex-col justify-between flex-grow">
            <a href="#">
              <h3 class="text-xl font-semibold tracking-tight text-gray-900">${item.brand}</h3>
              <h4 class="text-md font-semibold tracking-tight text-gray-700">${item.model}</h4>
              <h4>${item.banType} ${item.odometer} ${item.odometerUnit} </h4>
              <h5 class="text-gray-500">${item.dates}</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1">
                <i class="fa fa-star text-yellow-300"></i>
                <i class="fa fa-star text-yellow-300"></i>
                <i class="fa fa-star text-yellow-300"></i>
                <i class="fa fa-star text-yellow-300"></i>
                <i class="fa fa-star text-gray-200"></i>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-black">${item.price} ${item.currency}</span>
            </div>
          </div>
        </div>`;
        });
}
function toggleSlideover() {
    document.getElementById('slideover-container').classList.toggle('invisible');
    document.getElementById('slideover-bg').classList.toggle('opacity-0');
    document.getElementById('slideover-bg').classList.toggle('opacity-50');
    document.getElementById('slideover').classList.toggle('translate-x-full');
}

function showDetails(id) {
    window.location.href = `http://127.0.0.1:5500/details.htm?id=${id}`
   
}


