import React, { Component } from 'react'
import ReactHowler from 'react-howler'

function Reacthowler() {
  return (
    <div>
        <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={true}
        />
        <h3>This is a heading </h3>
    </div>
  )
}

export default Reacthowler