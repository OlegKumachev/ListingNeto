import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import items from './data/etsy.json';
import Listing from './components/Listing';


function App() {
  return (
    <>
      <Listing items={items} />
    </>
  );
}

export default App
