import Button from "../ui/Button";
import plus from '../../assets/icons/plus.svg';
import Image from 'next/image'
import {useState} from "react";
import NewQuestionModal from "./NewQuestionModal";
import {Fragment} from 'react';

const NewQuestion = () => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Button className={'text-white bg-green-600'} onClick={() => setOpen(true)} data-testid={'new-question'}>
                <Image src={plus} alt={'open menu'}/>
                <span className={'mr-2'}>سوال جدید</span>
            </Button>
            {open && <NewQuestionModal onToggle={() => setOpen(false)}/>}
        </Fragment>
    )
}

export default NewQuestion;