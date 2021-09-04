const datafetch = (location) => {
    const apiKey = `a6a8b8f7e4078905cd73727c1b86e3b1`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
}
const weatherIcon = (icon) => {
    const url = `http://openweathermap.org/img/wn/${icon.weather[0].icon}@2x.png`
    fetch(url)
        .then(res => document.getElementById('img').src = res.url)
}
const setData = (data) => {
    weatherIcon(data)
    console.log(data)
    const getId = id => document.getElementById(id)
    getId('city').innerText = data.name
    getId('temp').innerText = data.main.temp
    getId('temp_pos').innerText = data.weather[0].main
}
const getData = () => {
    const data = document.getElementById('input')
    const dataValue = data.value
    datafetch(dataValue)
}