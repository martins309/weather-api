'use strict';



const showModalButton = document.querySelector('#showModalButton');
const closeModalButton = document.querySelector('#closeModalButton');
const cityText = document.querySelector('#city');
const weatherText = document.querySelector('#weather');

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e6f7c1acf9cbf08124e637b5feb3668&units=imperial`;
    get(url).then(function(fetchResponse) {
        console.log(fetchResponse);
        cityText.innerHTML = fetchResponse.name;
        weatherText.innerHTML = fetchResponse.main.temp;
    });
};

function toggleModal() { 
    const modalOverlay = document.querySelector("#overlay");
    modalOverlay.classList.toggle("visible");
    

}

showModalButton.addEventListener('click', function(event){
    const cityNameInput = document.querySelector('#cityNameInput');
    const city = cityNameInput.value; 
    toggleModal();
    getWeather(city);
});
closeModalButton.addEventListener('click', toggleModal);
   


// Put an evenlistener for submit
//get the user city from the form
//pass that city into the get weather function
//update the dom with the weather information













