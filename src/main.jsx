/* O arquivo MAIN está: 
executando o React, importando o React DOM (que lida com a renderização de componentes React no navegador),
está importando o App que é um componente e o CSS*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( //root vem la do index e embaixo renderiza o arquivo App.jsx
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>,
)
