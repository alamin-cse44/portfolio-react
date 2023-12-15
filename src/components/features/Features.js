import { Box, Divider, Grid, Paper, Typography } from "@mui/material";

import WebIcon from '@mui/icons-material/Web';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';

import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";

import "./Features.scss";

const features = [
  {
    id: 1,
    icon: <WebIcon sx={{color: "#c4cfde", fontSize: {xs: "25px", sm: "40px"}}} />,
    title: "Web App Development",
    description:
      "As a Web Developer, I specialize in crafting dynamic and visually appealing online experiences tailored to meet your unique needs. With a keen focus on both frontend and backend technologies, I bring a versatile skill set to the table.On the frontend, I use modern frameworks such as React and employ responsive design principles, ensuring your website looks and functions seamlessly across various devices. On the backend, I leverage technologies like Node.js and Express.js to build scalable and robust server-side solutions.For database management, I am proficient in MongoDB and use tools like Mongoose for effective data modeling. Authentication and user management are handled securely with Firebase, ensuring a smooth and reliable experience for your users.", 
  },
  {
    id: 2,
    icon: <ImportantDevicesIcon sx={{color: "#c4cfde", fontSize: {xs: "25px", sm: "40px"}}} />,
    title: "Front-End Development",
    description:
      "As a Frontend Developer, I specialize in crafting visually stunning and highly responsive user interfaces using cutting-edge technologies. My toolkit includes JavaScript for dynamic functionality, React and Next.js for seamless component-based architecture, and Tailwind CSS for efficient styling. I leverage the power of Material UI to create modern and intuitive designs, while also incorporating Sass for enhanced styling capabilities. With a keen eye for user experience, I ensure that websites and applications not only meet but exceed client expectations. Additionally, I have proficiency in Bootstrap for rapid development, allowing me to deliver sleek and polished frontend solutions that elevate your digital presence.",
  },
  {
    id: 3,
    icon: <StorageIcon sx={{color: "#c4cfde", fontSize: {xs: "25px", sm: "40px"}}} />,
    title: "Back-End Development",
    description:
      "As a Backend Developer, I specialize in building robust and scalable server-side solutions to power your applications. My expertise lies in utilizing cutting-edge technologies, including Node.js and Express.js, to create efficient and high-performance backend systems. I leverage MongoDB with Mongoose for seamless database interactions, ensuring data integrity and optimal performance. For secure user authentication, I implement Firebase, providing a reliable and streamlined authentication process. My focus extends beyond just coding I architect backend solutions that align with your project's goals, emphasizing scalability, reliability, and security.",
  },
  {
    id: 4,
    icon: <CodeIcon sx={{color: "#c4cfde", fontSize: {xs: "25px", sm: "40px"}}} />,
    title: "Mern Stack Development",
    description:
      "As a MERN (MongoDB, Express.js, React, Node.js) Stack Developer, I specialize in delivering end-to-end solutions for your web applications. My expertise spans the entire development cycle, from designing interactive and user-friendly interfaces using React to building scalable and efficient backend systems with Node.js and Express.js. I harness the power of MongoDB, using Mongoose for data modeling and management, to ensure a robust and flexible database architecture.By seamlessly integrating these technologies, I create dynamic and responsive web applications that provide an immersive user experience. Additionally, I prioritize security, scalability, and maintainability to ensure your project not only meets current needs but can evolve with your business.",
  },
];

const Features = () => {
  return (
    <Box id="features" className="features" sx={{ mx: 3, pt: 10 }}>
      <Title1 title="FEATURES" />
      <Title2 title="What I Do?" />

      <Box sx={{ flexGrow: 1, mt: { xs: 7, sm: 15 } }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2, lg: 4 }}
          columns={{ xs: 4, md: 8, lg: 12 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {features.map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <Paper
                elevation={3}
                sx={{
                  p: 2.5,
                  bgcolor: "#202327",
                  boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                  borderRadius: "15px",
                  // height: "320px",
                  border: "1px solid red",
                  ...(item.id === 2 && {
                    mt: {
                      // sm: -5,
                    },
                  }),
                }}
              >
                <Box
                  className="features-items"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {item.icon}
                  <Typography
                    sx={{
                      fontSize: {
                        sm: 18,
                        xs: 18,
                      },
                      mt: 2,
                      letterSpacing: "1px",
                      fontWeight: "700",
                      color: "#ff014f",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        sm: 16,
                        xs: 12,
                      },
                      mt: 2,
                      letterSpacing: "1px",
                      fontWeight: "500",
                      color: "#c4cfde",
                      textAlign: "justify"
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Box>
  );
};

export default Features;
