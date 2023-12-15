import React, { useState } from "react";
import { Divider } from "@mui/material";
import { Box, Tab, Tabs } from "@mui/material";

import Education from "./education/Education";
import ProfessionalSkills from "./professional-skills/ProfessionalSkills";
import Experience from "./experience/Experience";

import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";

import "./Resume.scss";

const Resume = () => {
  const [route, setRoute] = useState("education");

  return (
    <Box id="resume" sx={{ mx: 2, pt: 10 }}>
      <Box sx={{ textAlign: "center" }}>
        <Title1 title="1+ YEARS OF EXPERIENCE" />
        <Title2 title="My Resume" />
      </Box>
      <Tabs
        value={route}
        onChange={(e, newValue) => setRoute(newValue)}
        sx={{
          mx: "auto",
          my: 5,
          width: "fit-content",
          // boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          // borderRadius: "50px",
          minWidth: {
            xs: "90vw",
            sm: "530px",
          },
          maxWidth: "90vw",
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-between",
          },
          "& .MuiTabs-flexContainer > *": {
            flex: 1,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Tab
          value={"education"}
          label={"Education"}
          sx={{
            textTransform: "none",
            fontSize: { xs: "0.8rem", md: "1.5rem" },
            fontWeight: "bold",
            // borderRadius: "50px",
            "&:hover": {
              opacity: 1,
              color: "#333",
            },
            "&.Mui-selected": {
              color: "#fff",
              background: "#ff014f",
            },
            "&.Mui-focusVisible": {
              backgroundColor: "#d1eaff",
            },
          }}
        />
        <Tab
          value={"experience"}
          label={"Experience"}
          sx={{
            textTransform: "none",
            fontSize: { xs: "0.8rem", md: "1.5rem" },
            fontWeight: "bold",
            // borderRadius: "50px",
            "&:hover": {
              opacity: 1,
              color: "#333",
            },
            "&.Mui-selected": {
              color: "#fff",
              background: "#ff014f",
            },
            "&.Mui-focusVisible": {
              backgroundColor: "#d1eaff",
            },
          }}
        />
      </Tabs>
      {route === "education" ? <Education /> : <Experience />}
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Box>
  );
};

export default Resume;
