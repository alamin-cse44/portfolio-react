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

import "./Poster.scss";

const Poster = () => {
  const [text] = useTypewriter({
    words: ["Software Developer", "Designer", "Photographer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <Box className="poster" sx={{ flexGrow: 1, mx: 5, mt:15 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} lg={6}>
          <p className="poster-welcome">Welcome to my world</p>
          <Typography
            sx={{
              fontSize: {
                lg: 60,
                md: 50,
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
                lg: 50,
                md: 50,
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
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <Grid container spacing={5} sx={{ mt: 5 }}>
            <Grid item xs={12} md={6} lg={6}>
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
          className="poster-imgGrid"
        >
          <Box
            style={{
              backgroundColor: "#202327",
              boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
              width: "500px",
              height: "450px",
            }}
          ></Box>
          {/* <img className="poster-imgGrid-img" width='450' height='500' src={imge} alt="" /> */}
        </Grid>
      </Grid>
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Box>
  );
};

export default Poster;
