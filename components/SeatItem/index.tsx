import {useState} from "react";
import SeatIcon from "@/common/Icon/SeatIcon";

interface SeatItem{
    obj:any,
    onClick: (name:string) => any
}

const SeatItem : React.FC<SeatItem> = ({obj,onClick}) => {
    const [choose,setChoose] = useState(false);
    const handleClick = () =>{
        setChoose(!choose);
        onClick(obj);
    }
    let Item = () => obj.booked ? <SeatIcon.ItemHasBooked/> : <SeatIcon.ItemDefault/>;

    return (
        <button 
            className={`w-max bg-transparent col-span-1 mx-auto px-2`} 
            type="button" 
            disabled={obj.booked}
            onClick={handleClick}
        > 
            {!choose ? <Item/>: <SeatIcon.ItemChoose/>}
            <p className="">{obj.name.substring(1)}</p>
      </button>
    );
}
export default SeatItem;