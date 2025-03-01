import React from 'react'

function Button(title, onClick, variant, disabled, fullwidth, type) {
  
  let className = "bg-secondary p-1 text-white"

  if(fullwidth){
    className += 'w-full'
  }
  if(variant==='outlined'){
    className=className.replace('bg-secondary', 'border border-secondary text-primary bg-white')
  }
  return (
   <button className={className} type={type}>{title}</button>
  )
}

export default Button