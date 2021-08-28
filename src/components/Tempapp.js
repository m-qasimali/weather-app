import React, { useEffect } from 'react'
import { useState } from 'react';

const Tempapp=()=> {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState();
    const [icon,seticon] = useState();


    useEffect(() =>{
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c79f10f1a889e717c7c63390dc7e1af9`;
            const res = await fetch(url);
            const json_data = await res.json();
            console.log(json_data);
            setcity(json_data.main);
            {if(json_data.weather !== undefined) {
                seticon(json_data.weather[0].icon)
            }}
        }
        fetchAPI();
    },[search]);
    return (
        <>
           <div className="box">
               <div className="inputData text-center pt-3">
                   <input type="search" value={search} onChange={(e)=>{setsearch(e.target.value)}} className="inputField rounded-pill" placeholder="Enter Any City..." />
               </div>
               {!city?<div className="null">No Data Found</div>:
                <>
                <div className="info">
                <div><img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} /></div>
                    <h1 className="location">
                    <i className="fas fa-street-view"></i>
                    {search}
                    </h1>
                    <h1 className="temp">{city.temp}°C</h1>
                    <p className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</p>
                </div>
                </>
            }
           </div> 

        </>
    )
}

export default Tempapp;
