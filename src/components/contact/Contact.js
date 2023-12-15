import { Box, Divider, Typography, Grid, Avatar, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";
import ContactForm from "./ContactForm";

import contact from "../../images/contact.png";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "./Contact.scss";

const Contact = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Box id="contact" className="contact" sx={{ mx: 3, pt: 10 }}>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fpsLimit: 50,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 30,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> */}
      
      <Box sx={{ textAlign: "center" }}>
        <Title1 title="Contact" />
        <Title2 title="Contact With Me" />
      </Box>
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={7}>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              className="portfolio-project-card"
              sx={{
                boxShadow: "0px 3px 10px rgb(0 0 0/ 0.99)",
                borderRadius: "25px",
                bgcolor: "#202327",
                p: 3,
              }}
            >
              <CardMedia
                sx={{ height: 240, borderRadius: "15px" }}
                className="portfolio-project-image"
                image={contact}
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
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  Al Amin
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: 20,
                      md: 20,
                      sm: 15,
                      xs: 15,
                    },
                    mt: 1,
                    letterSpacing: "3px",
                    fontWeight: "500",
                    color: "#c4cfde",
                  }}
                >
                  Software Developer
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 20,
                    },
                    mt: 2,
                    textAlign: "justify",
                    fontWeight: "600",
                    color: "#696E77",
                  }}
                >
                  I am available for freelance work. Connect with me via email
                  and call in to my account.
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      lg: 20,
                      md: 20,
                      sm: 18,
                      xs: 18,
                    },
                    mt: 2,
                    fontWeight: "600",
                  }}
                >
                  <span style={{ color: "#fff" }}>Phone : </span>
                  <span style={{ color: "#c4cfde" }}>01643530690</span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: 20,
                      md: 20,
                      sm: 15,
                      xs: 15,
                    },
                    mt: 2,
                    fontWeight: "600",
                  }}
                >
                  <span style={{ color: "#fff" }}>Email : </span>
                  <span style={{ color: "#c4cfde" }}>
                    alamincse44@gmail.com
                  </span>
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={12} lg={12}>
                    <p className="poster-welcome">FIND WITH ME</p>
                    <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                      <Avatar
                        className="poster-socialIcon"
                        sx={{
                          width: "70px",
                          height: "60px",
                          bgcolor: "#202327",
                          boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                        }}
                        variant="square"
                      >
                        <FacebookIcon style={{ fontSize: "30px" }} />
                      </Avatar>
                      <Avatar
                        className="poster-socialIcon"
                        sx={{
                          width: "70px",
                          height: "60px",
                          bgcolor: "#202327",
                          boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                        }}
                        variant="rounded"
                      >
                        <GitHubIcon style={{ fontSize: "30px" }} />
                      </Avatar>
                      <Avatar
                        className="poster-socialIcon"
                        sx={{
                          width: "70px",
                          height: "60px",
                          bgcolor: "#202327",
                          boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                        }}
                        variant="rounded"
                      >
                        <LinkedInIcon style={{ fontSize: "40px" }} />
                      </Avatar>
                    </Stack>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Box>
  );
};

export default Contact;
