import React from 'react'

const Log = ({gameTurns}) => {
  return (
    <ol id="log">
      {gameTurns.map((turn)=><li key={`${turn.box.row}${turn.box.col}`}>{turn.player} selected {turn.box.row} {turn.box.col}</li>)}
    </ol>
  )
}

export default Log