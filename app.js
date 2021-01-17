window.addEventListener("load", ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            // using openweather map to retrieve data from current position 
           const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=45d692b5e3aaf3106ac7a7e1a7f05ac3`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // accessing data. same as data.main.temp so it will pull out temperature 
                    const {temp} = data.main; 
                    const {description} = data.weather[0];
                    const {name} = data; 
                    // Set DOM elements from the API
                    temperatureDegree.textContent = Math.floor((temp-273.15)*1.8+32); 
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent  = name; 
                });
    
        });


    }

function setIcons(icon,iconID){
    const skycons = new skycons({color: 'white'});

}

});