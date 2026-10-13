import React, { useState } from 'react'

function DisplayTasks({ taskLists, onToggle, onDelete }) {
  return (
    <>
      <section className="container-fluid mt-3">
        <div className="row">
          {
            taskLists.map(task => <div key={task.id} className='col-3 mb-3'>
              <div className={`card ${task.isCompleted ? 'bg-warning' : 'bg-primary'}`}>
                <div className={`card-body`}>
                  <input type="checkbox"
                    className='form-check-input'
                    checked={task.isCompleted}
                    onChange={() => onToggle(task.id)} />
                  <span className={`h5 mx-2 ${task.isCompleted ? 'text-danger'
                    : 'text-white'}`}>{task.title}</span>
                  <p className="mt-2 text-white">{task.desc}</p>
                  <p className="fw-bold text-white">Created on: {task.createdOn}</p>
                  <button className='btn btn-dark btn-sm' onClick={() => onDelete(task.id)}>Delete</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </section>
    </>
  )
}

export default DisplayTasks