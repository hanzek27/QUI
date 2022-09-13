import dataReorder from './dataReorder'
export default async function FetchQuiz(quizOptions, Response) {
  const URL = `https://opentdb.com/api.php?amount=5&category=${quizOptions.category}&difficulty=${quizOptions.difficoulty}`
  //encode=base64&
  //encode=url3986&
  const promise = await fetch(URL)
  const data = await promise.json()
  const correctDataFormat = dataReorder(data.results)
  Response(correctDataFormat)
}
