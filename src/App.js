import React from 'react'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { Cta, Brand, Navbar } from './components'

import './App.css'


const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
)


export default App
