
import React, { useState, useEffect } from 'react'

const State = () => {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)

  useEffect(() => {
    document.title = `Clicked count ${count} times`
    console.log('from useEffect')
  }, [count])

  return (
    <div>
      <h1>Use State Example</h1>

      <h3>Count: {count}</h3>
      <button 
        className="bg-blue-400 rounded-xl text-white p-2"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <h3>Likes: {like}</h3>
      <button onClick={() => setLike(like + 1)}>👍</button>
      <button onClick={() => setLike(like - 1)}>👎</button>

      <br /><br />

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default State
