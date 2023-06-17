import React from 'react';
import { ButtonToHome } from '../components/Buttons';


export const GameOver: React.FC = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f7f2cd',
    }}>
      <h1>GAME OVER</h1>
      <h3>Thanks for playing.</h3>
      <ButtonToHome/>
    </div>
  );
};


