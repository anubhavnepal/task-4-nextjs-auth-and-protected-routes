import React from 'react'

const Button = ({type="button",title}:ButtonParams) => {
  return (
    <button
        type={type}
        className="bg-slate-800 p-3 rounded-xl text-white w-full border border-slate-800 hover:bg-slate-900 mt-10"
      >
        {title}
      </button>
  )
}

export default Button