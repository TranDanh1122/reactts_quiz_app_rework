declare global {
    interface Topic {
        id: number,
        title: string,
        icon: string,
    }

    interface Option {
        id: number
        content: string
    }
    interface Question {
        id: number
        question: string,
        options: Option[],
        answer: string
    }
}
export { }