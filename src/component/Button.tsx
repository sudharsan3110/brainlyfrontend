import  { ReactElement } from 'react'

interface Buttonprops{
    name:string,
    buttonvariant: 'primary'|'secondary',
    StartIcon?:ReactElement
    
}

interface ButtonStyles {
    primary: string,
    secondary: string
}

const buttonStyle: ButtonStyles = {
    primary: 'bg-blue-400 ',
    secondary: 'bg-blue-600 '
}
const defaultstyle = " p-3 m-3 rounded-lg flex items-center"
const Button = ({name,buttonvariant,StartIcon}:Buttonprops)=>{
    return <button className={buttonStyle[buttonvariant] +" "+ defaultstyle}>
        <div>{StartIcon}</div>
        <span>{name}</span>
      


    </button>
}

export default Button