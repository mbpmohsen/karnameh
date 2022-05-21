import Image from 'next/image';
import arrow from '../../../assets/icons/icons.svg';
import avatar from '../../../assets/icons/avatar.svg';

const UserNav = () => {
    return (
        <div className={'flex items-center justify-between select-none cursor-pointer'}>
          <Image src={avatar} alt={'avatar'} className={'w-11 h-11 rounded-full border-white'}/>
          <span className={'text-sm font-bold text-slate-900 mr-3 ml-5'}>الناز شاکردوست</span>
          <Image src={arrow} alt={'avatar'}/>
        </div>
    )
}

export default UserNav