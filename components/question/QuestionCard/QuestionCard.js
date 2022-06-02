import Image from 'next/image';
import {Fragment} from 'react';
import avatar from '../../../assets/icons/avatar.svg';
import comment from '../../../assets/icons/comment.svg';
import {Card} from "../../ui";
import {e2p} from "../../../utils/convert-digits";

/**
 *
 * @param data
 * @param {Number} data.id
 * @param {String} data.title
 * @param {String} data.description
 * @param {String} data.date
 * @param {String} data.time
 * @param {Number} data.comments
 * @param {String} data.authorAvatar
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionCard = ({data}) => {
    return (
        <Fragment>
            <Card className={'mb-5'}>
                <div className="rounded-t-lg bg-white flex justify-between items-center h-14 shadow-sm px-6 py-0 box-border">
                    <div className="flex items-center">
                        <Image src={data.authorAvatar} alt={'avatar'} className={'max-h-8 max-w-8 rounded-lg'} width={32} height={32}/>
                        <p className={'font-bold text-gray-900 mb-0 mr-4 truncate'}>
                            {data.title}
                        </p>
                    </div>
                    <div className="flex">
                        <div className={'flex items-center'}>
                            <span className={'text-xs font-normal text-slate-600'}>ساعت</span>
                            <time className={'text-xs font-bold text-slate-900 mr-1'}>{e2p(data.time)}</time>
                        </div>
                        <div className="mx-3 border-l"/>
                        <div className={'flex items-center'}>
                            <span className={'text-xs font-normal text-slate-600'}>تاریخ</span>
                            <time className={'text-xs font-bold text-slate-900 mr-1'}>{e2p(data.date)}</time>
                        </div>
                        <div className="mx-4"/>
                        <div className={'flex items-center'}>
                            <Image src={comment} alt={'avatar'} className={'h-8 w-8 rounded-lg'}/>
                            <span className={'text-xs font-bold text-slate-900 mr-1'}>{e2p(data.comments)}</span>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-4">
                    <p className={'truncate'}>
                        {data.description}
                    </p>
                </div>
            </Card>
        </Fragment>
    )
}

export default QuestionCard;