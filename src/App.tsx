import Button from "./component/Button";
import CardComponent from "./component/CardComponent";
import Sidebar from "./component/Sidebar";
import DeleteIcon from "./icons/DeleteIcon";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";
function App(){
  return<div>
    
    <Button name={'Share Brain'} buttonvariant="primary"  StartIcon={<ShareIcon/>}/>
    <Button name={'Add Content'} buttonvariant="secondary" StartIcon={<PlusIcon/>} />
    <CardComponent name={"ProjectIdes"} shareIcon={<ShareIcon/>} DeleteIcon={<DeleteIcon/>} Iframe={<iframe className="w-fill h-48 w-72 p-2"  src="https://www.youtube.com/embed/lFhiz9ntwqk?si=mNBmncvfmWZTnM3R" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>}/>
    <CardComponent name={"ProjectIdes"} shareIcon={<ShareIcon/>} DeleteIcon={<DeleteIcon/>}></CardComponent>
    <div className="w-72 absolute w-auto">
    
  </div></div>  
}

export default App;

//you should have folder in database 