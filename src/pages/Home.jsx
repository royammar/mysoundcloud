import React, { useEffect, useState } from "react";
import PlayListService from "../services/PlayListService";
import Filter from "../cmps/Filter";
import PlayList from "../cmps/PlayList";
import SearchHistory from "./SearchHistory";
import StorageService from "../services/StorageService";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import ItemDetails from "./ItemDetails";
import list from "../styles/imgs/list.png";
import tile from "../styles/imgs/tiles.png";
import next from "../styles/imgs/next.png";

export default function Home() {
  let style = StorageService.query("listStyle") || "list";
  const [listStyle, setListStyle] = useState(style);
  const [playList, setPlayList] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentSong, setCurrentSong] = useState("");
  const [navigation, setNavigation] = useState("home");
  const [transition, setTransition] = useState(false);
  const [searchHistory, setSearchHistory] = useState(false);

  useEffect(() => {
    let searchList = StorageService.query("searchHistory");
    if (searchList) setSearchHistory(searchList);

    return () => {};
  }, [listStyle]);

  async function handleSearch(term) {
    setNavigation("search");
    setTransition(!transition);
    try {
      const { collection, next_href } = await PlayListService.getList(term);
      if (collection.length === 0) {
        setNavigation("not-found");
        setTransition(!transition);
        return;
      }
      setPlayList(collection);
      setNextPage(next_href);
      let searchList = StorageService.post("searchHistory", term);
      if (searchList.length > 5)
        searchList = StorageService.remove("searchHistory");
      setSearchHistory(searchList);
    } catch (err) {
      console.log(" err in playlist", err);
    }
  }

  async function handleNextPage() {
    try {
      const { collection, next_href } = await PlayListService.getNextPage(
        nextPage
      );
      setPlayList(collection);
      setNextPage(next_href);
    } catch (err) {
      console.log(err);
    }
  }

  function handleviewChange(userPref) {
    StorageService.save("listStyle", userPref);
    setListStyle(userPref);
  }

  return (
    <div className="main container flex1 flex column">
      <Filter
        handleSearch={handleSearch}
        setNavigation={setNavigation}
        setTransition={setTransition}
        transition={transition}
      >
        {" "}
      </Filter>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={transition}
          timeout={300}
          classNames="main-items fade"
          unmountOnExit
        >
          <>
            {navigation === "search" && playList && (
              <div className="flex column flex1 margin-top">
                <PlayList
                  transition={transition}
                  setCurrentSong={setCurrentSong}
                  setNavigation={setNavigation}
                  setTransition={setTransition}
                  listStyle={listStyle}
                  playList={playList}
                />
              </div>
            )}
            {navigation === "not-found" && (
              <div className="no-items">No item found</div>
            )}
            {navigation === "home" && (
              <div className="main-container flex  center align-center"></div>
            )}
            {navigation === "song" && <ItemDetails item={currentSong} />}
            {navigation === "searchHistory" && (
              <SearchHistory
                searchHistory={searchHistory}
                handleSearch={handleSearch}
              />
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
      {navigation === "search" && playList && (
        <div className="btn-container">
          <button className="btn" onClick={handleNextPage}>
            <img src={next}></img>
          </button>
          <button className="btn" onClick={() => handleviewChange("tile")}>
            <img src={tile}></img>
          </button>
          <button className="btn" onClick={() => handleviewChange("list")}>
            <img src={list}></img>
          </button>
        </div>
      )}
    </div>
  );
}
