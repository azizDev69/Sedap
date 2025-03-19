import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  useEffect(() => {
    document.title = import.meta.env.VITE_WEBSITE_NAME || "Default Title";
  }, [])



  return (
    <>
      <main className='flex'>
        <aside className='w-2/12 relative'>
          <Sidebar />
        </aside>
        <section className='flex-1 flex min-h-[200vh]'>
          <div className='bg-base-200 px-5 w-full felx flex-col justify-start justify-items-start gap-5'>
            <Navbar />
            <Outlet />
          </div>
        </section>
      </main>


    </>
  )
}

export default App
