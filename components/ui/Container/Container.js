import cn from "classnames";

const Container = ({children, className, element = 'div', clean}) => {
    const rootClassName = cn(className, {'mx-auto max-w-8xl px-14': !clean});
    let Component = element;

    return (
        <Component className={rootClassName}>{children}</Component>
    )
}

export default Container