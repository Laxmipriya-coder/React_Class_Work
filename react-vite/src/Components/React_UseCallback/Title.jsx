import React from 'react'

function Title({ title, data }) {
  console.log('Title re-render', title);
  return (
    <>
      <h1>Title: {title}</h1>
      <h3>Age: {data}</h3>
    </>
  )
}

export default React.memo(Title);