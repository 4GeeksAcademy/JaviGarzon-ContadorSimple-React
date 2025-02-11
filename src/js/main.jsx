import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

import SecondsCounter from '../components/SecondsCounter';

let seconds = 0

const root = ReactDOM.createRoot(document.querySelector("#app"));

setInterval(() => { root.render(<SecondsCounter seconds={seconds} />); seconds++ }, 1000)





// Si usas una version de react anterior a la 18 puedes usar
// ReactDOM.render de esta manera
// ReactDOM.render(<Card />, document.quertSelector('#root'));