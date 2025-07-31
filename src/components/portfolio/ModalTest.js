import Modal from "@mui/material/Modal";
import { Avatar, Box, Divider, Fab, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import "./ModalTest.scss";

const ModalTest = ({ project, open, handleClose }) => {
  const {
    title,
    briefDescription,
    technologies,
    images,
    client,
    date,
    service,
    budget,
    live,
    description,
  } = project;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        maxWidth: 960,
        height: "auto",
        maxHeight: 550,
        margin: "0 auto",
        marginTop: "5%",
        overflow: "hidden",
      }}
    >
      <Box className="modal-style">
        <div style={{ float: "right", margin: "10px" }}>
          <Fab
            className="project-cross-btn"
            onClick={handleClose}
            size="medium"
            aria-label="add"
            sx={{
              fontSize: "25px",
              fontWeight: 700,
              backgroundColor: "#202327",
              color: "#ff014f",
              boxShadow: "0px 3px 10px rgb(0 0 0/ 0.99)",
            }}
          >
            X
          </Fab>
        </div>
        <Box sx={{ flexGrow: 1, p: 5 }} className="project">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <Swiper
                effect={"flip"}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {images?.map((image) => (
                  <SwiperSlide>
                    <img
                      src={image?.url}
                      height={400}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Typography
                sx={{ fontSize: { xs: "15", sm: 25 }, color: "#ff014f" }}
              >
                {title}
              </Typography>
              <Typography sx={{ fontSize: { xs: "15", sm: 15 }, mt: 1 }}>
                {briefDescription}
              </Typography>
              <Box sx={{ flexGrow: 1, mt: 2 }}>
                <Grid container spacing={0.1}>
                  <Grid item lg={12}>
                    <span className="project-key">Services: </span>
                    <span className="project-value">{service}</span>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ mt: 5 }}>
                <a href={live} target="blank">
                  <button className="portfolio-project-btn" size="small">
                    View Project
                  </button>
                </a>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ background: "#121415", mt: 5, mb: 2 }} />
          <Box>
            {/* {title === "Online Bike Shop" && (
              <p>
                <span style={{ color: "#ff014f" }} className="project-key">
                  Credentials:{" "}
                </span>
                <span className="project-value">
                  alamin23712@gmail.com(password: pass12345)
                </span>
              </p>
            )}
            {title === "House Renting" && (
              <p>
                <span style={{ color: "#ff014f" }} className="project-key">
                  Credentials:{" "}
                </span>
                <span className="project-value">
                  alamin23712@gmail.com - pass1234 (password)
                </span>
              </p>
            )} */}
            <p className="project-name">Technology</p>
            <Box sx={{ flexGrow: 1, mt: 7, mb: 5 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3, lg: 5 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {technologies?.map((item) => (
                  <Grid item xs={4} md={4} key={item.id}>
                    <Paper
                      elevation={3}
                      sx={{
                        py: 2,
                        bgcolor: "#202327",
                        boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                      }}
                    >
                      <Box
                        // className="project-technologies"
                        textAlign={"center"}
                      >
                        {/* <figure>{item?.icon}</figure> */}
                        {/* <p className="features-item-title">{item.title}</p> */}
                        <Typography
                          sx={{
                            fontSize: {
                              sm: 15,
                              xs: 15,
                            },
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#c4cfde",
                            textTransform: "uppercase",
                          }}
                        >
                          {item?.value}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <p className="project-name">Core Functionalities </p>
            <Typography sx={{ mt: 5, mb: 16 }} className="project-description">
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalTest;
