// request - sorgu
// response - cavab

// const comeData = new Promise((success,reject)=>{
//     const resData = false;
//     if (resData) {
//         success("Ugurlu");
//     }else{
//         reject("Ugursuz")
//     }
// })


// comeData.then((res)=>console.log('Data',res))
// .catch(err=>console.log("Data",err));

const axios = require('axios');

// function comeCounty() {
//     console.log(axios.get('https://restcountries.com/v3.1/all'));
// }

// comeCounty();
// bu hisse promise call etmek ucundur

//  function comeCounty() {
//     axios
//     .get('https://restcountries.com/v3.1/all')
//     .then((res)=>console.log(res.data[0]))
//     .catch('error var');
// }


async function comeCounty() {
const countryList = await axios.get("https://restcountries.com/v3.1/all");
console.log(countryList);
}
comeCounty();



