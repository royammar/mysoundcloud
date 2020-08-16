import React from "react";
import noImage from '../styles/imgs/noImage.png'


export default function Preview({ item, listStyle,setCurrentSong,setNavigation,setTransition,transition }) {

  const regex = /large/gi;
  const img = item.artwork_url ? item.artwork_url.replace(regex, 't200x200') :noImage;
 
  
  
  function handleItemSelect(){
    setCurrentSong(item)
    setNavigation('song')
    setTransition(!transition)

  }
  
  
  return (

    <div className="history-item">
        {listStyle === "list" ? (
          <div className="list-title" onClick={handleItemSelect}>{item.title}</div>
        ) : (
          <div  onClick={handleItemSelect} className="image-container">
          <img src={img} alt="" srcSet="" />
          </div>
        )}
  </div>
  );
}
