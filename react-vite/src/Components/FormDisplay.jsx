import React, { useState } from 'react'

function FormDisplay({ onAddTask }) {
  const [taskInput, setTaskInput] = useState('');
  const [descInput, setDescInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (taskInput && descInput) {

      let newTaskObj = {
        id: Math.trunc(Math.random() * 1000),
        title: taskInput,
        desc:descInput,
        createdOn: new Date().toLocaleString(),
        isCompleted: false
      }
      onAddTask(newTaskObj)
    }

    setTaskInput('');
    setDescInput('');
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
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Enter Description' value={descInput}
                  onChange={(e) => setDescInput(e.target.value)} />
              </div>
              <input type="submit" value="Add Task" className='btn btn-dark' />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default FormDisplay