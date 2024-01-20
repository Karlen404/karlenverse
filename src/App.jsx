/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import CardSosmed from './components/cardSosmed'
import CardMe from './components/cardMe'
import CardSpotify from './components/cardSpotify'
import CardSpotify2 from './components/cardSpotify2'
import Footer from './components/footer'


function App() {
  return (
    <div className=' h-full flex justify-center'>
      <div className="container  flex flex-col  gap-4 h-fit w-fit">
        <div className='flex justify-start font-mono font-semibold text-5xl my-10 text-slate-100'>
          <h2>It's Me. Hi</h2>
        </div>
        <div className='flex flex-col sm:flex-row justify-center gap-4 '>
          <CardSosmed />
          <CardMe />
        </div>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <CardSpotify bgColor='bg-[#1D2D44]' />
          <CardSpotify2 bgColor='bg-[#3E5C76]' />
        </div>
        
        <div className='flex justify-center my-7'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App