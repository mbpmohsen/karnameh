import Image from 'next/image';
import close from '../../assets/icons/close.svg'
import {Button, Input, Textarea, Modal} from "../ui";
import {useEffect, useState} from "react";
import {dataMaker, errorsInitialValue, errorsMessages} from "./utils";
import {setPost} from "../../services/json-server/post";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/actions/posts";

/**
 *
 * @param {Function} onToggle - Callback function for close modal
 * @returns {JSX.Element}
 * @constructor
 */
const NewQuestionModal = ({onToggle}) => {
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
        dispatch(addPost(data));
        return onToggle();
    }

    /**
     * Send data into json-server
     * @param {String} question
     * @param {String} description
     */
    function dispatchData(question, description) {
        setLoading(true);
        setPost(dataMaker(question, description)).then(({data}) => addToList(data))
            .catch((error) => console.error("error", error))
            .finally(() => setLoading(false))
    }

    /**
     *
     * @param {FormData} formData
     * @param {dispatchData} callback
     * @returns {callback|never}
     */
    function validation(formData, callback) {
        const [question, description] = [formData.get('question'), formData.get('description')];

        if (question && description) {
            return callback(question, description);
        }

        setError({
            ...error,
            question: question !== '' ? null : errorsMessages.question.empty,
            description: description !== '' ? null : errorsMessages.description.empty
        })
    }

    /**
     *
     * @param {React.ChangeEvent<HTMLFormElement>} e
     * @returns {callback}
     */
    function handleSubmitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        return validation(formData, dispatchData);
    }

    useEffect(() => {
        const $body = document.getElementsByTagName("body")[0];
        if ($body) {
            $body.classList.add('overflow-hidden');

            return () => $body.classList.remove('overflow-hidden');
        }
    }, []);

    return (
        <Modal>
            <div className="flex justify-between items-center py-3 px-6 rounded-t-lg border-b">
                <h3 className="text-base text-gray-900 font-extrabold">
                    ایجاد سوال جدید
                </h3>
                <Image src={close} alt={'close'} className={'select-none cursor-pointer'} onClick={() => onToggle()}/>
            </div>
            <form onSubmit={handleSubmitForm}>
                <div className="p-6 space-y-6 bg-slate-100">
                    <Input name={'question'}
                           data-testid={'question-title'}
                           className={'bg-primary py-3 px-4 h-11 w-full appearance-none transition duration-150 ease-in-out rounded-md border-accent-3 text-accent-6'}
                           error={error.question}
                    >
                        <div className={'text-xs text-gray-800 font-bold mb-3'}>موضوع</div>
                    </Input>
                    <Textarea name={'description'}
                              data-testid={'question-description'}
                              rows="6"
                              cols="50"
                              className={'bg-primary py-3 px-4 w-full appearance-none transition duration-150 ease-in-out rounded-md border-accent-3 text-accent-6'}
                              error={error.description}
                    >
                        <div className={'text-xs text-gray-800 font-bold mb-3 mt-4'}>متن سوال</div>
                    </Textarea>
                </div>
                <div className="flex justify-end items-center pt-3 pb-6 px-6 rounded-b-lg bg-slate-100">
                    <Button
                        data-testid={'question-cancel'}
                        type="button"
                        className="bg-slate-100 text-green-600"
                        disabled={loading}
                        onClick={() => onToggle()}>
                        انصراف
                    </Button>
                    <div className="mx-2"/>
                    <Button
                        type="submit"
                        data-testid={'question-submit'}
                        className="text-white bg-green-600"
                        loading={loading}>
                        ایجاد سوال
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default NewQuestionModal;