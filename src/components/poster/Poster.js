import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebIcon from "@mui/icons-material/Web";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { Avatar, Divider, Stack, Typography } from "@mui/material";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import ar from "../../images/ar.png";
import profile from "../../images/profile.jpg";

import "./Poster.scss";

const Poster = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer",
      "React.js Developer",
      "Node.js Developer",
      "Mern Stack Dev"
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <Box id="poster" className="poster" sx={{ flexGrow: 1, mx: 5, pt: 15 }}>
      <Grid
        sx={{ display: "flex", alignItems: "center" }}
        container
        spacing={5}
      >
        <Grid item xs={12} md={6} lg={6}>
          <p className="poster-welcome">Welcome to my world</p>
          <Typography
            sx={{
              fontSize: {
                lg: 55,
                md: 55,
                sm: 30,
                xs: 30,
              },
              mt: 3,
              fontWeight: "800",
              color: "#c4cfde",
            }}
          >
            <span>Hello, I'm</span>{" "}
            <span className="poster-heading-red">Al Amin</span>
          </Typography>

          <Typography
            sx={{
              fontSize: {
                sm: 28,
                xs: 20,
              },
              mt: 1,
              fontWeight: "800",
              color: "#c4cfde",
            }}
          >
            <span>a, </span>
            <span>{text}</span>
            <span style={{ color: "red" }}>
              <Cursor />
            </span>
          </Typography>

          <p className="poster-description">
            {/* I do code for software dvelopment. I can handle both client side and
            sever side of a software. I'm used to React.js library for frontend
            development and firebase for authentication system. Also, for the
            behind the scenes data storage and proecessing I have skilled on
            Node.js (Express.js framework and mongoose/mongodb as database). */}
            I have completed my Bachelor of Science degree in computer science
            and engineering from the University of Asia Pacific, Bangladesh. I'm
            a positive, enthusiastic and competent web developer. I have a
            diverse range of programming skills like : JavaScript, Bootstrap,
            Material-UI, React.js, Node.js Firebase , Heroku, MongoDB, C, C++,
            Python, Mongoose, MySql. I have extensive experience working both
            alone and as a part of a team to implement a project. I’m time
            sensitive and like to take on challenging web development projects
            by the requirements of clients. I have working experience at IQC
            company in France from November 2022 to May 2023 as a frontend
            developer. At present I’m working for Brogrammers Lab as a frontend
            Developer. I take my work as a developer and programmer seriously
            and surely I will update myself for the rapidly changing industry.
          </p>
          <Grid container spacing={5} sx={{ mt: 5 }}>
            <Grid item xs={12} md={6} lg={6}>
              <p className="poster-welcome">FIND WITH ME</p>
              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <a
                  href="https://www.facebook.com/profile.php?id=100004690398384"
                  target="blank"
                >
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
                </a>
                <a href="https://github.com/alamin-cse44" target="blank">
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
                </a>
                <a
                  href="https://www.linkedin.com/in/rehan-mohammed-alamin-1b4587216/"
                  target="blank"
                >
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
                </a>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <p className="poster-welcome">BEST SKILL ON</p>
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
                  <WebIcon style={{ fontSize: "35px" }} />
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
                  <JavascriptIcon style={{ fontSize: "50px" }} />
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
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img src={profile} alt="profile" /> */}
          <Avatar src={profile} sx={{width: "60%", height: "60%", border: "2px solid #ff014f"}} />
        </Grid>
      </Grid>
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Box>
  );
};

export default Poster;
