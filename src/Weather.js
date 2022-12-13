import React, { useState, useEffect } from 'react'
import './Weather.scss'

export const Weather = () => {

  const [search, setsearch] = useState("pune")
  const [searchResult, setsearchResult] = useState('')



  useEffect(() => {
    let update = async () => {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d52f8660aa7990eba29e85d80708991b`
      let scan = await fetch(url)
      let result = await scan.json()
      setsearchResult(result.main)
    }
    update()
  }, [search])


  return (
    <div>
      <div className='box' >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '5px' }}>
          <input type="text" style={{ borderRadius: "10px", border: "0px", padding: '5px' ,marginTop:'7px'}} onChange={(event) => setsearch(event.target.value)} placeholder='Enter country Hear'/>
        </div>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        <div className="weathercon"><i className='fas fa-sun' style={{ color: "#d36326" }}></i></div>
        {
          !searchResult ? (
            <p className='temp' style={{ color: 'red' }}>Weather not Found</p>
          ) : (
            <div>
              <div className="info">
                <h1 className='' style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>{searchResult.temp} &deg;C</h1>
                <h2 className="location">{search}</h2>
                <h1 className="temp" style={{fontSize:'13px'}}>min temp {searchResult.temp_min} &deg;C | max temp {searchResult.temp_max} &deg;C</h1>
              </div>
            </div>
          )
        }
      </div>
    </div >
  )
}
