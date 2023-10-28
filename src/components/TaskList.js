import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const[taskList, setTaskList]=useState(tasks);
  const handleDeleteTask= (taskId)=>{
  
  const updatedTaskList= taskList.filter((task) => task.id !== taskId);
  
  setTaskList(updatedTaskList);
}
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task
        key={task.id}
        category={task.category}
        text={task.text}
        onDelete={()=> handleDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
