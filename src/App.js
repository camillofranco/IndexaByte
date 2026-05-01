import React from 'react'

const e = React.createElement

export default function App(){
  return e('div', null,
    e('header',{className:'nav'}, e('div',{className:'container'},
      e('h2',null,'IndexaByte'),
      e('a',{href:'#contato',className:'btn primary'},'Diagnóstico gratuito')
    )),

    e('section',{className:'hero container'},
      e('h1',null,'Chega de perder tempo com TI improvisada.'),
      e('p',null,'Helpdesk, infraestrutura e sites para empresas.'),
      e('a',{href:'#contato',className:'btn primary'},'Falar agora')
    ),

    e('section',{className:'section container'},
      e('h2',null,'Problemas comuns'),
      e('ul',null,
        e('li',null,'Computadores lentos'),
        e('li',null,'Internet instável'),
        e('li',null,'Sem suporte técnico')
      )
    ),

    e('section',{className:'section container'},
      e('h2',null,'Solução IndexaByte'),
      e('p',null,'TI organizada e preventiva com suporte real.')
    ),

    e('section',{id:'contato',className:'section container'},
      e('h2',null,'Diagnóstico gratuito'),
      e('a',{href:'https://wa.me/5511999999999',className:'btn primary'},'WhatsApp')
    )
  )
}
