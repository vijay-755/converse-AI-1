import React, { useState } from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickedOrder, setClickedOrder] = useState([]);

  const handleClick = (index) => {
    if (clickedOrder.includes(index) || clickedOrder.length === 9) return;

    const newColors = [...colors];
    newColors[index] = 'green';

    setColors(newColors);
    setClickedOrder([...clickedOrder, index]);

    if (clickedOrder.length === 8) {
      setTimeout(() => {
        const finalColors = Array(9).fill('white');
        [...clickedOrder, index].forEach((pos, i) => {
          setTimeout(() => {
            finalColors[pos] = 'orange';
            setColors([...finalColors]);
          }, i * 300);
        });
      }, 300);
    }
  };

  return (
    <div className="grid">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default App;
