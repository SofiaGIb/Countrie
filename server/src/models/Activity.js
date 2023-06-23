const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          isAlpha: {
            args: true,
            msg: 'El nombre no debe contener números ni símbolos'
          },
          len: {
            args: [1, 15],
            msg: 'La longitud del nombre debe ser entre 1 y 15 caracteres',
          },
        
        }
      },

      dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: [1],
            msg: "La dificultad no puede ser menor a 1",
          },
          max: {
            args: [5],
            msg: "La dificultad no puede ser mayor a 5",
          },
          isInt: {
            msg: "La dificultad debe ser un número entero",
          },
        },
      },
      duracion: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          isHoraValida: function (value) {
            if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(value)) {
              throw new Error("El dato ingresado debe estar en formato HH:mm");
            }
          },
        },
      },
      temporada: {
        type: DataTypes.ENUM("verano", "otoño", "invierno", "primavera"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
