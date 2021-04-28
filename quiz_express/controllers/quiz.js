//al llamar a un fichero index, se importa directamente ese sin especificarlo
var models = require('../models').models;//esto me da el objeto sequelize, la propiedad models

exports.index = async function(req, res, next) {
    let quizzes = await models.Quiz.findAll();
    //Renderizar la vista que muestra el listado
    //(nombre de la vista, variables que quiero pasar a la vista )
    res.render('quizzes/index', { 
        title:  "Lista de Quizzes", 
        quizzes: quizzes 
    });
};

