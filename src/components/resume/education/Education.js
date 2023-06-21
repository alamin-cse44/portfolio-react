import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import EducationQuality from "./EducationQuality";
import JobExperience from "./JobExperience";

import "./Education.scss";

const Education = () => {
  return (
    <Box>
      <Box className="education" sx={{ flexGrow: 1, mt:3 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              sx={{
                fontSize: {
                  lg: 40,
                  md: 35,
                  sm: 25,
                  xs: 25,
                },
                fontWeight: "800",
                color: "#c4cfde",
              }}
            >
              Education Quality
            </Typography>
            <Box sx={{ flexGrow: 1, mt: 5 }}>
              <Grid container spacing={7}>
                <EducationQuality />
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography
              className="education-heading"
              sx={{
                fontSize: {
                  lg: 40,
                  md: 35,
                  sm: 25,
                  xs: 25,
                },
                fontWeight: "800",
                color: "#c4cfde",
              }}
            >
              Job Experience
            </Typography>
            <Box sx={{ flexGrow: 1, mt: 5 }}>
              <Grid container spacing={7}>
                <JobExperience />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Education;
