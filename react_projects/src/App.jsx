import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
const App = ()=>{

    const[count, setcount]= useState(0);

  function handleAdd(){
    setcount(count+1)
  }

  function handleSub(){
    setcount(count-1)

  }

  function handleReset(){
    setcount(0)
  }

  return <div className='mx-32 w-auto items-center'>
             {/* <Header />
             <div>body</div>
             <Footer /> */}

             <h2 className='ml-12 mt-4'>{count}</h2>
             <button onClick={handleAdd} className='m-4 p-2 border-green-700shadow-lg rounded-lg bg-green-700 text-white'>add</button>
             <button onClick={handleSub} className='m-4 p-2  border-red-700 shadow-lg rounded-lg bg-red-700 text-white'>sub</button>
             <button onClick={handleReset} className='bg-slate-300 text-yellow-500 m-4 p-2 border shadow-md rounded-lg'>Reset</button>
         </div>
}

export default App;