import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function NewsCard() {
  const { index } = useParams();
  const [data, setData] = useState('');
  const [category, setCategory] = useState('world');
  const [language, setLanguage] = useState("en");

  async function getData() {
    const { data } = await axios.get(`https://newsdata.io/api/1/news?&category=${category}&language${language}&apikey=pub_189097370e2bc62dde9d9a43821bb78b016a7`);
    setData(data.results[index]);
    console.log(data.results[index]);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {" "}
      {data!=="" ? (
        <Card sx={{ width: 400, height: 450, justifyContent:"center"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              width="200"
              height="200"
              image={data.image_url}
              alt="news"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.content}
                <br/>
                <br/>
                <p>
                  <b>{data.description}</b>
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}