import "./App.css";
import React, { useEffect, useState } from 'react';

function Registros({ list = [] }){


  const [ order, setOrder ] = useState(1)
  const [ colunmOrder, setcolunmOrder ] = useState('level')

  const handleOrder = fieldName => {
    setOrder(-order)
    setcolunmOrder(fieldName)
  }

 list = list.sort((a,b) => {
  return a[colunmOrder] < b[colunmOrder] ? -order : order;
 })






  return <table>

    <thead>
      <tr>
      <th onClick={ e => handleOrder('foto')}></th>
        <th onClick={ e => handleOrder('player')}>Jogador</th>
        <th onClick={ e => handleOrder('team')}>Time</th>
        <th onClick={ e => handleOrder('level')}>Level</th>
      </tr>
    </thead>

    <tbody>
      {
        list.map(({foto, player, level, team}) => {
          return <tr key={player}>
              <td><img src={foto} alt="Jogador"/></td>
              <td>{player}</td>
              <td>{team}</td>
              <td>{level}</td>
              
          </tr>
        })
      }

    </tbody>

  </table>
}

function App() {

  const [ list, setList ] = useState ( [] )

  useEffect ( () => {

    fetch ('http://localhost:3000/produtos').then ( async result => {
      setList ( await result.json() )
    })

  }, [] )
 



  return <div>
    <Registros list={list} />
  </div>
    
}

export default App;
