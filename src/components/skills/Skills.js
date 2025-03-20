import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";

import {
  SiJavascript,
  SiReact,
  SiFigma,
  SiAdobeXd,
  SiWordpress,
  SiSketch,
} from "react-icons/si";
import ts from "../../images/skills/ts.webp";
import { useEffect, useState } from "react";
import axios from "axios";

// const skills = [
//   { name: "JavaScript", icon: <SiJavascript size={40} /> },
//   { name: "React", icon: <SiReact size={40} /> },
//   { name: "Figma", icon: <SiFigma size={40} /> },
//   { name: "WordPress", icon: <SiWordpress size={40} /> },
//   { name: "Sketch", icon: <SiSketch size={40} /> },
// ];

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/skills?limit=${30}`); 
        // console.log("response ",response);
        setSkills(response?.data?.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    
    fetchSkills();
  }, []);

  // console.log(skills);
  return (
    <Container id="skills" className="features" sx={{ pt: 10 }}>
      <Box textAlign={"center"}>
        <Title1 title="Skills" />
        <Title2 title=" My Skills" />
      </Box>

      <Box sx={{ mt: 10 }}>
        <Grid container spacing={3} justifyContent="center">
          {skills?.map((skill, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  background: "#1a1a1d",
                  color: "#fff",
                  textAlign: "center",
                  p: 1,
                  width: 150,
                  borderRadius: 5,
                  // boxShadow: 3,
                    transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    border: "1px solid #ff014f",
                    background: "linear-gradient(145deg, #3a3a3d, #1a1a1d)",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                <CardContent>
                  {/* {skill.icon} */}
                  <img
                    src={skill?.icon}
                    alt="ts"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {skill?.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;
