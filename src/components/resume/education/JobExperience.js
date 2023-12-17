import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";

const jobExperience = [
  {
    id: 1,
    degree: "Frontend Developer",
    institution: "Brogrammers Lab(October 2022 - Present)",
    grade: "Dhaka",
    description:
    "Frontend hiring process is an important part of our age. Brogrammers lab care deeply about their teams and the people who make them up."
    },
  {
    id: 2,
    degree: "Frontend Developer",
    institution: "IQC(November 2022 - May 2023)",
    grade: "France",
    description:
      "Expert hiring process is an important part of our age. IQC Security Consultancy care deeply about their teams and the people who make them up."
    },
  {
    id: 3,
    degree: "Backend Developer",
    institution: "3WIP(February 2023 - April)",
    grade: "India",
    description:
    "Backend hiring process is an important part of our age. 3WIP care deeply about their teams and the people who make them up."
    },
  
];

const JobExperience = () => {
  return (
    <>
      {jobExperience.map((item) => (
        <Grid item xs={12} key={item.id}>
          <Paper 
          className="education-items"
            elevation={3}
            sx={{
              p: 3,
              bgcolor: "#202327",
              boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
              borderRadius: '10px',
              border: "1px solid #ff014f"
            }}
          >
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={10}>
                    <Typography
                      sx={{
                        fontSize: {
                          sm: 20,
                          xs: 16,
                        },
                        fontWeight: "700",
                        color: "#c4cfde",
                      }}
                    >
                      {item.degree}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          sm: 18,
                          xs: 14,
                        },
                        mt: 2,
                        fontWeight: "500",
                        color: "#696E77",
                      }}
                    >
                      {item.institution}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} lg={2} sx={{ mt: 2 }}>
                    <button
                      style={{
                        backgroundColor: "#202327",
                        boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                        borderRadius: '5px',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        border: 'none',
                        fontSize: '15px',
                        color: '#ff014f',
                        letterSpacing: '2px'
                      }}
                    >
                      {item.grade}
                    </button>
                  </Grid>
                </Grid>
              </Box>
              <Box></Box>
              <Divider sx={{ background: "#121415", my: 3 }} />
              <Typography
                sx={{
                  fontSize: {
                    sm: 18,
                    xs: 16,
                  },
                  textAlign: "justify",
                  color: "#696E77",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default JobExperience;
