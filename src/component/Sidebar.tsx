import { ReactElement } from "react"

interface CardInterface{
    icon?:ReactElement,
    name:string,
    shareIcon:ReactElement,
    DeleteIcon:ReactElement,
}
const defaultstyle = "bg-white border-2 h-80  w-full max-w-80"

const Sidebar = ({icon,name,shareIcon,DeleteIcon}:CardInterface) => {
  return (
    <div className={defaultstyle}>

    </div>
  )
}

export default Sidebar