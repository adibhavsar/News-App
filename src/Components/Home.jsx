import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
// eslint-disable-next-line
import { Navigate, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";


function Home() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("world");
  const [language, setLanguage] = useState("en");
  

  async function getData() {
    const { data } = await axios.get(
      `https://newsdata.io/api/1/news?&category=${category}&language=${language}&apikey=pub_189097370e2bc62dde9d9a43821bb78b016a7`
    );
    setData(data.results);
    console.log("Home");
  }

  

  useEffect(() => {
    getData();
  }, [category, language]);
  const navigate = useNavigate();


  return (
    <div>
      {Array.isArray(data) && data.length <= 0 ? (
        <div className="progress">
          <CircularProgress />
        </div>
      ) : (
        <div className="news-cards">
          <ul className="btn">
          <li id="recom"><h2>Recommendations</h2></li>&nbsp;&nbsp;&nbsp;&nbsp;
          <li><Button  onClick={() => setCategory("world")}>World</Button></li>&nbsp;&nbsp;
          <li><Button  onClick={() => setCategory("top")}>Breaking News</Button></li>&nbsp;&nbsp;
          <li><Button  onClick={() => setCategory("business")}>Business</Button></li>&nbsp;&nbsp;
          <li><Button  onClick={() => setCategory("sports")}>Sports</Button></li>&nbsp;&nbsp;
          <li><Button  onClick={() => setCategory("health")}>Health</Button></li>&nbsp;&nbsp;
          <li><Button  onClick={() => setCategory("technology")}>Technology</Button></li>&nbsp;&nbsp;
          <li><Button  onClick={() => setCategory("entertainment")}>Entertainment</Button></li>&nbsp;&nbsp;
          <li><Button  onClick={() => setCategory("science")}>Science</Button></li>&nbsp;&nbsp;
          <li><Button  onClick={() => setLanguage("hi")}>Hindi</Button></li>&nbsp;&nbsp;
          <li><Button  onClick={() => setLanguage("en")}>English</Button></li>
          </ul>
          {Array.isArray(data) &&data.map((val, indx) => (
              <div key={indx} onClick={() => navigate(`card/${indx}`)}>
                <Card val={val} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
