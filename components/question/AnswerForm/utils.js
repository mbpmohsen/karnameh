const errorsInitialValue = {
    answer: null
}

const errorsMessages = {
    answer: {
        empty: 'وارد کردن پاسخ الزامی است.'
    },
}

function dataMaker(description, postId) {
    return {
        description,
        postId,
        title: "مشکل در boundary در React",
        date: "1400/02/15",
        time: "16:48",
        authorAvatar: "https://randomuser.me/api/portraits/women/74.jpg",
        like: 0,
        unlike: 0,
    }
}

export {errorsInitialValue, errorsMessages, dataMaker};