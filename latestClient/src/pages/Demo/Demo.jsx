import React, { useEffect, useState } from 'react';
import Stepper from './Stepper';
import TabsComponent from './TabsComponent';
import DragAndDrop from './DragAndDrop';
import axios from 'axios';
import Drag from './Drag';


const Demo = () => {


    // const listitems = [
    //     {id:"item1",label:"item1"},
    //     {id:"item2",label:"item2"},
    //     {id:"item3",label:"item3"},
    //     {id:"item4",label:"item4"},
    //     {id:"item5",label:"item5"},
    // ];
    // const [list,setList] = useState([]);
    // useEffect(() => {
    //     const url = "/roles";
    //     axios.get(url).then((res) => {
    //       setList(res.data);
    //       // console.log(res.data);
    //     });
    //   }, []);
    
    // const [dragList,setDragedList] = useState([]);
    // const [dragListRight,setDragedListRight] = useState([list]);
    // const [isDragging, setIsDragging] =  useState(false);

    // const handleDragOver = (event) =>{
    //     event.preventDefault();
    //     setIsDragging(true);
    // }

    // const handleonDragStart = (event) =>{
    //     event.dataTransfer.setData("id",event.currentTarget.id);

    // };

    // const handleOnDrop = (event) =>{
    //     event.preventDefault();
    //     const id = event.dataTransfer.getData("id");
    //     const item = list.find(x => x._id === id);
    //     if(item){
    //         setDragedList([...dragList,item]);
    //         console.log(dragList);
    //         setIsDragging(false);
    //         const filteredList = list.filter(x=>x._id !== id);
    //         setList(filteredList);
    //     }
    // };
    // console.log(dragList);
    // const targetClassName = `p-4 mt-5 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60${isDragging ? "border-red":"border-indigo-300"}`;
 
    return (
//   <div>
//        <div className='h-1 p-4 mt-20 grid grid-cols-1 justify-center text-center text-lg'>Drag and Drop Example</div>
//         <div className=' grid grid-cols-2  gap-1'>
           
//             <div className='p-4 mt-5 bg-white rounded-lg shadow-lg'>
//                 {/* source */}
//                 <p>Drag Role </p>
//                 <ul className='list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40'>
//                     {list.map((item)=>{
//                         return(
//                             <li 
//                             key={item._id} 
//                             id={item._id} 
//                             className='bg-white border border-indigo-300 p-4 mb-2 cursor-move'
//                             draggable = {true}
//                             onDragStart={handleonDragStart}
//                             >
//                             {item.ROLE_TYPE}</li>
//                         );
//                     })}
//                 </ul>
//             </div>
//             <div className={targetClassName} onDragOver={handleDragOver} onDrop={handleOnDrop}>
//                 {/* target */}
//             <p>Drop Item Here</p>
//             <ul className='list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40'>
//                     {dragList.map((item)=>{
//                         return(
//                             <li 
//                             key={item._id} 
//                             id={item._id} className='bg-white border border-indigo-300 p-4 mb-2 cursor-move'>
//                             {item.ROLE_TYPE}</li>
//                         );
//                     })}
//                 </ul>
//                 </div>
//         </div>
//         <div className='mt-20 p-5 grid grid-cols-1 text-center'>Stepper Example </div>
      
   
//         </div>
<Drag/>
    );
};

export default Demo;