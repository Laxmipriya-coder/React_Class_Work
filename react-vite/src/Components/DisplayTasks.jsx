import React from 'react'

function DisplayTasks({taskLists,onToggle,onDelete}) {
  return (
    <>
    <section className="container-fluid mt-3">
      <div className="row">
        <div className="col-5 m-auto">
          <ul className="list-group">
            {
              taskLists.map(task => <li key={task.id} className='list-group-item'>
                <input type='checkbox' className='form-check-input' checked = {task.isCompleted} onChange={()=>onToggle(task.id)}></input>
                <span className={`h5 mx-2 ${task.isCompleted ? 'text-danger' : 'text-success'}`}>{task.title}</span>
                <button className='btn btn-danger btn-sm float-end' onClick={()=> onDelete(task.id)}>Delete</button>
              </li>)
            }
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default DisplayTasks