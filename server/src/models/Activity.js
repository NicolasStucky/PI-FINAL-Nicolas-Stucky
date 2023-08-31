const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: 1,
          msg: "La dificultad debe ser mayor o igual a 1",
        },
        max: {
          args: 5,
          msg: "La dificultad debe ser menor o igual a 5",
        },
      },
    },
    
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 24,
      },
    },
    temporada: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["Primavera", "Verano", "Otoño", "Invierno"]],
          msg: "temporada must be one of 'primavera', 'verano', 'otoño', or 'invierno'",
        },
      },
    },
  });
};
