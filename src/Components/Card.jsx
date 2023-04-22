import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia  from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function MediaCard({ val }) {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
    

  const day = new Date(val?.pubDate).getDate();
  const month = months[new Date(val?.pubDate).getMonth()];
  const year = new Date(val?.pubDate).getFullYear();
  return (
    <Card sx={{ width: 450, height: 500, marginTop: "20px",border: "5px solid #0c4468"}}>
      <Typography variant="h6" sx={{ opacity: "0.8" }} align="center">
        {`${day}  ${month}  ${year} `}
      </Typography>
      <CardMedia
        component="img"
        height="200"
        image={val?.image_url}
        alt={"news"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val?.description?.toString()?.slice(0, 100)}.....
        </Typography>
        <Button variant="outlined" href={val?.link}>Read More</Button>
      </CardContent>
    </Card>
  );
}
