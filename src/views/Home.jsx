import { useState } from 'react'
import './Home.css'

import Header from '../components/Header/Header'

function Home() {

  return (
    <section className="view view--home">
      <Header currentView={'home'} />
      <h2>Välkommen!</h2>
    </section>
  )
}

export default Home 
