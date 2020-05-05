const quizData = require('../../data/quiz');
const _ = require('lodash');

module.exports = {
  get: (req, res) => {
    res.json({
      response_code: quizData.response_code,
      results: _.shuffle(quizData.results)
    });
  }
};