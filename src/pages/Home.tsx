import React from "react";
import { AppContext } from "../AppContext";
import { getTopicData } from "../partials/api";
import Topic from "../components/Topic";
export default function Home(): React.JSX.Element {
    const { state, dispatch } = React.useContext(AppContext)
    const [topics, setTopics] = React.useState<Topic[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    React.useEffect(() => {
        const loadTopics = async () => {
            const response = await getTopicData()
            setTopics(response)
            setLoading(false)
        }
        loadTopics()
    }, [state, dispatch])
    const handlePick = (topic: Topic) => { 
        dispatch({ type: "SET_PAGE", page: "quiz" })       
        dispatch({ type: "SET_TOPIC", topic: topic })
    }
    if (loading) return <p>Loading...</p>

    return (
        <div className="flex flex-nowrap justify-between items-start  w-[90%] max-w-[1160px] mx-auto mb:flex-col">
            <div className="w-[40%] max-w-[470px] mb:max-w-[100%] mb:w-full">
                <h1 className="text-headm mb:text-center">
                    Welcome to the <br /> <span className="text-headm-bold ">Frontend Quiz!</span>
                </h1>
                <span className="bodys italic text-dark_62 block mt-12  mb:text-center">
                    Pick a subject to get started.
                </span>
            </div>
            <div className="flex gap-6  flex-col w-[60%] max-w-[565px] mb:max-w-[100%] mb:w-full">
                {
                    topics.map((topic: Topic) => <Topic key={topic.id} onPick={handlePick} topic={topic}></Topic>)
                }
            </div>

        </div>
    )
}