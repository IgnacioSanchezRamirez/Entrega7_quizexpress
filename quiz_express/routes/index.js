var express = require('express');
var router = express.Router();
const quizzes = require("../controllers/quiz");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:  'Express' });
});

/* GET pagina de credits. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title:  'Credits' });
});

/* GET pagina de quizzes. */
router.get('/quizzes', quizzes.index);
//const quizzes = require("../controllers/quiz");


module.exports = router;
