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

import "./Poster.scss";

const Poster = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer",
      "React.js Developer",
      "Node.js Developer",
      "Mern Stack Dev",
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
            I am a highly motivated and detail-oriented Web Developer with a
            Bachelor of Science in Computer Science and Engineering from the
            University of Asia Pacific, Bangladesh. With a strong passion for
            building scalable and efficient web applications, I specialize in
            modern frontend and backend technologies. My expertise includes
            JavaScript, TypeScript, React.js, Redux, Next.js, Node.js,
            Express.js, Material UI, Tailwind CSS, Firebase, MongoDB, Mongoose,
            MySQL, Sequelize, OAuth, JWT, and Python, among others. I have
            hands-on experience working both independently and collaboratively
            in dynamic environments, ensuring that projects are delivered
            efficiently while meeting client requirements. I previously worked
            as a Frontend Developer at IQC, France (Nov 2022 – May 2023) and am
            currently working at Brogrammers Lab as a Software Developer. My
            ability to adapt to evolving technologies and my commitment to
            continuous learning allow me to stay ahead in the fast-paced web
            development industry. I thrive on solving complex problems and
            taking on challenging projects that push the boundaries of modern
            web solutions. I am eager to contribute my technical expertise and
            problem-solving skills to impactful projects, ensuring optimal
            performance and a seamless user experience. 🚀
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
                  href="https://www.linkedin.com/in/al-amin-1b4587216/"
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
              <p className="poster-welcome">MY RESUME</p>
              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <a
                  href="https://drive.google.com/file/d/1gh2b05M1c35maWEWmOePFYKR-S9OevzQ/view?usp=sharing"
                  target="blank"
                >
                  <Avatar
                    className="poster"
                    sx={{
                      width: "70px",
                      height: "60px",
                      bgcolor: "#202327",
                      boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                    }}
                    variant="rounded"
                  >
                    <RemoveRedEyeIcon style={{ fontSize: "40px" }} />
                  </Avatar>
                </a>

                <a
                  href="https://www.linkedin.com/in/al-amin-1b4587216/"
                  target="blank"
                >
                  <Avatar
                    className="poster"
                    sx={{
                      width: "70px",
                      height: "60px",
                      bgcolor: "#202327",
                      boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                    }}
                    variant="rounded"
                  >
                    <DownloadIcon style={{ fontSize: "40px" }} />
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
