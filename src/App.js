import React from 'react'
import NavigationBar from './components/top-navigation/NavigationBar'
import HomePage from './pages/HomePage'
import PathSplitter from './pages/PathSplitter'
import QuickGame from './pages/quick-game/QuickGame'
import EditorPage from './pages/quiz-editor/EditorPage'
import QuizEditor from './pages/quiz-editor/QuizEditor'

export default function App() {
  const [direction, setdirection] = React.useState('homepage')
  function directionToggle(newRoute) {
    setdirection(newRoute)
  }

  return (
    <>
      {direction === 'homepage' ? (
        <HomePage directionToggle={directionToggle}>
          <NavigationBar />
        </HomePage>
      ) : direction === 'pathSplitter' ? (
        <PathSplitter directionToggle={directionToggle}>
          <NavigationBar
            backButton="true"
            backbuttonOnClick={directionToggle}
            backTarget="homepage"
          />
        </PathSplitter>
      ) : direction === 'quickGame' ? (
        <QuickGame>
          <NavigationBar
            backButton="true"
            backbuttonOnClick={directionToggle}
            backTarget="pathSplitter"
          />
        </QuickGame>
      ) : direction === 'quizEditor' ?
        <EditorPage>
          <NavigationBar
            backButton="true"
            backbuttonOnClick={directionToggle}
            backTarget="pathSplitter"
          />
        </EditorPage>
      : null}
    </>
  )
}
