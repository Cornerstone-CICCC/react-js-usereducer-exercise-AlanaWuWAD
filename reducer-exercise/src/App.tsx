import { useReducer } from 'react'
import './App.css'
import { setReducer } from './components/setReducer'

const App = () => {
  const [state, dispatch] = useReducer(setReducer,{ isDark:false, fSize:16 })

  return (
    <div style={{
      backgroundColor: state.isDark ? "#333" : "#fff",
      width: "900px",
      height: "100px",
      fontSize:`${state.fSize}px`,
      textAlign: "center"    
      }}>
      <button onClick={()=> dispatch({type:"toggle"})} >Toggle Dark Mode</button>
      <button onClick={()=> dispatch({type:"increaseSize"})}>Increase Font Size</button>
      <button onClick={()=> dispatch({type:"decreaseSize"})}>Decrease Font Size</button>
    </div>
  )
}

export default App