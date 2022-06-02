import cn from 'classnames'
import React, {forwardRef} from 'react'
import Loading from '../Loading/Loading';

// eslint-disable-next-line react/display-name
const Button = forwardRef((props, buttonRef) => {
    const {
        className,
        children,
        width,
        loading = false,
        disabled = false,
        style = {},
        Component = 'button',
        ...rest
    } = props;

    return (
        <Component
            ref={buttonRef}
            className={cn('rounded-md h-9 p-2 px-5 flex items-center', className)}
            disabled={disabled}
            style={{width, ...style}}
            {...rest}
        >
            {loading ? (
                <i className="pl-2 m-0 flex">
                    <Loading/>
                </i>
            ) : children}
        </Component>
    )
})

export default Button
