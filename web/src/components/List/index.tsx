import React from 'react'

interface ListProps{
    children?: React.ReactNode;
}

export const List = (props:ListProps) => {
    return (
            <ul className="w-11/12">{props.children}</ul>
    )
}