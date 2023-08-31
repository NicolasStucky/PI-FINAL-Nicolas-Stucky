const { Op } = require('sequelize');
const {Country,Activity}= require('../db')

const createCountries = async(name,capital,image) =>{
const newCountrie = await Country.create({
    name,capital,image
})
return newCountrie
};

const countriesBd = async (name) => {
    const { Op } = require('sequelize');

    if (name) {
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: {
                model: Activity, 

            }
        });
        return countries;
    }

    const allCountries = await Country.findAll({
        include: {
            model: Activity,
        }
    });
    return allCountries;
};



const getForIdCountries = async (id) => {
    if (id) {
        const country = await Country.findByPk(id, {
            include: {
                model: Activity,
            }
        });

        if (country) {
            return country;
        } else {
            console.log(`No se encontró ningún país con el id ${id}`);
        }
    } else {
        console.log('Se necesita proporcionar un ID válido');
    }
};


module.exports = {
createCountries,
countriesBd,
getForIdCountries
}