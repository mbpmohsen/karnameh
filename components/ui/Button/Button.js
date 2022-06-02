import cn from 'classnames'
import React from 'react'
import Loading from '../Loading/Loading';

// eslint-disable-next-line react/display-name
const Button = (props) => {
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
}

export default Button
