export const getTopicData = async () => {
    const response = await fetch("https://run.mocky.io/v3/3f83876b-47e9-4cc2-a212-0025663f8d35")
    if (!response.ok) throw new Error('Error fetching quiz data');

    return response.json()
}
export const getQuestionData = async (topicId: number) => {
    let url = ""
    switch (topicId) {
        case 1:
            url = "https://run.mocky.io/v3/41455ed7-1816-4826-bc29-57cb58988877"
            break
        case 2:
            url = "https://run.mocky.io/v3/b6fb124f-7375-46a6-9331-e2d8300c16da"
            break
        case 3:
            url = "https://run.mocky.io/v3/be02794a-f015-424c-8f04-369a8b8d3682"
            break
        default:
            url = "https://run.mocky.io/v3/7063f98c-8a61-4be8-a5a4-4933c8300909"
            break;
    }
    const response = await fetch(url)

    if (!response.ok) throw new Error('Error fetching quiz data');

    return response.json()
}