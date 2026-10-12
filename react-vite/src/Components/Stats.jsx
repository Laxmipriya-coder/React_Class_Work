import React from 'react'

function Stats({ taskLists, filter, setFilter }) {
  let totalTasks = taskLists.length;
  let completedTasks = taskLists.filter(ele => ele.isCompleted).length;
  let percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  let inProgressTasks = taskLists.filter(
    task => !task.isCompleted
  ).length;
  return (
    <>
      <section className="container-fluid mt-4">
        <div className="row">
          <div className="col-4 m-auto">
            <div className="card ">
              <div className="card-body">
                <span className='h4 me-4 text-info'>{percentage} % Tasks Completed</span>
                <small className='text-secondary'>{completedTasks} outof {totalTasks}</small>
              </div>
            </div>
          </div>
        </div>
         <button className='btn btn-outline-primary m-auto' onClick={() => setFilter('all')}>All {totalTasks}</button>
        <button className={`btn ms-4 ${filter === 'inProgress' ? 'btn-warning' : 'btn-outline-warning'}`}
          onClick={() => setFilter('inProgress')}>
          In Progress {inProgressTasks}
        </button>
        <button className={`btn ms-4 ${filter === 'completed' ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={() => setFilter('completed')}>
          Completed {completedTasks}
        </button>
      </section>
    </>
  )
}

export default Stats