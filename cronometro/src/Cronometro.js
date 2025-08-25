import React, { useState, useEffect, useRef } from 'react';
import './Cronometro.css';

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(false);
  const intervalo = useRef(null);

  useEffect(() => {
    document.title = `Tempo: ${segundos}s`;

    if (rodando) {
      intervalo.current = setInterval(() => {
        setSegundos(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalo.current);
    }

    return () => clearInterval(intervalo.current);
  }, [rodando, segundos]);

  const iniciar = () => setRodando(true);
  const pausar = () => setRodando(false);
  const zerar = () => {
    setRodando(false);
    setSegundos(0);
  };

  return (
    <div className="cronometro-container">
      <div className="tempo">{segundos}s</div>
      <div className="botoes">
        <button onClick={iniciar} className="botao iniciar" disabled={rodando}>Iniciar</button>
        <button onClick={pausar} className="botao pausar" disabled={!rodando}>Pausar</button>
        <button onClick={zerar} className="botao zerar">Zerar</button>
      </div>
    </div>
  );
}

export default Cronometro;

