import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Drag = () => {
  const [dragList, setDragList] = useState([]);
  const [dragListLeft, setDragListLeft] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingR, setIsDraggingR] = useState(false);

  useEffect(() => {
    const url = "/roles";
    axios.get(url).then((res) => {
      setDragListLeft(res.data);
    });
  }, []);
  
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  }

  const handleDragOverLeft = (event) => {
    event.preventDefault();
    setIsDraggingR(true);
  }

  const handleonDragStart = (event) => {
    event.dataTransfer.setData("id", event.currentTarget.id);
  }

  const handleOnDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    const item = dragListLeft.find(x => x._id === id);

    if (item) {
      setDragList([...dragList, item]);
      setDragListLeft(dragListLeft.filter(x => x._id !== id));
    }

    setIsDragging(false);
  }

  const handleOnDropLeft = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    const item = dragList.find(x => x._id === id);

    if (item) {
      setDragListLeft([...dragListLeft, item]);
      setDragList(dragList.filter(x => x._id !== id));
    }

    setIsDraggingR(false);
  }

  const targetClassName = `p-4 mt-5 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60${isDragging ? "border-red" : "border-indigo-300"}`;

  return (
    <div>
      <div className='h-1 p-4 mt-20 grid grid-cols-1 justify-center text-center text-lg'>Drag and Drop Example</div>
      <div className='grid grid-cols-2  gap-1'>
        <div className='p-4 mt-5 bg-white rounded-lg shadow-lg' onDragOver={handleDragOverLeft} onDrop={handleOnDropLeft}>
          {/* source */}
          <p>Drag Role </p>
          <ul className='list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40'>
            {dragListLeft.map((item) => {
              return (
                <li
                  key={item._id}
                  id={item._id}
                  className='bg-white border border-indigo-300 p-4 mb-2 cursor-move'
                  draggable={true}
                  onDragStart={handleonDragStart}
                >
                  {item.ROLE_TYPE}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={targetClassName} onDragOver={handleDragOver} onDrop={handleOnDrop}>
          {/* target */}
          <p>Drop Item Here</p>
          <ul className='list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40'>
            {dragList.map((item) => {
              return (
                <li
                  key={item._id}
                  id={item._id}
                  className='bg-white border border-indigo-300 p-4 mb-2 cursor-move'
                  draggable={true}
                  onDragStart={handleonDragStart}
                >
                  {item.ROLE_TYPE}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='mt-20 p-5 grid grid-cols-1 text-center'>Stepper Example </div>
    </div>
  );
};

export default Drag;
