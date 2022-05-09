import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  milisegundos: number;
  // variables opcionales
  segundos?: number;
}

export const Timer = ( {milisegundos}: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // si ref.current existe, haz lo siguiente despues de &&
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(()=>setSegundos(s=>s+1), milisegundos);
  },[milisegundos])

  return (
    <>
      <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}