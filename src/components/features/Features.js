import {  Box, Divider, Grid, Paper } from "@mui/material";

import WebIcon from "@mui/icons-material/Web";

import "./Features.scss";

const features = [
  {
    id: 1,
    icon: <WebIcon style={{ fontSize: "50px" }} />,
    title: "App Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 2,
    icon: <WebIcon style={{ fontSize: "50px" }} />,
    title: "App Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 3,
    icon: <WebIcon style={{ fontSize: "50px" }} />,
    title: "App Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 4,
    icon: <WebIcon style={{ fontSize: "50px" }} />,
    title: "App Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 5,
    icon: <WebIcon style={{ fontSize: "50px" }} />,
    title: "App Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: 6,
    icon: <WebIcon style={{ fontSize: "50px" }} />,
    title: "App Development",
    description:
      "We’ll handle everything from to app development process until it is time to make your project live.",
  },
];

const Features = () => {
  return (
    <Box className="features" sx={{ mx: 5, mt: 10 }}>
      <p className="features-title">FEATURES</p>
      <p className="features-heading">What I Do</p>

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
                }}
              >
                <Box className="features-items">
                  <span style={{ color: "#ff014f" }}>{item.icon}</span>
                  <p className="features-item-title">{item.title}</p>
                  <p className="features-item-description">
                    {item.description}
                  </p>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider sx={{background: '#121415', mt:15}} />
    </Box>
  );
};

export default Features;
