import React,{useState, createContext} from 'react'

export const MovieConetext = createContext();

export const MovieProvider = props => {
    const [movies,setMovies] = useState([
        {
            name: "Interstaller",
            price: '20',
            id:123123
        },
        {
            name: "Brid box",
            price: '40',
            id:4562423
        },
        {
            name: "Home Alone",
            price: '10',
            id:475202
        }
]);
  return (
    <MovieConetext.Provider value={[movies,setMovies]}>
      {props.children}
    </MovieConetext.Provider>
  )
}
