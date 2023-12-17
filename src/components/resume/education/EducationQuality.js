import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";

const educations = [
  {
    id: 1,
    degree: "BSc in Computer Science & Engineering",
    institution: "University Of Asia Pacific(2018-2022)",
    grade: "3.63/4",
    description:
      "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
  },
  {
    id: 2,
    degree: "Higher School Certificate",
    institution: "Chatkhil Government College(2015-2016)",
    grade: "4.08/5",
    description:
      "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    institution: "Omar Ali High School(2012-2013)",
    grade: "4.75/5",
    description:
      "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.",
  },
];


const EducationQuality = () => {
  return (
    <>
      {educations.map((item) => (
        <Grid item xs={12} key={item.id}>
          <Paper 
          className="education-items"
            elevation={3}
            sx={{
              p: 3,
              bgcolor: "#202327",
              boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
              borderRadius: '10px',
              border: "1px solid #ff014f",
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

export default EducationQuality;
