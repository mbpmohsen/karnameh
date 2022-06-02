import {Fragment} from 'react';
import {Textarea, Button} from "../../ui";
import {useState} from "react";
import {errorsInitialValue, errorsMessages} from "./utils";
import {dataMaker} from "./utils";
import {setComment} from "../../../services/json-server/comments";

const AnswerForm = ({postId}) => {
    const [error, setError] = useState(errorsInitialValue),
        [loading, setLoading] = useState(false);

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
                          data-testid={'comment-description'}
                          rows="6"
                          cols="50"
                          className={'bg-primary py-3 px-4 w-full appearance-none transition duration-150 ease-in-out rounded-md border-accent-3 text-accent-6'}
                          error={error.answer}
                >
                    <div className={'text-xs text-gray-800 font-bold mb-3 mt-4'}>پاسخ خود را ینویسید</div>
                </Textarea>
                <div className="mt-5"/>
                <Button type="submit" data-testid={'comment-submit'} className="text-white bg-green-600" loading={loading}>
                    ارسال پاسخ
                </Button>
            </form>
        </Fragment>
    )
}

export default AnswerForm;