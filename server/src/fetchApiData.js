// const axios=require("axios")
// const {Country}=require("./db")
// const getAllCountries=async()=>{
//     const apiData=(await axios("http://localhost:5000/countries")).data
//     return apiData
// }

// const countriesMaping=async ()=>{
//     const response=await getAllCountries()

//     apiMaping= await response.map((country)=>{
//         return {
//             id:country.cca3,
//             name:country.name.common,
//             flag:country.flags.png,
//             continent:country.continents ? country.continents[0]:"undefined",
//             capital:country.capital ? country.capital[0]: "undefined",
//             subregion:country.subregion ? country.subregion : "undefined",
//             area:country.area ? country.area : null,
//             population:country.population ? country.population : null
//         }
//     })
//     return apiMaping
// }

// const fetchApiDataBase=async()=>{
    
//     try {
//         const allCountries=await countriesMaping()
//         await Country.bulkCreate(allCountries)
//     } catch (error) {
//         console.log("error al crear los countries")
//     }
// }
// module.exports=fetchApiDataBase