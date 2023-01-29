import "./Aplicacao.css";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TooltipJogador from "./TooltipJogador";
import TooltipTime from "./TooltipTime";
import TooltipLevel from "./TooltipLevel";




function Ordenar({ list = [] }){


  const [ order, setOrder ] = useState(1)
  const [ colunmOrder, setcolunmOrder ] = useState('level')

  const handleOrder = fieldName => {
    setOrder(-order)
    setcolunmOrder(fieldName)
  }

 list = list.sort((a,b) => {
    return a[colunmOrder] < b[colunmOrder] ? -order : order;
 })


  return <div><table className="table table-bordered">

    <thead>
      <tr>
        <th className="table-success"></th>
        <th  className="click table-success" onClick={ e => handleOrder('player')}><TooltipJogador></TooltipJogador></th>
        <th className="click table-success h5" onClick={ e => handleOrder('team')}><TooltipTime></TooltipTime></th>
        <th className="click table-success h5" onClick={ e => handleOrder('level')}><TooltipLevel></TooltipLevel></th>
      </tr>
    </thead>

    <tbody>
      {
        list.map(({foto, player, level, team}) => {
          return <tr key={player}>

              <td><img src={foto} alt="Jogador" className="img-fluid" /></td>
              <td className="py-5 table-light">{player}</td>
              <td className="py-5">{team}</td>
              <td className="py-5 table-light">{level}</td>
              
          </tr>
        })
      }
    </tbody>

  </table>
  </div>
}


function Aplicacao() {

  const [ list, setList ] = useState ( [] )

  useEffect ( () => {

    fetch ('http://localhost:3000/jogadores').then ( async result => {
      setList ( await result.json() )
    })

  }, [] )
 



  return <div>
    <Ordenar list={list} />
  </div>
    
}

export default Aplicacao;
