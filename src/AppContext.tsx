import React from "react";

interface AppContextType {
    currentTopic: Topic | null,
    quizData: Question[] | null,
    currentQuestionIndex: number | 0,
    score: number | 0,
    currentPage: "home" | "quiz" | "complete"
}
type Action = { type: "RESET" }
    | { type: "SET_PAGE", page: "home" | "quiz" | "complete" }
    | { type: "SET_TOPIC", topic: Topic }
    | { type: "SET_QUIZ_DATA", questions: Question[] }
    | { type: "SET_CURRENT_QUESTION_INDEX", index: number }
    | { type: "SET_SCORE", score: number }
const initData: AppContextType = {
    currentTopic: null,
    quizData: null,
    currentQuestionIndex: 0,
    score: 0,
    currentPage: "home"
}
const appReducer = (data: AppContextType, action: Action) => {
    switch (action.type) {
        case "SET_PAGE":
            return { ...data, currentPage: action.page }
        case "SET_TOPIC":
            return { ...data, currentTopic: action.topic }
        case "SET_QUIZ_DATA": {
            const questions = action.questions.map((question: Question) => ({ ...question, options: question.options.map((option, index) => ({ ...option, id: index + 1, content: option })) }))
            return { ...data, quizData: questions }
        }
        case "SET_CURRENT_QUESTION_INDEX":
            return { ...data, currentQuestionIndex: action.index }
        case "SET_SCORE":
            return { ...data, score: action.score }
        case "RESET":
            return { ...initData }
        default:
            return { ...data }
    }
}
export const AppContext = React.createContext<{ state: AppContextType, dispatch: React.Dispatch<Action> }>({ state: initData, dispatch: () => { } });

interface AppContextProviderProps {
    children: React.ReactNode;
}

export default function AppContextProvider({ children }: AppContextProviderProps): React.JSX.Element {
    const [state, dispatch] = React.useReducer(appReducer, initData)
    return <AppContext.Provider value={{ state, dispatch }}>
        {children}
    </AppContext.Provider>

}