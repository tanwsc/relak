import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { AwesomeButton } from "react-awesome-button";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
const ForestRain = () => {
  const [play, setPlay] = useState(false);
  const url =
    "https://dl.dropboxusercontent.com/s/dhz6t7bfezcfwhw/forestRain.ogg?dl=0";

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h2>Forest Rain</h2>

      <h4>Sometimes, the forest may be the best place to go.</h4>
      {play ? (
        <>
          <ReactHowler src={url} playing={true} loop={true} />
        </>
      ) : (
        <></>
      )}
      <AwesomeButton size="icon">
        {play ? (
          <>{<PauseCircleOutlined onClick={handlePlay} />} </>
        ) : (
          <>{<PlayCircleOutlined onClick={handlePlay} />} </>
        )}
      </AwesomeButton>
    </div>
  );
};

export default ForestRain;
