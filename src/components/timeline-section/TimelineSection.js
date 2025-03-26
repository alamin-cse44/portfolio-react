import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";

const timelineData = [
  {
    category: "EDUCATION",
    items: [
      {
        role: "B.Sc in CSE",
        title: "University Of Asia Pacific",
        date: "December 2022",
        gpa: "GPA - 3.63/4",
      },
      {
        role: "Higher School Certificate",
        title: "Chatkhil Government College",
        date: "April 2017",
        gpa: "GPA - 4.08/5",
      },
    ],
  },
  {
    category: "EXPERIENCE",
    items: [
      {
        role: "Software Developer",
        title: "Brogrammers Lab",
        date: "October 2023 - Present",
      },
      {
        role: "Frontend Developer",
        title: "IQC Security Consultancy",
        date: "December 2022 - September 2023",
      },
    ],
  },
  {
    category: "Training",
    items: [
      {
        role: "Level - 1",
        title: "Complete Web Development",
        platform: "Programing Hero",
        date: "ID : WEB4-1552",
      },
      {
        role: "Level - 2",
        title: "Next Level Web Development",
        platform: "Programing Hero",
        // date: "ID : WEB4-1552",
      },
      {
        role: "Volunteer",
        title: "World ICPC - 2022",
        date: "November 2022",
      },
    ],
  },
];

const TimelineSection = () => {
  return (
    <Container id="resume" sx={{ pt: 10 }}>
      <Box sx={{ textAlign: "center" }}>
        <Title1 title="1.5+ YEARS OF EXPERIENCE" />
        <Title2 title="My Resume" />
      </Box>
      <Box
        sx={{
          backgroundColor: "#0e0d1a",
          padding: "40px",
          borderRadius: "12px",
          color: "#fff",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
          mt: 8,
        }}
      >
        <Grid container spacing={4}>
          {timelineData.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Typography
                variant="h6"
                sx={{
                  color: "#ff014f",
                  fontWeight: "bold",
                  marginBottom: "20px",
                //   textAlign: "center",
                }}
              >
                {section.category}
              </Typography>

              <Box sx={{ position: "relative", paddingLeft: "20px" }}>
                {section.items.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      position: "relative",
                      paddingBottom:
                        idx !== section.items.length - 1 ? "30px" : "0px",
                    }}
                  >
                    {/* Connecting Line */}
                    {idx !== section.items.length - 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          left: "-13px",
                          top: "12px",
                          height: "calc(100% + 2px)",
                          width: "1px",
                          backgroundColor: "#ff014f",
                        }}
                      />
                    )}

                    {/* Timeline Dot */}
                    <CircleIcon
                      sx={{
                        fontSize: 15,
                        position: "absolute",
                        left: "-20px",
                        top: "7px",
                        color: "#ff014f",
                      }}
                    />

                    {/* Content */}
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#aaa" }}>
                      {item.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mt:0.5 }}>
                      {item?.gpa}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mt:0.5 }}>
                      {item?.platform}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#666" }}>
                      {item.date}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TimelineSection;
