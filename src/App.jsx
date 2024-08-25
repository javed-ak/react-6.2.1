import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [selectedId, setSelectedId] = useState(1)
  return (
    <>
    <button onClick={() => setSelectedId(1)}>1</button>
    <button onClick={() => setSelectedId(2)}>2</button>
    <button onClick={() => setSelectedId(3)}>3</button>
    <button onClick={() => setSelectedId(4)}>4</button>
    <Todo id={selectedId} />
    </>
  )

  function Todo({id}) {
    const [todo, setTodo] = useState({})

    useEffect(() => {
      axios.get("http://localhost:8080/todo?id=" +id)
      .then((response) => {
        setTodo(response.data.todo)
      })
    }, [id])

    return <div>
      <h1>
        {todo.title}
      </h1>
      <h3>
        {todo.description}
      </h3>
    </div>
  }
}

export default App
