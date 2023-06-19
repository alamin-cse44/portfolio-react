import * as React from "react";
import { Box, Typography } from "@mui/material";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import Education from "./education/Education";
import ProfessionalSkills from "./professional-skills/ProfessionalSkills";

import "./Resume.scss";
import Experience from "./experience/Experience";

const Resume = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="resume" sx={{ mx: 2, mt: 10 }}>
      <Box className="resume-top">
        <p className="resume-top-text1">1+ YEARS OF EXPERIENCE</p>
        {/* <p className="resume-top-text2">My Resume</p> */}
        <Typography
          className="resume-top-text2"
          sx={{
            fontSize: {
              lg: 60,
              md: 50,
              sm: 45,
              xs: 40,
            },
          }}
        >
          My Resume
        </Typography>
      </Box>

      <Box sx={{ width: "100%", mt: 10 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              className="resume-tablist"
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab
                style={{
                  fontWeight: "900",
                  fontSize: "17px",
                  marginRight: "25px",
                }}
                label="Education"
                value="1"
              />
              <Tab
                style={{
                  fontWeight: "900",
                  fontSize: "17px",
                  marginRight: "25px",
                }}
                label="Professional Skills"
                value="2"
              />
              <Tab
                style={{
                  fontWeight: "900",
                  fontSize: "17px",
                }}
                label="Experience"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Education />
          </TabPanel>
          <TabPanel value="2">
            <ProfessionalSkills />
          </TabPanel>
          <TabPanel value="3">
            <Experience />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default Resume;
