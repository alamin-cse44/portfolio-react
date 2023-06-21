import * as React from "react";
import { Box, Divider } from "@mui/material";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import Education from "./education/Education";
import ProfessionalSkills from "./professional-skills/ProfessionalSkills";
import Experience from "./experience/Experience";

import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";

import "./Resume.scss";

const Resume = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <Box className="resume" sx={{ mx: 2, mt: 10 }}>
      <Box sx={{textAlign: 'center'}}>
        <Title1 title="1+ YEARS OF EXPERIENCE" />
        <Title2 title="My Resume" />
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
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Box>
  );
};

export default Resume;
