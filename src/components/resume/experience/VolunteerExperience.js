import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";

const experience = [
  {
    id: 1,
    degree: "World ICPC - 2022",
    institution: "University Of Asia Pacific",
    grade: "Dhaka",
    description:
      "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
    },
  {
    id: 2,
    degree: "Ada Lovelace - 2022",
    institution: "University Of Asia Pacific",
    grade: "Dhaka",
    description:
    "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
    },
  {
    id: 3,
    degree: "President",
    institution: "Alokito Kulsree, Chatkhil",
    grade: "Noakhali",
    description:
    "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
    },
];

const VolunteerExperience = () => {
  return (
    <>
      {experience.map((item) => (
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
                  <Grid item xs={12} lg={9.5}>
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
                          fontSize: {
                            sm: 18,
                            xs: 14,
                          },
                        },
                        mt: 2,
                        fontWeight: "500",
                        color: "#696E77",
                      }}
                    >
                      {item.institution}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} lg={2.5} sx={{ mt: 2}}>
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

export default VolunteerExperience;
