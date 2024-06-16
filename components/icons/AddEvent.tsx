import React from 'react'

function AddEvent({className="btn bg-indigo-500 hover:bg-indigo-600 text-white"}) {
  return (
    <>
<svg className={className}  viewBox="0 0 16 16">
<path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
</svg>
    </>
  )
}

export default AddEvent