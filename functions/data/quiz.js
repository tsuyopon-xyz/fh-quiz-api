// クイズの参考サイト :
// - https://quizknock.com/moon-quiz
// - https://quizknock.com/se-asia

const createQuiz = ({
  category,
  correct_answer,
  difficulty,
  incorrect_answers,
  question,
  type
}) => {
  return {
    category,
    correct_answer,
    difficulty,
    incorrect_answers,
    question,
    type
  };
};

module.exports = {
  response_code: 0,
  results: [
    createQuiz({
      category : 'オールジャンル',
      correct_answer: 'moon',
      difficulty: 'easy',
      incorrect_answers: [
        'woon',
        'noon',
        'foon'
      ],
      question: '月は英語で？',
      type: 'multiple'
    }),
    createQuiz({
      category : 'オールジャンル',
      correct_answer: '衛星',
      difficulty: 'easy',
      incorrect_answers: [
        '恒星',
        '惑星',
        '流星'
      ],
      question: '月は地球の何？',
      type: 'multiple'
    }),
    createQuiz({
      category : 'オールジャンル',
      correct_answer: 'たかはたみつき',
      difficulty: 'easy',
      incorrect_answers: [
        'やまもとみづき',
        'たにむらみづき',
        'かんなづき'
      ],
      question: '次のうち、名前に"月"が入らないのは誰？',
      type: 'multiple'
    }),
    createQuiz({
      category : 'オールジャンル',
      correct_answer: 'タイ',
      difficulty: 'easy',
      incorrect_answers: [
        'マレーシア',
        'インドネシア',
        'シンガポール'
      ],
      question: '首都をバンコクに置く国はどこ？',
      type: 'multiple'
    }),
    createQuiz({
      category : 'オールジャンル',
      correct_answer: 'カンボジア',
      difficulty: 'easy',
      incorrect_answers: [
        'ラオス',
        'ミャンマー',
        'マレーシア'
      ],
      question: '「アンコール・ワット」がある国はどこ？',
      type: 'multiple'
    }),
    createQuiz({
      category : 'オールジャンル',
      correct_answer: 'フィリピン',
      difficulty: 'easy',
      incorrect_answers: [
        'シンガポール',
        'インドネシア',
        '日本'
      ],
      question: '国民の大多数がキリスト教を信仰している国はどこ？',
      type: 'multiple'
    }),
    createQuiz({
      category : 'オールジャンル',
      correct_answer: 'ラオス',
      difficulty: 'easy',
      incorrect_answers: [
        'ミャンマー',
        'ベトナム',
        '日本'
      ],
      question: '東南アジアで唯一の内陸国なのはどこ？',
      type: 'multiple'
    }),
    createQuiz({
      category : 'オールジャンル',
      correct_answer: 'インドネシア',
      difficulty: 'easy',
      incorrect_answers: [
        'ミャンマー',
        'タイ',
        '日本'
      ],
      question: '「ナシゴレン」や「ガドガド」ってどこの国の料理？',
      type: 'multiple'
    }),
    createQuiz({
      category : 'オールジャンル',
      correct_answer: 'タイ',
      difficulty: 'easy',
      incorrect_answers: [
        'ブルネイ',
        'ベトナム',
        'フィリピン'
      ],
      question: '東南アジアの国のうち、植民地化を免れたのはどこ？',
      type: 'multiple'
    }),
    createQuiz({
      category : 'オールジャンル',
      correct_answer: 'ベトナム',
      difficulty: 'easy',
      incorrect_answers: [
        'ミャンマー',
        'ラオス',
        'インド'
      ],
      question: '「インドシナ戦争」が起こった国はどこ？',
      type: 'multiple'
    }),
  ]
};