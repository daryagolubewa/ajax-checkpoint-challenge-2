var express = require('express');
var router = express.Router();
const models = require('./../models/index');
const Horse = models.horse;
let error = '';

router.get('/', async function(req, res) {
    let horses = await Horse.findAll();
    res.render('horses/index', { horses });
});

router.get('/new', function(req, res) {
    res.text()
});

router.post('/add', function(req, res) {
    Horse.create({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    }).then(() => {
        return Horse.findAll({
            where: req.body.name,
            breed: req.body.breed,
            age: req.body.age
        });
    }).then((horses) => {
        res.send(200).json(JSON.parse(horses[0]));
    })
    //     .catch((err) => {
    //     error = err;
    //     res.send(400, 'fail')
    // });
});

router.get('/:id', async function(req, res) {
    let horse = await Horse.findById(req.params.id);
    res.render('horses/show', {horse});
});
module.exports = router;

// router.get('/questions', async function (req, res) {
//     let question = await models.Question.findByPk(id);
//     res.send(question.question);
// });


//POST game page
// router.post('/game', async function (req, res) {
//     let response = req.body;
//     let currentAnswer = await models.Question.getAnswer(response.question, response.answer);
//
//     if(currentAnswer === 0) {
//         res.send('Success');
//     } else {
//         res.send('Not such a big success')
//     }
//
// });
