import React from 'react';
import DropdownButton from '../components/DropdownButton'; 
import './Kitchen.css';

function Kitchen() {

  const sinkItems = ['Change Sink', 'Clogged Sink'];
  const backsplashItems = ['Fix', 'Change '];
  const faucetItems = ['Replace'];
  const doorItems = ['Fix ', 'Replace', 'Paint'];

  return (
    <div className="kitchen-background">
      <header>
        <h1>Kitchen</h1>
      </header>
      <main>
        <p>Hover over a part of the room that I can help you with</p>
        <div className="sink-section">
          <DropdownButton label="Sink" items={sinkItems} />
        </div>
        <div className="backsplash-section">
          <DropdownButton label="backsplash" items={backsplashItems} />
        </div>
        <div className="faucet-section">
          <DropdownButton label="faucet" items={faucetItems} />
        </div>
        <div className="door-section">
          <DropdownButton label="door" items={doorItems} />
        </div>
      </main>
    </div>
  );
}

export default Kitchen;
