import React from 'react'
import Preview from './Preview'

export default function PlayList({playList,listStyle,setCurrentSong,setNavigation,setTransition,transition}) {
    const style=(listStyle==='list')? 'list justify-start history-container' : "tile justify-center"

    return (
        <div className={`flex1 wrap flex list-container ${style}`}>
            {playList.map(item=><Preview setNavigation={setNavigation} setTransition={setTransition} transition={transition} setCurrentSong={setCurrentSong} listStyle={listStyle} key={item.id} item={item}></Preview>)}
        </div>
    )
}
