import React, { ReactElement } from "react"

interface CardInterface{
    icon?:ReactElement,
    name:string,
    shareIcon:ReactElement,
    DeleteIcon:ReactElement,
    Iframe?:ReactElement,
}

const defaultstyle = "bg-white border-2 h-80  w-full max-w-72  flex shadow-md  "
const CardComponent = ({icon,name,shareIcon,DeleteIcon,Iframe}:CardInterface) => {
  return (
    <div className="flex space-between flex-col  h-72 max-w-72 border-2 shadow-md">
        <div>
            <div>{icon}</div>
            <div>{name}</div>
        </div>
        <div className="flex">
            <div>{shareIcon}</div>
            <div>{DeleteIcon}</div>
        </div>
        {{Iframe}?<div className="w-72">{Iframe}</div>:<div>none</div>}
    </div>
  )
}

export default CardComponent