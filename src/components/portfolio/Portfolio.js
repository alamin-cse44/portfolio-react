import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

import { Box, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import girl from "../../images/girl.avif";

import ModalTest from "./ModalTest";
import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";

import "./Portfolio.scss";

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
    <Box className="portfolio" sx={{ mx: 3, mt: 10 }}>
      <Box className="portfolio-top">
        <Title1 title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" />
        <Title2 title="My Portfolio" />
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
                <Typography
                  sx={{
                    fontSize: {
                      lg: 22,
                      md: 22,
                      sm: 18,
                      xs: 18,
                    },
                    fontWeight: "700",
                    color: "#ff014f",
                    letterSpacing: '3px',
                    textTransform: 'uppercase'
                  }}
                >
                  {items.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: 20,
                      md: 20,
                      sm: 15,
                      xs: 15,
                    },
                    mt:2,
                    textAlign: "justify",
                    fontWeight: "600",
                    color: "#c4cfde",
                  }}
                >
                  {items.description}
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
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Box>
  );
};

export default Portfolio;
