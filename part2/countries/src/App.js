import React, { useState, useEffect } from 'react'

const App = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  const handleQueryUpdate = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(data => {

          const enrichedDataPromises = data.map(country =>
            new Promise((resolve, reject) => {
            const [lat, lon] = country.capitalInfo.latlng;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WHEATHER_API_KEY}`)
              .then(weatherResponse => {
                if (weatherResponse.status !== 200) reject(weatherResponse.status);
                weatherResponse.json().then(weather => {
                  resolve({
                    ...country,
                    weather
                  });
                });
              });
          }));

          Promise.all(enrichedDataPromises).then(enrichedData => {
            setSuggestions(enrichedData);
          });
        });
      }).catch(error => {
        console.log(error);
      });
  }, [query]);

  return (
    <div>
      <span>Search for a country : </span>
      <input type="text" value={query} onChange={handleQueryUpdate} />
      {suggestions.length === 1 ? (
        <div>
          <h2>{suggestions[0].name.common}</h2>
          <div>capital: {suggestions[0].capital}</div>
          <div>population: {suggestions[0].population}</div>
          <br/>
          <div>
            <strong>languages:</strong>
            <ul>{Object.values(suggestions[0].languages).map(language => (<li>{language}</li>))}</ul>
          </div>
          <img src={suggestions[0].flags.png} alt={suggestions[0].name.common} />
          <br/>
          <div>
            <h2>Wheater in {suggestions[0].capital}</h2>
            <div>temperature: {suggestions[0].weather.main.temp}</div>
            <div>
              <img src={`http://openweathermap.org/img/wn/${suggestions[0].weather.weather[0].icon}@2x.png`} alt={suggestions[0].weather.weather[0].description} />
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          {suggestions.length > 10 ? (
            <span>Too many matches, try to be more precise</span>
          ) : (
            <ul>
              {suggestions.map(suggestion => (
                <li>{suggestion.name.official} <button onClick={() => setQuery(suggestion.name.official)} >Show</button> </li>
              ))}
            </ul>
          )}
        </React.Fragment>
      )}
    </div>
  )
}

export default App;