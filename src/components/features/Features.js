import { useState } from "react";

import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import { FaMinus, FaPlus } from "react-icons/fa";

import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";

import "./Features.scss";

const Features = () => {
  const [show, setShow] = useState("one");
  const handleDisplay = (value) => {
    setShow(value);
  };
  return (
    <Container id="features" className="features" sx={{ pt: 10 }}>
      <Box textAlign={"center"}>
        <Title1 title="FEATURES" />
        <Title2 title="What I Do?" />
      </Box>
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={12} sm={8} md={8}>
            {/* question one */}
            <Box
              sx={{
                borderRadius: "15px",
                bgcolor: "#202327",
                boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                p: 3,
                color: "#c4cfde",
                ...(show === "one" && {
                  border: "1px solid #ff014f",
                }),
              }}
            >
              {show === "one" ? (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDisplay("")}
                  >
                    <Typography
                      sx={{
                        ...(show === "one" && {
                          fontWeight: "bold",
                          fontSize: {
                            xs: "15px",
                            sm: "18px",
                          },
                        }),
                      }}
                    >
                      Web App Development
                    </Typography>
                    <FaMinus />
                  </Box>
                  <Typography
                    sx={{
                      mt: 3,
                      textAlign: "justify",
                      fontSize: { xs: "14px", sm: "16px" },
                      letterSpacing: 1,
                    }}
                    variant="body2"
                  >
                    As a Web Developer, I specialize in crafting dynamic and
                    visually appealing online experiences tailored to meet your
                    unique needs. With a keen focus on both frontend and backend
                    technologies, I bring a versatile skill set to the table.On
                    the frontend, I use modern frameworks such as React and
                    employ responsive design principles, ensuring your website
                    looks and functions seamlessly across various devices. On
                    the backend, I leverage technologies like Node.js and
                    Express.js to build scalable and robust server-side
                    solutions.For database management, I am proficient in
                    MongoDB and use tools like Mongoose for effective data
                    modeling. Authentication and user management are handled
                    securely with Firebase, ensuring a smooth and reliable
                    experience for your users.
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDisplay("one")}
                >
                  <Typography
                    sx={{
                      color: "#ff014f",
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                      },
                    }}
                  >
                    Web App Development
                  </Typography>
                  <FaPlus color="#ff014f" />
                </Box>
              )}
            </Box>

            {/* question two */}
            <Box
              sx={{
                borderRadius: "15px",
                bgcolor: "#202327",
                boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                color: "#c4cfde",
                p: 3,
                mt: 2,
                ...(show === "two" && {
                  border: "1px solid #ff014f",
                }),
              }}
            >
              {show === "two" ? (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDisplay("")}
                  >
                    <Typography
                      sx={{
                        ...(show === "two" && {
                          fontWeight: "bold",
                          fontSize: {
                            xs: "15px",
                            sm: "18px",
                          },
                        }),
                      }}
                    >
                      Front-End Development
                    </Typography>
                    <FaMinus />
                  </Box>
                  <Typography
                    sx={{
                      mt: 3,
                      textAlign: "justify",
                      fontSize: { xs: "14px", sm: "16px" },
                      letterSpacing: 1,
                    }}
                    variant="body2"
                  >
                    As a Frontend Developer, I specialize in crafting visually
                    stunning and highly responsive user interfaces using
                    cutting-edge technologies. My toolkit includes JavaScript
                    for dynamic functionality, React and Next.js for seamless
                    component-based architecture, and Tailwind CSS for efficient
                    styling. I leverage the power of Material UI to create
                    modern and intuitive designs, while also incorporating Sass
                    for enhanced styling capabilities. With a keen eye for user
                    experience, I ensure that websites and applications not only
                    meet but exceed client expectations. Additionally, I have
                    proficiency in Bootstrap for rapid development, allowing me
                    to deliver sleek and polished frontend solutions that
                    elevate your digital presence.
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDisplay("two")}
                >
                  <Typography
                    sx={{
                      color: "#ff014f",
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                      },
                    }}
                  >
                    Front-End Development
                  </Typography>
                  <FaPlus color="#ff014f" />
                </Box>
              )}
            </Box>

            {/* question three */}
            <Box
              sx={{
                borderRadius: "15px",
                bgcolor: "#202327",
                boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                color: "#c4cfde",
                p: 3,
                mt: 2,
                ...(show === "three" && {
                  border: "1px solid #ff014f",
                }),
              }}
            >
              {show === "three" ? (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDisplay("")}
                  >
                    <Typography
                      sx={{
                        ...(show === "three" && {
                          fontWeight: "bold",
                          fontSize: {
                            xs: "14px",
                            sm: "18px",
                          },
                        }),
                      }}
                    >
                      Back-End Development
                    </Typography>
                    <FaMinus />
                  </Box>
                  <Typography
                    sx={{
                      mt: 3,
                      textAlign: "justify",
                      fontSize: { xs: "14px", sm: "16px" },
                      letterSpacing: 1,
                    }}
                    variant="body2"
                  >
                    As a Backend Developer, I specialize in building robust and
                    scalable server-side solutions to power your applications.
                    My expertise lies in utilizing cutting-edge technologies,
                    including Node.js and Express.js, to create efficient and
                    high-performance backend systems. I leverage MongoDB with
                    Mongoose for seamless database interactions, ensuring data
                    integrity and optimal performance. For secure user
                    authentication, I implement Firebase, providing a reliable
                    and streamlined authentication process. My focus extends
                    beyond just coding I architect backend solutions that align
                    with your project's goals, emphasizing scalability,
                    reliability, and security.
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDisplay("three")}
                >
                  <Typography
                    sx={{
                      color: "#ff014f",
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                      },
                    }}
                  >
                    Back-End Development
                  </Typography>
                  <FaPlus color="#ff014f" />
                </Box>
              )}
            </Box>

            {/* question four */}
            <Box
              sx={{
                borderRadius: "15px",
                bgcolor: "#202327",
                boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
                color: "#c4cfde",
                p: 3,
                mt: 2,
                ...(show === "four" && {
                  border: "1px solid #ff014f",
                }),
              }}
            >
              {show === "four" ? (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDisplay("")}
                  >
                    <Typography
                      sx={{
                        ...(show === "four" && {
                          fontWeight: "bold",
                          fontSize: {
                            xs: "14px",
                            sm: "18px",
                          },
                        }),
                      }}
                    >
                      Mern Stack Development
                    </Typography>
                    <FaMinus />
                  </Box>
                  <Typography
                    sx={{
                      mt: 3,
                      textAlign: "justify",
                      fontSize: { xs: "14px", sm: "16px" },
                      letterSpacing: 1,
                    }}
                    variant="body2"
                  >
                    As a MERN (MongoDB, Express.js, React, Node.js) Stack
                    Developer, I specialize in delivering end-to-end solutions
                    for your web applications. My expertise spans the entire
                    development cycle, from designing interactive and
                    user-friendly interfaces using React to building scalable
                    and efficient backend systems with Node.js and Express.js. I
                    harness the power of MongoDB, using Mongoose for data
                    modeling and management, to ensure a robust and flexible
                    database architecture.By seamlessly integrating these
                    technologies, I create dynamic and responsive web
                    applications that provide an immersive user experience.
                    Additionally, I prioritize security, scalability, and
                    maintainability to ensure your project not only meets
                    current needs but can evolve with your business.
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDisplay("four")}
                >
                  <Typography
                    sx={{
                      color: "#ff014f",
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                      },
                    }}
                  >
                    Mern Stack Development
                  </Typography>
                  <FaPlus color="#ff014f" />
                </Box>
              )}
            </Box>
          </Grid>

          {/* <Grid item xs={12} sm={6} md={6}>
            <img
              src=""
              width={"100%"}
              style={{
                borderRadius: "25px",
              }}
              alt="ar"
            />
          </Grid> */}
        </Grid>
      </Box>
      <Divider sx={{ background: "#121415", mt: 15 }} />
    </Container>
  );
};

export default Features;
