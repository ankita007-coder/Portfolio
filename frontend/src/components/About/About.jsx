import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({about}) => {
  return (
    <div className="about">
        <div className="aboutContainer">
            <Typography>{about.quote}</Typography>
       </div>
       <div className="aboutContainer2">
            <div>
                <img src={about.avatar.url} alt="pic" className="aboutAvatar"/>
                <Typography variant="h4" style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "Comic Sans MS",
                    paddingTop: "2vmax"
                }}>{about.name}</Typography>
                <Typography variant="h4" style={{
                    fontSize: "16px",
                    color:"gray",
                    paddingTop: "5px"
                }}>{about.title}</Typography>
                <Typography variant="h4" style={{
                    fontSize: "16px",
                    color:"gray",
                    paddingTop: "5px"
                }}>{about.subtitle}</Typography>
            </div>
            <div>
                <Typography style={{
                    wordSpacing:"5px",
                    lineHeight:"30px",
                    letterSpacing:"2px",
                    textAlign: "right"
                }}>
                    {about.description}</Typography>
            </div>
       </div>
    </div>
);
};

export default About;