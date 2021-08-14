import React from 'react'
import {useState} from 'react'
import ReactHowler from 'react-howler'

const ForestRain = () => {
  const [play, setPlay] = useState(false)
  const url = "./sounds/forestRain.ogg"

  const handlePlay = () => {
    setPlay(!play)
  };

  return (
<div>
<h2>Forest Rain</h2><br/>
    <h4>Sometimes, the forest may be the best place to go.</h4>
        <ReactHowler
          src={url}
          playing={play}
          loop={true}
        />
        <button onClick={handlePlay}>Play</button>
      </div>
  )
}

export default ForestRain;