
import './App.css';
import {useEffect, useState}from 'react';

function App() {
const[width,setWidth]=useState(window.screen.width);
useEffect(()=>{
  window.addEventListener('resize',currentwidth)
});
const currentwidth=()=>{
  setWidth(window.screen.width);
}
  return (
    <div className="grid place-items-center h-screen bg-zinc-200">
    <div className='max-w-sm'>
    <h1 className='px-5 mb-5 border-b-2 border-blue-800 py-2 m-2 text-center text-lg text-blue-900'>Find Your's system screen width easily</h1>
    <p className="shadow-black shadow-2xl p-5 m-2 text-2xl text-center bg-white rounded-lg border-x-8 border-blue-800">Your Screen Width is : <span className="text-blue-900 font-bold">{width}</span></p>
    </div>
    </div>
  );
}

export default App;
