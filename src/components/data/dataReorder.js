import { nanoid } from 'nanoid'

export default function dataReorder(data) {

  const quizItems = data.map(question => {
    const answerTemplate = {
      id: nanoid(),
      answerType: 'none',
      question: question.question,
      correctAnswer: {id: nanoid(), status: 'unanswered', questionIs: true, value: question.correct_answer },
      incorrectAnswers: formatAnswers(question.incorrect_answers),
    }
    return answerTemplate
  })
  return quizItems
}

function formatAnswers(array) {
  const newArray = array.map(ans => ({id: nanoid(), status: 'unanswered', questionIs: false, value: ans }))
  return newArray
}