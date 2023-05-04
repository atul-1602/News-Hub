import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const FetchData = ({cat}) => {
  const [Data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get(
        cat? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=f6189183dbeb4164b86c5e31b63b8aa5`:
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f6189183dbeb4164b86c5e31b63b8aa5"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  }, [cat]);
  return (
    <div className="container my-4  ">
      <h3>
        <u> TOP HEADLINES</u>{" "}
      </h3>
      <div className=" container d-flex flex-column justify-content-center align-items-center flex-column my-3 " style={{minHeight:"100vh"}}>
         {Data
          ? Data.map((items, index) => (
              <>
                <div className="container my-3 p-3 " style={{boxShadow:"2px 2px 10px silver",borderRadius:".6rem"}}>
                  <h5 className="my-2">{items.title}</h5>
                  <div className="container ">
                    <img
                      src={items.urlToImage}
                      alt=""
                      className="img-fluid "
                      style={{
                        width: "auto",
                        height: "20rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1">{items.content}</p>
                  <Link to={items.url} target="blank">
                    view more
                  </Link>
                </div>
              </>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default FetchData;
