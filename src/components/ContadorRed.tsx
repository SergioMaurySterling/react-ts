import { useReducer } from "react";

const initialState = {
  contador : 10
}

type ActionType =
| { type: 'incrementar'}
| { type: 'decrementar'}
| { type: 'custom', payload: number}

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type){
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1
      }
    case 'decrementar':
      // el spread crea una copia del objeto actual
      // con diferente ref en memoria
      return {
        ...state,
        contador: state.contador - 1
      }
    case 'custom':
      return {
        ...state,
        contador: action.payload
      }
    default:
      return state;
  }
}

export const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h2>Contador: {contadorState.contador}</h2>
      <button
        className="btn btn-outline-success"
        onClick={()=>dispatch({type:'incrementar'})}
      >
        Incrementar
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={()=>dispatch({type:'decrementar'})}
      >
        Decrementar
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={()=>dispatch({type:'custom', payload: 100})}
      >
        Setear en 100
      </button>
    </>
  )
}