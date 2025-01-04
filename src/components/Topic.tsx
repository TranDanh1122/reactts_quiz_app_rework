import React from "react";
import { TopicColor } from "../partials/config";
interface TopicProps {
    topic: Topic,
    onPick: (topic: Topic) => void
}
export default function Topic({ topic, onPick }: TopicProps): React.JSX.Element {
    return (
        <div onClick={() => onPick(topic)} className="bg-white flex flex-nowrap justify-start items-center gap-8 p-5 rounded-md cursor-pointer">
            <span className={`p-3 bg-${TopicColor[topic.title]}/10`}>
                <i className={`block w-11 h-9 bg-${TopicColor[topic.title]}`} style={{ mask: `url(${topic.icon}) center / contain no-repeat`, WebkitMask: `url(${topic.icon}) center / contain no-repeat` }}></i>
            </span>
            <h2 className="text-heads">{topic.title}</h2>
        </div>
    )
}
