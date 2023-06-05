const { DataTypes } = require ('sequelize');

module.exports = (sequelize) =>{
sequelize.define('Activity',{
id:{
    primaryKey: true,
    type : DataTypes.INTEGER,
    autoIncrement :true,
    unique :true,
    allowNull:false
},
name:{ 
    type: DataTypes.TEXT,
allowNull:false},

dificultad:{
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{
        min:1,
        max:5,
        isInt:true,
        msg:"La dificultad no puede setr menor a 1 y superior a 5"
    }
},
duracion :{
   type: DataTypes.TIME,
   allowNull:false,
   validate:{
    isHoraValida: function(value) {
        if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(value)) {
          throw new Error('El dato ingresado debe estar en formato HH:mm');
        }
      }

   }
},
temporada:{
    type: DataTypes.ENUM("verano","otoño","invierno","primavera"),
    allowNull:false,
}

},{
    timestamps:false,
    freezeTableName :true
})
}