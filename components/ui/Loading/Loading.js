import styles from './Loading.module.css';
import cn from "classnames";

const Loading = () => {
    return (
    <span className={'inline-flex text-center items-center leading-7'}>
      <span className={cn(styles.dot, 'rounded-full h-2 w-2')}/>
      <span className={cn(styles.dot, 'rounded-full h-2 w-2')}/>
      <span className={cn(styles.dot, 'rounded-full h-2 w-2')}/>
    </span>
    )
}

export default Loading