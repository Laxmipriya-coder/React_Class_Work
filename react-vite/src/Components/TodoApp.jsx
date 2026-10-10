import React, { useState } from 'react'
import Navbar from './Navbar';
import FormDisplay from './FormDisplay';
import DisplayTasks from './DisplayTasks';
import Stats from './Stats';

function TodoApp(){
  let initialTasks = [
    {id:101,title: 'Task 1', isCompleted: false},
    {id:102,title: 'Task 2', isCompleted: true},
    {id:103,title: 'Task 3', isCompleted: false}
  ]
  const [taskLists,setTaskLists] = useState(initialTasks);
  function handleAddTask(newTask){
    console.log(newTask);
    setTaskLists([...taskLists,newTask])
  }
  function handletoggle(id){
    console.log(id);
    setTaskLists(prev => prev.map(ele=> ele.id == id ? {...ele,isCompleted : ! ele.isCompleted} : ele))
  }
  function handleDelete(id){
    console.log(id);
    setTaskLists(prev => prev.filter(ele => ele.id !== id))
  }
  return (
    <>
    <Navbar total={taskLists.length}/>
    <FormDisplay onAddTask={handleAddTask}/>
    <DisplayTasks taskLists={taskLists} onToggle = {handletoggle} onDelete={handleDelete}/>
    <Stats/>
    </>
  )
}

export default TodoApp