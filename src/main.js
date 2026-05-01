import React from 'react'
import { createRoot } from 'react-dom/client'

function App(){
  return React.createElement('div', {style:{fontFamily:'Inter, sans-serif', background:'#020712', color:'#fff'}},

    React.createElement('section',{style:{padding:'120px 40px'}},
      React.createElement('h1',{style:{fontSize:'48px',marginBottom:'20px'}},'TI que faz sua empresa parar de travar.'),
      React.createElement('p',{style:{color:'#aaa',marginBottom:'20px'}},'A IndexaByte assume sua infraestrutura, suporte e organização tecnológica.'),
      React.createElement('a',{href:'https://wa.me/5511999999999',style:{background:'#00e6b8',color:'#000',padding:'12px 20px',borderRadius:'999px',textDecoration:'none',fontWeight:'bold'}},'Diagnóstico gratuito')
    ),

    React.createElement('section',{style:{padding:'80px 40px'}},
      React.createElement('h2',null,'Problemas que você enfrenta hoje'),
      React.createElement('ul',null,
        React.createElement('li',null,'Computadores lentos'),
        React.createElement('li',null,'Internet instável'),
        React.createElement('li',null,'Sem suporte técnico')
      )
    ),

    React.createElement('section',{style:{padding:'80px 40px'}},
      React.createElement('h2',null,'Modelo IndexaByte'),
      React.createElement('p',null,'TI organizada, preventiva e com suporte real.')
    )

  )
}

createRoot(document.getElementById('root')).render(React.createElement(App))
