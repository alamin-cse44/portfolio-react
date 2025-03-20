import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import girl from "../../images/girl.avif";

import ModalTest from "./ModalTest";

import "./Portfolio.scss";

const Projects = ({ project }) => {
  const { title, briefDescription, live } = project;
  // console.log(project.technology);
  const brief = briefDescription.slice(0, 75);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Card
        className="portfolio-project-card"
        sx={{
          maxWidth: 440,
          maxHeight: 460,
          boxShadow: "0px 3px 10px rgb(0 0 0/ 0.99)",
          borderRadius: "25px",
          bgcolor: "#202327",
          ml: 1,
          mt: 1,
          mr: 1,
          p: 3,
        }}
      >
        <CardMedia
          sx={{ height: 240, pl: 2, borderRadius: "15px" }}
          className="portfolio-project-image"
          image={project?.images[0]?.url}
          title="project poster"
        />
        <CardContent>
          <Typography
            sx={{
              fontSize: {
                sm: 18,
                xs: 18,
              },
              fontWeight: "700",
              color: "#ff014f",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                sm: 16,
                xs: 15,
              },
              mt: 2,
              textAlign: "justify",
              fontWeight: "600",
              color: "#c4cfde",
            }}
          >
            {brief}{" "}
            <button
              onClick={handleOpen}
              style={{
                backgroundColor: "transparent",
                // border: "1px solid #c4cfde",
                border: "none",
                color: "#c4cfde",
                cursor: "pointer",
                padding: "5px 10px",
                fontWeight: "600",
              }}
            >
              See more..
            </button>
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", gap: "10px" }}>
          <div>
            <button
              onClick={handleOpen}
              className="portfolio-project-btn"
              size="small"
            >
              Details
            </button>
          </div>
          <a href={live} target="blank">
            <button className="portfolio-project-btn" size="small">
              View Project
            </button>
          </a>
        </CardActions>
      </Card>

      <ModalTest project={project} open={open} handleClose={handleClose} />
    </div>
  );
};

export default Projects;
