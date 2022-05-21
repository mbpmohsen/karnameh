import {Fragment} from 'react';
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import {useState} from "react";
import {errorsInitialValue, errorsMessages} from "./utils";
import {useDispatch} from "react-redux";
import {addComment} from "../../../redux/actions/posts";
import {dataMaker} from "./utils";
import {setComment} from "../../../services/json-server/comments";

const AnswerForm = ({postId}) => {
    const [error, setError] = useState(errorsInitialValue),
        [loading, setLoading] = useState(false),
        dispatch = useDispatch();

    /**
     * Set data into state manager and close modal
     * @param data
     * @param {Number} data.id
     * @param {String} data.title
     * @param {String} data.description
     * @param {String} data.date
     * @param {String} data.time
     * @param {Number} data.comments
     * @param {String} data.authorAvatar
     * @returns {*}
     */
    function addToList(data) {
        dispatch(addComment(data));
    }

    /**
     * Send data into json-server
     * @param {String} answer
     */
    function dispatchData(answer) {
        setLoading(true);
        setComment(dataMaker(answer, postId)).then(({data}) => addToList(data))
            .catch((error) => console.error("error", error))
            .finally(() => {
                setLoading(false);
            })
    }


    /**
     *
     * @param {FormData} formData
     * @param {Function} callback
     * @returns {*}
     */
    function validation(formData, callback) {
        const [answer] = [formData.get('answer')];

        if (answer) {
            return callback(answer);
        }

        setError({
            ...error,
            answer: answer !== '' ? null : errorsMessages.answer.empty
        })
    }

    function handleSubmitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        return validation(formData, dispatchData);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmitForm}>
                <Textarea name={'answer'}
                          data-testid={'question-description'}
                          rows="6"
                          cols="50"
                          className={'bg-primary py-3 px-4 w-full appearance-none transition duration-150 ease-in-out rounded-md border-accent-3 text-accent-6'}
                          error={error.answer}
                >
                    <div className={'text-xs text-gray-800 font-bold mb-3 mt-4'}>پاسخ خود را ینویسید</div>
                </Textarea>
                <div className="mt-5"/>
                <Button type="submit" data-testid={'question-submit'} className="text-white bg-green-600" loading={loading}>
                    ارسال پاسخ
                </Button>
            </form>
        </Fragment>
    )
}

export default AnswerForm;