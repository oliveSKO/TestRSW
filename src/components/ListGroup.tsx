import { useState } from "react";

interface Props
{
items: String[];
heading:string;
}
function ListGroup({items, heading}:Props)
{ 
const [selectedIndex, setselectedIndex]=useState(-1);

    
    return (
<>
    <h1>{heading}</h1>
    {items.length===0&&<p>No items found</p>}
    <ul className="list-group">
    {items.map((item, index)=>(
    <li className={selectedIndex===index
        ?'list-group-item active'
        :'list-group-item'}
  
    onClick={( )=>{setselectedIndex(index);}}
    >
    {item}
    </li>
))}
   </ul>
</>
 );
}
export default ListGroup;