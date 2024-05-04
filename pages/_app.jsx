'use client'
import './globals.css'

import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('./index.jsx'), { ssr: false })

export default function App() {
    return (
        <div className='flex flex-col gap-1 text-center bg-green-50 mb-12 min-w-full'>
            <header className='text-center py-7 bg-gradient-to-r from-green-600 to-green-900 shadow-md shadow-cyan-300 mb-6 min-w-full'>
                <h1 className='uppercase text-4xl text-white font-bold'>
                ideias ambientais
                </h1>
            </header>
            <NoSSR />
        </div>
    )
}