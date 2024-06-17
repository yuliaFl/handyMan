import React from 'react';
import DropdownButton from '../components/DropdownButton'; 

function Kitchen() {
  const backgroundStyle = {
    backgroundImage: `url('/kitchen.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', /* Adjust this to fit your needs */
    width: '100vw', /* Adjust this to fit your needs */
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '1px 1px 2px black',
  };

  return (
    <div style={backgroundStyle}>
      <header>
        <h1>Kitchen</h1>
      </header>
      <main>
        <p>Hover over a part of the room that I can help you with</p>
        <DropdownButton /> {}
      </main>
    </div>
  );
}

export default Kitchen;