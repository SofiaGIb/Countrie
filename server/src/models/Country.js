const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type : DataTypes.STRING(3),
      default : DataTypes.UUIDV4,
      validate :{
        is: /^[a-zA-Z]{3}$/,
        msg: "Debe contener 3 letras!!"
      },
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true
    },
    imagen_bandera:{
      type : DataTypes.STRING,
      allowNull :false,
      validate :{
        msg : "Debes ingresar la info"}

    },
    continente : {
      type: DataTypes.STRING,
      allowNull:false,
      validate :{
        msg : "Debes ingresar la info"}



    },
    capital:{
      type: DataTypes.STRING,
      allowNull : false,
      validate :{
        msg : "Debes ingresar la info"}




    },
    poblacion:{
      type:DataTypes.STRING,
      allowNull: false ,
      validate :{
        msg : "Debes ingresar la info"}



    }
  },
  {  timestamps:false}
);
};