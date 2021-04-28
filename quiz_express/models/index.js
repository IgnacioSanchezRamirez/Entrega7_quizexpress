
const { Sequelize, Model, DataTypes } = require('sequelize');

const options = { logging: false};
const sequelize = new Sequelize("sqlite:quiz.sqlite", options); //conexion con la base de datos, inicializamos
//especificamos el nombre del fichero de la base de datos


//entidades de la BBDD
class Quiz extends Model {}

//Definicion BBDD
Quiz.init(
  { question: {
      type: DataTypes.STRING,
      unique: { msg: "Quiz already exists"}
    },
    answer: DataTypes.STRING
  }, 
  { sequelize }
);
module.exports = sequelize;