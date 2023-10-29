import{useState} from "react"

const App = () =>
{ 
  const[todo,setTodo]=useState([])
  const [counter, setcounter]=useState(1)

  
  function addTodo(event)
  {
    console.log("---------addTodo------------")
    let tempTodo = document.getElementById("todoinput").value
    console.log("tempTodo:" +tempTodo)
    addToArray(tempTodo,false)
    document.getElementById("todoinput").value =""

  }

  function addToArray(text, completed)
  {
    let tempTodoObject ={
      id: counter,
      text: text,
      completed: completed
    }
    console.log(tempTodoObject)
    todo.push(tempTodoObject)
    console.log(todo)

    setTodo([...todo])
    setcounter(counter+1)
  }

  function deleteTodo(id)
  {
    console.log("----------------deleteTodo------------------------")
    let tempTodo= todo.filter(Element =>
      {
        return Element.id !== id
      })
      setTodo([...tempTodo])
  }
  return <div> 
   <h1> To-do Application</h1>
   <input type="text" id="todoinput" placeholder="enter todo here"/>
   <button onClick={()=>addTodo()}> Add To- do</button>
   {todo.map(Element =>
     {
      return <div>
                { Element.completed ? 
                <input type="checkbox" checked></input>:
                <input type="checkbox"></input>
                }
                
                {Element.text+" "}
              <button onClick={()=>deleteTodo(Element.id)}>delete</button>
            </div>

     })
    }
  </div>
}

export default App