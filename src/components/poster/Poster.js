import * as React from "react";
import Grid from "@mui/material/Grid";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Avatar, Container, Divider, Stack, Typography } from "@mui/material";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import profile from "../../images/profile.jpg";
import resume from "../../images/resume/Al_Amin_Software_Developer.pdf";

import "./Poster.scss";

const Poster = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer",
      "React.js Developer",
      "Node.js Developer",
      "Next.js Developer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <Container id="poster" className="poster" sx={{ flexGrow: 1, pt: 15 }}>
      <Grid
        sx={{ display: "flex", alignItems: "center" }}
        container
        spacing={5}
      >
        <Grid item xs={12} md={6} lg={6}>
          {/* <p className="poster-welcome">Welcome to my world</p> */}
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
            Graduated in Computer Science and Engineering from the University of
            Asia Pacific, I am a passionate software engineer committed to
            delivering standard solutions. I strive to apply deep technical
            expertise to develop efficient and scalable software.
          </p>
          <Grid container spacing={5} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6} lg={6}>
              <p className="poster-welcome">FIND WITH ME</p>
              <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
                <a
                  href="https://www.facebook.com/profile.php?id=100004690398384"
                  target="blank"
                >
                  <Avatar
                    className="poster-socialIcon"
                    sx={{
                      width: "50px",
                      height: "50px",
                      bgcolor: "#202327",
                      boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                    }}
                    variant="square"
                  >
                    <FacebookIcon style={{ fontSize: "40px" }} />
                  </Avatar>
                </a>
                <a href="https://github.com/alamin-cse44" target="blank">
                  <Avatar
                    className="poster-socialIcon"
                    sx={{
                      width: "50px",
                      height: "50px",
                      bgcolor: "#202327",
                      boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                    }}
                    variant="rounded"
                  >
                    <GitHubIcon style={{ fontSize: "40px" }} />
                  </Avatar>
                </a>
                <a
                  href="https://www.linkedin.com/in/al-amin-1b4587216/"
                  target="blank"
                >
                  <Avatar
                    className="poster-socialIcon"
                    sx={{
                      width: "50px",
                      height: "50px",
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
              <p className="poster-welcome">MY RESUME</p>
              <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
                <a
                  href="https://drive.google.com/file/d/1I9EMcWFe6qiOFgUWb5jNptHlcWyU7-Ej/view?usp=sharing"
                  target="blank"
                >
                  <Avatar
                    className="poster"
                    sx={{
                      width: "50px",
                      height: "50px",
                      bgcolor: "#202327",
                      boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                    }}
                    variant="rounded"
                  >
                    <RemoveRedEyeIcon style={{ fontSize: "30px" }} />
                  </Avatar>
                </a>

                <a href={resume} download="Al_Amin_Software_Developer.pdf">
                  <Avatar
                    className="poster"
                    sx={{
                      width: "50px",
                      height: "50px",
                      bgcolor: "#202327",
                      boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                    }}
                    variant="rounded"
                  >
                    <DownloadIcon style={{ fontSize: "30px" }} />
                  </Avatar>
                </a>
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
          <Avatar
            src={profile}
            sx={{ width: "60%", height: "60%", border: "2px solid #ff014f" }}
          />
        </Grid>
      </Grid>
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Container>
  );
};

export default Poster;
