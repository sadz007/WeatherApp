import {useState} from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  // imperial Units//

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=21444448997807c042f1ddca342ab366`

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url)
        .then((response) => {
          setData(response.data)
          console.log(response.data.weather)
          console.log(response.data.weather[0].main)
        })
        setLocation('')
    }
  }




  return (
    <div className="App">
      

      <header className={
        (data.weather )?
        (data.weather[0].main ==="Rain")? "rain":
        (data.weather[0].main ==="Clouds")? "clouds":
        (data.weather[0].main ==="Rain")? "rain":  
        (data.weather[0].main ==="Smoke")? "smoke": 
        (data.weather[0].main ==="Hot")? "hot": 
        (data.weather[0].main ==="Humid")? "humid": 
        (data.weather[0].main ==="Snow")? "snow": 
        (data.weather[0].main ==="Clear")? "clear": 
        (data.weather[0].main ==="Thunderstorm")? "storm": 
        (data.weather[0].main ==="Sunny")? "sunny":  
        "App-header":"App-header"} >
        
          <div >
            <input value={location}
            className='search-bar'
            placeholder="Enter Location..."
            onKeyPress={searchLocation}
            onChange={(e)=>setLocation(e.target.value)}/>
          </div>

        <div className='container'>
          <div className='time'>
            {data.time}
          </div>
          <div className='top'>
            <div>
              <p>{data.name} </p>
            </div>
            <div className='temp'>
              {data.main ?<h1>{data.main.temp.toFixed()}°F</h1> :null}
            </div>
            <div className='description'>
              {data.weather ? <p>{data.weather[0].main}<p></p>{data.weather[0].description}</p>: null}
            </div>
          </div>
          { data.name !== undefined &&
            <div className='bottom'>
              <div className="feel">
                {data.main ? <p>{data.main.feels_like.toFixed()}°F</p>: null}
                <p>Feels Like</p>
              </div>
              <div className='humidity'>
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}

                <p>Wind Speed</p>
              </div>
            </div>
        }
        </div>
  
      </header>
    </div>
  );
}

export default App;
