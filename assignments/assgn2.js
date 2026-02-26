const form = document.querySelector('#weatherForm');
form.addEventListener('submit',async (event) => {
    event.preventDefault();
    const searchedCity= city.value;
    console.log (searchedCity);
    const apiKey = 'f4b18f5584a32f586f3d97e8bd56429b';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
      
})