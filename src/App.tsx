import React from 'react';
import { NavBar } from './NavBar'
import { Logo } from './Logo'


let App = () => {


  return (
    <NavBar itemLeft={<Logo name="PaarFit"></Logo>} itemRight={<p>Mascha</p>} />
  );
}


export default App;


