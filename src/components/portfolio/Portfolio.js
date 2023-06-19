import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

import { Box, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';

import girl from "../../images/girl.avif";

import "./Portfolio.scss";
import ModalTest from "./ModalTest";

const Portfolio = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const projects = [
    {
      id: 1,
      title: "Project Title",
      description:
        "A Platform where you can hire an expert and also you can be an expert!",
      modal: <ModalTest open={open} handleClose={handleClose} />,
      live: "https://dev.experthire.fr/",
    },
    {
      id: 2,
      title: "Project Title",
      description:
        "A Platform where you can hire an expert and also you can be an expert!",
      modal: <ModalTest open={open} handleClose={handleClose} />,
      live: "https://dev.experthire.fr/",
    },
    {
      id: 3,
      title: "Project Title",
      description:
        "A Platform where you can hire an expert and also you can be an expert!",
      modal: <ModalTest open={open} handleClose={handleClose} />,
      live: "https://dev.experthire.fr/",
    },
    {
      id: 4,
      title: "Project Title",
      description:
        "A Platform where you can hire an expert and also you can be an expert!",
      modal: <ModalTest open={open} handleClose={handleClose} />,
      live: "https://dev.experthire.fr/",
    },
  ];

  return (
    <Box className="portfolio" sx={{ mx: 5, mt: 10 }}>
      <Box className="portfolio-top">
        <p className="portfolio-top-text1">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <p className="portfolio-top-text2">My Portfolio</p>
      </Box>

      <Swiper
        style={{ marginTop: "50px" }}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="portfolio-pagination"
      >
        {projects.map((items) => (
          <SwiperSlide
            key={items.id}
            style={{
              height: "550px",
              bgcolor: "#202327",
              display: "flex",
              justifyContent: "center",
            }}
          >
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
                image={girl}
                title="green iguana"
              />
              <CardContent>
                <p className="portfolio-project-title">{items.title}</p>
                <p variant="body2" className="portfolio-project-description">
                  {items.description}
                </p>
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
                  {items.modal}
                </div>
                <button className="portfolio-project-btn" size="small">
                  View Project
                </button>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Divider sx={{background: '#121415', mt:15}} />
    </Box>
  );
};

export default Portfolio;
