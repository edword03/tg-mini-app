import './App.css'
import { useEffect } from "react";

const tg = (window as any).Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready()
  })

  return (
    <>
      telegram app
      <button onClick={() => tg.close()}>close</button>
    </>
  )
}

export default App
