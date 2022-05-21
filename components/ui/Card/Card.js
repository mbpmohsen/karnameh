import React from 'react'
import cn from "classnames";

const Card = ({children, className}) => {

    return (
        <div className={cn('bg-slate-100 rounded-lg shadow-md', className)}>
            {children}
        </div>
    )
}

export default Card
