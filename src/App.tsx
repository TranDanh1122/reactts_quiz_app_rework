import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Complete from "./pages/Complete"
import { AppContext } from "./AppContext"
import React from "react"
import "./styles.css"
function App(): React.JSX.Element {
  const { state } = React.useContext(AppContext)
  return (
    <>
      {(state.currentPage === "home") ? <Home /> : ''}
      {(state.currentPage === "quiz") ? <Quiz /> : ''}
      {(state.currentPage === "complete") ? <Complete /> : ''}
    </>
  )
}

export default App
