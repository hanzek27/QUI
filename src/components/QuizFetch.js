export default function QuizzFetch(url, resolve) {

  //random number generator
  function randomNum(num) {
      return Math.floor(Math.random() * num + 1)
  }

  //get quizz data
  fetch(url)
  .then(response => response.json())
  //changing data to have all the answers mixed and in one place
  .then(data => data.results.map(qestion => {
      //array that will contain all answers mixed
      let mixedAnswers = []
      //new array that will have both correct and incorrect answers
      const oldAnswers = [qestion.correct_answer, ...qestion.incorrect_answers]
      //cycle through array with all answers and each iteration push or unshift
      oldAnswers.forEach((ans) => {
          const avalAnswer = qestion.correct_answer === ans ? {guess: 'correct', copy: ans} : {guess: 'incorrect', copy: ans}
          randomNum(2) > 1 ? mixedAnswers.push(avalAnswer) : mixedAnswers.unshift(avalAnswer)
      })
      return {
          allAnswersBro:  mixedAnswers,
          question: qestion.question,
          guessType: 'no_answer',
          isDone: false,
          id: `question${randomNum(3000)}`
      }
  }))
  .then(data => {
      resolve(data)
  })

}