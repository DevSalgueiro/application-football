import "./App.css";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TooltipPositionedExample from "./OverlayTrigger";
import TooltipPositionedExample1 from "./OverlayTrigger1";
import TooltipPositionedExample2 from "./OverlayTrigger2";




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


  return <div  className="table-responsive"><table className="table table-bordered">

    <thead>
      <tr className="table-responsive">
      <th className="table-success"></th>
        <th  className="click table-success" onClick={ e => handleOrder('player')}><TooltipPositionedExample></TooltipPositionedExample></th>
        <th className="click table-success h5" onClick={ e => handleOrder('team')}><TooltipPositionedExample1></TooltipPositionedExample1></th>
        <th className="click table-success h5" onClick={ e => handleOrder('level')}><TooltipPositionedExample2></TooltipPositionedExample2></th>
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

function App() {

  const [ list, setList ] = useState ( [] )

  useEffect ( () => {

    fetch ('http://localhost:3000/jogadores').then ( async result => {
      setList ( await result.json() )
    })

  }, [] )
 



  return <div>
    <Registros list={list} />
  </div>
    
}

export default App;
