'use client'

import { useState } from "react";
import { Data } from "../src/data";

export default function Page() {
    const pickRandomIndex = () => Math.ceil(Math.random() * (Data.length - 1))
    const [randomNumber, setRandomNumber] = useState(pickRandomIndex)
    const currentData = Data[randomNumber]
    return (
        <>
        <h2 className="text-2xl font-semibold">O planeta Terra é nossa casa</h2>
        <span className="text-xl text-gray-700 font-medium mb-8">Faça uma pequena ação e contribua um pouco para o mundo</span>
                
        <div className="flex flex-col w-96 mx-auto min-h-96 max-h-96 mb-6">
            <img src={currentData.image} alt="image" className="h-72 object-cover rounded-md border-2 border-green-700" />
            <span className="font-semibold text-base w-80 mx-auto">{currentData.text}</span>
        </div>
        <button
        className="bg-green-400 w-60 p-2 mx-auto rounded-lg text-lg" 
        onClick={() => setRandomNumber(pickRandomIndex())}
        >
        Sortear
        </button>
        </>
    )
}