import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  )
}

function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])
  return (
    <div className="new">
      <div className='content'>
      <h1 className="header mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Visiting Every country of the world!!!</h1>
      <h3 className="header header2 mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Total Available countries: <span className='text-blue-600 dark:text-blue-500'>{countries.length}</span> </h3>
      <div className="container-base">
      {countries.map((country) => (
        <Country
          capital={country.capital}
          flags={country.flags.png}
          name={country.name.common}
          population={country.population}></Country>
      ))}
      </div>
    </div>
    </div>
  )
}

function Country(props) {
  console.log(props)
  return (
    <div className="container">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={props.flags} alt="Shoes" className="rounded-xl fit" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.name}</h2>
          <p className='px-1'>Capital: {props.capital}</p>
          <p>Total populations: {props.population}</p>
          <div className="card-actions mt-2">
            <button className="btn style-btn">More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
