const errorsInitialValue = {
    question: null,
    description: null,
}

const errorsMessages = {
    question: {
        empty: 'وارد کردن سوال الزامی است.'
    },
    description: {empty: 'وارد کردن متن سوال الزامی است.'},
}

function dataMaker(title, description) {
    return {
        title,
        description,
        "date": "1400/02/15",
        "time": "16:48",
        "comments": 0,
        "authorAvatar": "https://randomuser.me/api/portraits/women/89.jpg"
    }
}

export {errorsInitialValue, errorsMessages, dataMaker};