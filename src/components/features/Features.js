import { Box, Divider, Grid, Paper, Typography } from "@mui/material";

import webApp from '../../images/web-app.png';
import frontendApp from '../../images/front-end-app.png';
import backendApp from '../../images/back-end-app.png';
import mernStackApp from '../../images/mern-stack-app.png';
import fullStackApp from '../../images/full-stack-app.png';
import javaScriptApp from '../../images/java-script-app.png';

import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";

import "./Features.scss";

const features = [
  {
    id: 1,
    icon: webApp,
    title: "Web App Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 2,
    icon: frontendApp,
    title: "Front-End Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 3,
    icon: backendApp, 
    title: "Back-End Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 4,
    icon: mernStackApp,
    title: "Mern Stack Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 5,
    icon: fullStackApp,
    title: "Full Stack Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 6,
    icon: javaScriptApp,
    title: "JavaScript Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
];

const Features = () => {
  return (
    <Box id="features" className="features" sx={{ mx: 3, mt: 10 }}>
      <Title1 title="FEATURES" />
      <Title2 title="What I Do" />

      <Box sx={{ flexGrow: 1, mt: 7 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2, lg: 4 }}
          columns={{ xs: 4, md: 8, lg: 12 }}
        >
          {features.map((item) => (
            <Grid item xs={4} sm={4} md={4} key={item.id}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: "#202327",
                  boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                  borderRadius: '15px',
                  height: '320px'
                }}
              >
                <Box className="features-items">
                  <img src={item.icon} style={{borderRadius: '5px'}} width={70} alt="" />
                  <Typography
                    sx={{
                      fontSize: {
                        lg: 26,
                        md: 26,
                        sm: 18,
                        xs: 18,
                      },
                      mt: 3,
                      letterSpacing: '1px',
                      fontWeight: "700",
                      color: "#c4cfde",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        lg: 20,
                        md: 20,
                        sm: 15,
                        xs: 15,
                      },
                      mt: 3,
                      letterSpacing: '2px',
                      fontWeight: "500",
                      color: "#c4cfde",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Box>
  );
};

export default Features;
