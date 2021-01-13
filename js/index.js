'use strict';



const showModalButton = document.querySelector('#showModalButton');
const closeModalButton = document.querySelector('#closeModalButton');

showModalButton.addEventListener('click', function(event){
    const cityNameInput = document.querySelector('#cityNameInput');
    const city = cityNameInput.value; 
    toggleModal();
    getWeather(city);
});
closeModalButton.addEventListener('click', toggleModal);
   
function toggleModal() { 
    const modalOverlay = document.querySelector("#overlay");
    modalOverlay.classList.toggle("visible");
    

}


const getWeatherForm = document.querySelector('#getWeather');


function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=?${city}&appid=2e6f7c1acf9cbf08124e637b5feb3668&units=imperial`;
        get(url).then(function (fetchResponse) {
            console.log(fetchResponse);
        
    });
}
// Put an evenlistener for submit
//get the user city from the form
//pass that city into the get weather function
//update the dom with the weather information













