import './App.css'
import AddTodo from './components/AddTodo'
import NavBar from './components/NavBar'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <main>
        <h1>Todo_Website(React,Typescript)</h1>
        <NavBar/>
        <AddTodo/>
        <Todos/>
      </main>
    </>
  )
}

export default App
