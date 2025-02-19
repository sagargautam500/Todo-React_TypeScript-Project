import './App.css'
import AddTodo from './components/AddTodo'
import NavBar from './components/NavBar'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <main>
        <h1 className='todo_title'>Todo_Website(React,Typescript)</h1>
       <center><AddTodo/></center> 
        <NavBar/>
        <Todos/>
      </main>
    </>
  )
}

export default App
