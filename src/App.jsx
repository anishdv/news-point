import React, { useState } from "react";
import Axios from "axios";

function App() {
  const dat= new Date();

  const [newscount, setnewscount]= useState(0);
  const [inputt, setInputt]=useState("");  
  const [news, setNews] = useState([]);

  const fetchNews=function(){
    console.log("fetching news");
    console.log(inputt);
    Axios.get(
      `https://newsapi.org/v2/everything?q=${inputt}&from=${dat.getFullYear()}-${dat.getMonth()}-${dat.getDate()}&sortBy=popularity&apiKey=45e3ca87519743e5a64da688f3b9d277`
    ).then((response) => {
      setNews(response.data.articles);
    });
  };

  function handleChange(event){
    const newin=event.target.value;
    console.log(newin);
    setInputt(newin);
  }
  function handleChangeCount(event){
    const newcount=event.target.value;
    console.log(newcount)
    setnewscount(newcount);
  }
  return (
    <>
    <h1 className="d-flex justify-content-center border">NEWS POINT</h1>

    <div className="d-flex justify-content-center">
        <input onChange={handleChange} type="text" placeholder='Search for news' value={inputt}/>
        <input onChange={handleChangeCount} type="number" placeholder='Number of News' value={newscount}/>
    </div>
    <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-primary" onClick={fetchNews}
        >
          Fetch News
        </button>
    </div>
      <div className="container mt-5 ">
        <div className="row d-flex flex-row-3 justify-content-around">
          {news.slice(0, newscount).map((value, index) => {
            return (
              <div key={index} className="">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href={value.url} className="btn btn-outline-dark">
                      Main
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='d-flex flex-row justify-content-center p-100'>Made by Anish Devnani</div>
    </>
  );
}

export default App;
