import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentDescription from './components/StudentDescription'

function App() {
  const [numeroAlunos, setNumerosAlunos] = useState(1)
  // let numeroAlunos = 1

  return (
    <>
    <h2>LACB</h2>
    <p>Futuro Dev</p>
    <hr />

    <h3>Alunos: <span>{numeroAlunos}</span></h3> 

    <StudentDescription 
    nome={"LACB"}
    idade={16}
    />

    {/* <strong>Nome: </strong><span>Rafael</span> <br />
    <strong>Idade: </strong><span>16</span> <br /> */}

    <button onClick={() => {console.log(setNumerosAlunos(numeroAlunos + 1))}}>+</button>
    <button onClick={() => {console.log(setNumerosAlunos(numeroAlunos - 1))}}>-</button>
    </>
  )
}

export default App