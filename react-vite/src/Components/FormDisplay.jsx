import React, { useState } from 'react'

function FormDisplay({ onAddTask }) {
  const [taskInput, setTaskInput] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (taskInput) {
      let newTaskObj = {
        id: Math.trunc(Math.random() * 1000),
        title: taskInput,
        isCompleted: false
      }
      onAddTask(newTaskObj)
    }
    setTaskInput('')
  }
  return (
    <>
      <section className="container-fluid mt-3">
        <div className="row">
          <div className="col-5 m-auto text-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Enter Task' value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)} />
              </div>
              <input type="submit" value="Add Task" className='btn btn-primary' />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default FormDisplay