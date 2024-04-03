import { useState } from "react"

export default function Form(){

    const [isSaida, setIsSaida] = useState(false);

    return(
        <section className="flex justify-around border-2 items-center p-5">
            <div className="flex flex-col items-start">
                <label htmlFor="description">Descrição</label>
                <input type="text" id="description" className="bg-gray-100 border-2 border-gray-500 rounded p-1" />
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="saidas">Valor</label>
                <input type="number" id="saidas" className="bg-gray-100 border-2 border-gray-500 rounded p-1" />
            </div>
            <div className="flex flex-row w-[15%] justify-between">
                <div className="gap-2">
                    <label htmlFor="">Entrada</label>
                    <input checked={isSaida == false} onChange={()=> setIsSaida(!isSaida)} defaultChecked type="radio" className="ml-2"/>
                </div>
                <div className="justify-between">
                    <label htmlFor="">Saída</label>
                    <input checked={isSaida} onChange={()=> setIsSaida(!isSaida)} type="radio" className="ml-2"/>
                </div>
            </div>
            <div>
                <button className="p-3 bg-green-500 border-green-600 border-2 rounded">Adicionar</button>
            </div>
        </section>
    )
}