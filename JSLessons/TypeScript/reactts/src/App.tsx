import { CountryType } from "./types";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState<CountryType[]>([]);
  const getCountry = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setCountry(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCountry();
  }, []);

  return <div>

    {country.map(c=>{
        return <p>{c.name}={c.symbol}</p>
    })}
  </div>;
}

export default App;
