import React from "react";


export default function SearchHistory({searchHistory,handleSearch}) {





  return (
    <React.Fragment>
    <div className='history-container'>
      {searchHistory.map((item, index) => (
        <div className="history-item" onClick={() => handleSearch(item)} key={index}>
          {item}
        </div>
      ))}
    </div>
    </React.Fragment>
  );
}
