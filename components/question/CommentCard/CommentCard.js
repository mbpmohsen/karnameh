import Image from 'next/image';
import {Fragment, useState} from 'react';
import avatar from '../../../assets/icons/avatar.svg';
import sad from '../../../assets/icons/sad.svg';
import happy from '../../../assets/icons/happy.svg';
import ghostSad from '../../../assets/icons/ghost-sad.svg';

import {Button, Card} from "../../ui";
import {e2p} from "../../../utils/convert-digits";
import {updateComments} from "../../../services/json-server/comments";
/**
 *
 * @param data
 * @param {Number} data.id
 * @param {String} data.title
 * @param {String} data.description
 * @param {String} data.date
 * @param {String} data.time
 * @param {String} data.authorAvatar
 * @param {Number} data.like
 * @param {Number} data.unlike
 * @param {Number} data.postId
 * @returns {JSX.Element}
 * @constructor
 */
const CommentCard = ({data}) => {
    const [reaction, setReaction] = useState(true);

    function handleReaction(state) {
        const updatedData = {...data, [state] : data[state] + 1};

        updateComments(data.id, updatedData).then(() => {
            data[state] += 1;
            setReaction(false);
        }).catch(error => {
            console.error("error", error)
        })
    }

    return (
        <Fragment>
            <Card className={'mb-5'}>
                <div className="rounded-t-lg bg-white flex justify-between items-center h-14 shadow-sm px-6 py-0 box-border">
                    <div className="flex items-center">
                        <Image src={data.authorAvatar} alt={'avatar'} className={'max-h-8 max-w-8 rounded-lg'} width={32} height={32} quality={50}/>
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
                        <div className="mx-8"/>
                        <div className={'flex items-center'}>
                            <Image src={happy} alt={'happy'} className={'h-8 w-8 rounded-lg'} quality={50} width={16} height={16}/>
                            <span className={'text-xs font-bold text-slate-900 mr-1'}>{e2p(data.like)}</span>
                        </div>
                        <div className="mx-4"/>
                        <div className={'flex items-center'}>
                            <Image src={ghostSad} alt={'sad'} className={'h-8 w-8 rounded-lg'} quality={50} width={16} height={16}/>
                            <span className={'text-xs font-bold text-slate-900 mr-1'}>{e2p(data.unlike)}</span>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-4">
                    <p className={'text-sm font-normal leading-5'}>
                        {data.description}
                    </p>
                    <div className="mt-5 flex justify-end">
                        {reaction &&
                            <Fragment>
                                <Button className="bg-slate-100 text-green-600 border-2 border-green-400" data-testid={'happy-reaction'} onClick={() => handleReaction('like')}>
                                    <Image src={happy} alt={'happy'} quality={50} width={16} height={16}/>
                                    <span className={'mr-2.5'}>پاسخ خوب بود</span>
                                </Button>
                                <div className="mx-2"/>
                                <Button className="bg-slate-100 text-rose-600 border-2 border-rose-600" data-testid={'sad-reaction'} onClick={() => handleReaction('unlike')}>
                                    <Image src={sad} alt={'sad'} quality={50} width={16} height={16}/>
                                    <span className={'mr-2.5'}>پاسخ خوب نبود</span>
                                </Button>
                            </Fragment>
                        }
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default CommentCard;