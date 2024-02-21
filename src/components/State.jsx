import { useState } from "react"

const State = () => {
    const [state, setstate] = useState('sara')

const handleClick = () =>{
    setstate ('kenny')
}
    
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={handleClick} className="bg-blue-500 text-white px-2 py-1 rounded-md"> click to change name</button>
    </div> 
  )
}

export default State