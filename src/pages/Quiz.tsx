import React from "react";
import { AppContext } from "../AppContext";
import { getQuestionData } from "../partials/api";
import Option from "../components/Option";
import Button from "../components/Button";
export default function Quiz(): React.JSX.Element {
    const { state, dispatch } = React.useContext(AppContext)
    const [loading, setLoading] = React.useState<boolean>(true)
    const [optionStates, setOptionStates] = React.useState<string[]>(["default", "default", "default", "default"])
    const inputRange = React.useRef<HTMLInputElement>(null)
    const btnType = React.useRef<string>("submit")

    const loadRange = () => {
        if (inputRange.current) {
            const percent = ((state.currentQuestionIndex + 1) / (state.quizData?.length ?? 1)) * 100;
            inputRange.current.style.background = `linear-gradient(to right, #A729F5 ${percent}%, #FFF ${percent}%)`;

        }
    }
    React.useEffect(() => {
        const loadQuestions = async () => {
            const response = await getQuestionData(state.currentTopic?.id || 0)
            dispatch({ type: "SET_QUIZ_DATA", questions: response })
        }
        setLoading(false)
        loadQuestions()
        loadRange()

    }, [state, dispatch])
    const optionSelected = (id: number) => {
        setOptionStates(optionStates.map((_, index) => index === id - 1 ? "select" : "default"))
    }

    if (loading) return <p>Loading...</p>
    const currentQuestion = state.quizData ? state.quizData[state.currentQuestionIndex] : null
    const checkCorrect = () => {
        const answer = currentQuestion?.answer
        const correctIndex = currentQuestion?.options.findIndex((item) => item.content === answer)
        const selectedIndex = optionStates.findIndex((item) => item === "select")
        if (selectedIndex === -1) {
            setOptionStates(optionStates.map((_, index) => index === correctIndex ? "true" : "default"))
            return
        }
        if (selectedIndex === correctIndex) {
            setOptionStates(optionStates.map((_, index) => index === selectedIndex ? "true" : "default"))
            dispatch({ type: "SET_SCORE", score: state.score + 1 })
            return
        }

        if (selectedIndex !== correctIndex) {
            setOptionStates(optionStates.map((_, index) => {
                if (index === selectedIndex) return "false"
                if (index === correctIndex) return "true"
                return "default"
            }))
            return

        }
    }
    const handleSubmit = () => {
        if (btnType.current == "submit") {
            btnType.current = "next"
            checkCorrect()
            return
        }
        if (state.currentQuestionIndex + 1 >= (state.quizData?.length ?? 0) && btnType.current == "next") {
            dispatch({ type: "SET_PAGE", page: "complete" })
            return
        }
        if (btnType.current == "next") {
            dispatch({ type: "SET_CURRENT_QUESTION_INDEX", index: state.currentQuestionIndex + 1 })
            setOptionStates(["default", "default", "default", "default"])
            btnType.current = "submit"
        }
    }
    return (
        <>
            <div className=" w-[90%] max-w-[1160px] mx-auto ">
                <div className="flex flex-wrap justify-between items-stretch gap-y-8 ">
                    <div className="w-[50%] max-w-[470px] mb:w-full mb:max-w-full flex flex-col justify-start gap-4 ">
                        <span className="text-bodys text-dark_3 italic mb:text-center">Question <span>{state.currentQuestionIndex + 1}</span> of <span>{state.quizData?.length ?? 0}</span></span>
                        <p className="text-headm mb:text-center">{currentQuestion?.question}</p>
                        <input ref={inputRange} type="range" className="process mt-auto" />
                    </div>
                    <div className="flex gap-4 flex-col w-[calc(90%-470px)] mb:w-full">
                        {currentQuestion?.options.map((item: Option, index: number) => <Option option={item} status={optionStates[item.id - 1]} onSelected={optionSelected} key={index} ></Option>)}
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <Button text={btnType.current == "submit" ? "Submit Answer" : "Next Question"} type={btnType.current} customClass="mt-8 w-1/2 mb:w-full ml-auto" onClick={handleSubmit}></Button>
                </div>
            </div>

        </>)
}