import Modal from "@mui/material/Modal";
import { Box, Divider, Fab } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import react from "../../images/react.png";
import girl from "../../images/girl.avif";

import "./ModalTest.scss";

const features = [
  {
    id: 1,
    icon: react,
    title: "React",
  },
  {
    id: 2,
    icon: react,
    title: "React",
  },
  {
    id: 3,
    icon: react,
    title: "React",
  },
  {
    id: 4,
    icon: react,
    title: "React",
  },
  {
    id: 5,
    icon: react,
    title: "React",
  },
  {
    id: 6,
    icon: react,
    title: "React",
  },
];

const ModalTest = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
                  <SwiperSlide>
                    <img src={girl} alt="" style={{ width: "100%" }} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={girl} alt="" style={{ width: "100%" }} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={girl} alt="" style={{ width: "100%" }} />
                  </SwiperSlide>
                </Swiper>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <p className="project-name">IQC Expert Hire Web Application</p>
                <p className="project-description">
                  Through a wide variety of mobile applications, we’ve developed
                  a unique visual system.
                </p>
                <Box sx={{ flexGrow: 1, mt: 5 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                      <span className="project-key">Client: </span>
                      <span className="project-value">IQC Company</span>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <span className="project-key">Date: </span>
                      <span className="project-value">15 June 2023</span>
                    </Grid>
                    <Grid item xs={6} md={8}>
                      <span className="project-key">Services: </span>
                      <span className="project-value">Web Application</span>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <span className="project-key">Budget: </span>
                      <span className="project-value">$10000 </span>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ mt: 5 }}>
                  <button className="portfolio-project-btn">
                    View Project
                  </button>
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{ background: "#121415", my: 5 }} />
            <Box>
              <p className="project-name">Technology</p>
              <Box sx={{ flexGrow: 1, mt: 7, mb: 5 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3, lg: 5 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {features.map((item) => (
                    <Grid item xs={2} sm={2} md={2} key={item.id}>
                      <Paper
                        elevation={3}
                        sx={{
                          py: 3,
                          bgcolor: "#202327",
                          boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                        }}
                      >
                        <Box
                          className="project-technologies"
                          style={{ textAlign: "center" }}
                        >
                          <figure>
                          <img
                            style={{ width: "50px", textAlign: "center" }}
                            src={item.icon}
                            alt=""
                          />
                          </figure>
                          <p className="features-item-title">{item.title}</p>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <p className="project-name">What They Do? </p>
              <p className="project-description">
                A leading online platform connecting businesses with experts
                across various industries. Our mission is to simplify the
                process of finding and hiring top talent for any project, big or
                small. At ExpertHire, we believe in the power of freelancing and
                the value it brings to both businesses and experts. We are
                committed to providing a user-friendly platform that makes it
                easy for businesses to find the perfect expert for their
                project, and for experts to showcase their skills and connect
                with potential clients.
              </p>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalTest;
