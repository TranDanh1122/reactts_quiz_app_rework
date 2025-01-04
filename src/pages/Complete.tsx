import React from 'react';
import Button from '../components/Button';
import { AppContext } from '../AppContext';
import { TopicColor } from '../partials/config';
export default function Complete(): React.JSX.Element {
    const { state, dispatch } = React.useContext(AppContext)
    return (<>
        <div className=" w-[90%] max-w-[1160px] mx-auto">
            <div className="flex flex-nowrap items-start justify-between mb:flex-col mb:items-center">
                <h1 className="text-headl-med mb:bodym mb:text-center">Quiz completed
                    <br />
                    <span className="text-headL-bold mb:mb:bodym">You scored...</span>
                </h1>
                <div className="flex flex-nowrap w-1/2 mb:w-full flex-col items-center gap-8 bg-white rounded-md cursor-pointer p-12">
                    <div className="flex flex-nowrap items-center gap-4">
                        <span className={`p-3 bg-${TopicColor[state.currentTopic?.title ?? "HTML"]}/10`}>
                            <i className={`block w-11 h-9 bg-${TopicColor[state.currentTopic?.title ?? "HTML"]}`} style={{ mask: `url(${state.currentTopic?.icon}) center / contain no-repeat`, WebkitMask: `url(${state.currentTopic?.icon}) center / contain no-repeat` }}></i>
                        </span>
                        <h2 className="text-heads">{state.currentTopic?.title}</h2>
                    </div>
                    <span className="text-display">{state.score}</span>
                </div>
            </div>
            <div className="w-full flex justify-end">
                <Button text="Play Again" type="play again" customClass="mt-8 w-1/2 mb:w-full ml-auto" onClick={() => {
                    dispatch({ type: "SET_PAGE", page: "home" })
                    dispatch({ type: "RESET" })
                }}></Button>

            </div>
        </div>
    </>)
}