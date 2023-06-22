import axios from "axios";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DragTest = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;
    if (!destination) return;
    if (
      source.draggableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    if (type === "group") {
      const reorderedTasks = [...tasks];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedTask] = reorderedTasks.splice(sourceIndex, 1);
      reorderedTasks.splice(destinationIndex, 0, removedTask);
      return setTasks(reorderedTasks);
    }
  };

  return (
    <div className="card h-52 flex w-1/2 mx-auto bg:base-100 mt-10 shadow-2xl">
      <DragDropContext onDragEnd={handleDragDrop}>
        <Droppable droppableId="root" type="group">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable key={task._id} draggableId={task._id} index={index}>
                  {(provided) => (
                    <div
                      className=" bg-accent text-white border-lg rounded p-2 m-5"
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      {task.taskName}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragTest;
