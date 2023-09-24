const loadCountries = () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(ourTour => console.log(ourTour))
}

const displayOurTours = (countries) => {
        const countryDiv = document.getElementById('country');
        countries.forEach((country) =>{
                console.log(country);
                const div = document.createElement("div");
                div.classlist.add('country-info')
                div.innerHTML = `
                        <h3>${country.name.common}</h3>
                        <p>${country?.capital}</p>
                        <button>Show Details</button>
                `

                countryDiv.appendChild(div)
        })
}

loadCountries()