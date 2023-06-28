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

import "./Poster.scss";

const Poster = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer",
      "Designer",
      "React Developer",
      "Node.js Developer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <Box id="poster" className="poster" sx={{ flexGrow: 1, mx: 5, mt: 15 }}>
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
                lg: 45,
                md: 45,
                sm: 28,
                xs: 28,
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
            I do code for software dvelopment. I can handle both client side and
            sever side of a software. I'm used to React.js library for frontend
            development and firebase for authentication system. Also, for the
            behind the scenes data storage and proecessing I have skilled on
            Node.js (Express.js framework and mongoose/mongodb as database).
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
          <img src={ar} alt="" />
        </Grid>
      </Grid>
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Box>
  );
};

export default Poster;
