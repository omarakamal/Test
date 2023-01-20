const getCountryInfo = camName =>{
    axios.get(`https://restcountries.com/v2/name/${camName}`)
    .then(response=>{
        const countryDetail = response.data[0]
        console.log('single country', countryDetail)
        document.getElementById('country-name').innerText = countryDetail.name
        document.getElementById('country-capital').innerText = countryDetail.capital;
        document.getElementById('country-flag').setAttribute('src',countryDetail.flag)
        document.getElementById('region').innerText = countryDetail.region
    })
    .catch(error=>console.log(error))

}


document.getElementById('get-country-btn').addEventListener('click',()=>{
    const userInput = document.getElementById('country-name-input').value
    getCountryInfo(userInput)
})