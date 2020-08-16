import React , {useState} from "react";
import noImage from '../styles/imgs/noImage.png'

export default function ItemDetails({item}) {
  const regex = /large/gi;
  const img = item.artwork_url ? item.artwork_url.replace(regex, 't500x500') : noImage;
  const url =  `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${item.id}&amp;&auto_play=true`;
  const [togglePlay, setTogglePlay] = useState(false);


  function handlePlay() {
    setTogglePlay(!togglePlay);
  }

  return (
    <div >
      <div className="flex align-center justify-center details-container">
        <img className="image-details" src={img} alt="" onClick={handlePlay} />
      </div>
      {togglePlay && (
      <iframe title="sc-player" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={url}>
      </iframe>
      )}
    </div>
  );
}
