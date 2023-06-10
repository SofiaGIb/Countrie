const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define( 'Country',
    {
      id: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      cca3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continente: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          msg: "Debes ingresar la info",
        },
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          msg: "Debes ingresar la info",
        },
      },
      poblacion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          msg: "Debes ingresar la info",
        },
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};
