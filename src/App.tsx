import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Formulario} from './components/Form'
import List from './components/List'
import { IComprovante } from './interface/IComprovante'
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [comprovantes, setComprovantes] = useState<IComprovante[]>([])
  const [total, setTotal] = useState<string>('carregando...')
  
  useEffect(()=>{
    setComprovantes([
      {
        id: uuidv4(),
        description: "teste",
        value: 5.6,
        type: "entrada"
      },
      {
        id: uuidv4(),
        description: "teste2",
        value: 7.0,
        type: "saida"
      }
    ])
  },[])

  useEffect(()=> {
    let total = 0;
    comprovantes.forEach((comprovante : IComprovante)=> {
      console.log(comprovante)
      if(comprovante.type == "entrada"){
        total = total + comprovante.value
      }else{
        total = total - comprovante.value
      }
    })

    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(total)

    setTotal(formatted)
  },[comprovantes])
  

  return (
    <main className='w-[80%] p-10 rounded bg-slate-300 shadow-2xl'>
      <div className='flex flex-col gap-8'>
        <h1 className='bg-zinc-400 w-[100%] rounded p-8 text-4xl font-extrabold text-white'>APP FINANCE</h1>
        <Formulario setComprovantes={setComprovantes} comprovantes={comprovantes}/>
        <List total={total} comprovantes={comprovantes} setComprovantes={setComprovantes}/>
      </div>
    </main>
  )
}

export default App
