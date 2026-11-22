import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import News from './News'


export default function Main({user}) {
  return (
    <div>
      <Sidebar/>
      <main className="main-content">
        

        <div className="container-fluid p-4">
          <News/>
        </div>
        
      </main>
    </div>
  )
}
