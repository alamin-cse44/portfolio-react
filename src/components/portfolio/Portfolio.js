import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

import { Box, Container, Divider } from "@mui/material";
import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";


import expert from "../../images/expert.png";
import student from "../../images/student.png";
import doctor from "../../images/doctor.png";
import university from "../../images/university.png";

import { BiLogoReact, BiLogoSass, BiLogoTypescript, BiLogoFirebase, BiLogoBootstrap, BiBorderOuter, BiLogoCss3, BiLogoTailwindCss, BiLogoNodejs, BiLogoJavascript } from "react-icons/bi";
import { SiDotnet, SiMui } from "react-icons/si";

import Projects from "./Projects";

import "./Portfolio.scss";
import axios from "axios";

const Portfolio = () => {
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Expert Hire",
  //     img: expert,
  //     brief:
  //       "A Platform where you can hire an expert and also you can be an expert!",
  //     modalTitle: "IQC Expert Hire Web Application",
  //     client: "IQC Company",
  //     date: "15 June 2023",
  //     service: "Web Application",
  //     budget: "$10000",
  //     live: "https://dev.experthire.fr/",
  //     description:
  //       " A leading online platform connecting businesses with experts across various industries. Our mission is to simplify the, process of finding and hiring top talent for any project, big or small. At ExpertHire, we believe in the power of freelancing and the value it brings to both businesses and experts. We are committed to providing a user-friendly platform that makes it easy for businesses to find the perfect expert for their project, and for experts to showcase their skills and connect with potential clients. ",
  //     technology: [
  //       { id: 1, title: "React", icon: <BiLogoReact style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 2, title: "Typescript", icon: <BiLogoTypescript style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 3, title: "Material-ui", icon: <SiMui style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 4, title: "Sass", icon: <BiLogoSass style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 5, title: "Firebase", icon: <BiLogoFirebase style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 6, title: "Dot net", icon: <SiDotnet style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Student Careline",
  //     img: student,
  //     brief:
  //       "From this education site you can learn on different subjects and can join as a teacher!",
  //     modalTitle: "Student Careline Web Application",
  //     client: "Monowar Hossain",
  //     date: "01 April 2022",
  //     service: "Web Application",
  //     budget: "$40",
  //     live: "https://students-careline-alamin.netlify.app/",
  //     description:
  //       "It’s a frontend website implemented by using React, react-router, bootstrap. This project is implemented for students to get online education services. With Careline making the transition to remote learning so easy, that too has contributed to my daughter's on-going growth. Careline made sure that they worked with the teacher and family to make the transition easy. The teacher is providing weekly zoom lessons with Varsha, and works with the students according to the devices that they have at home.",
  //     technology: [
  //       { id: 1, title: "React", icon: <BiLogoReact style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 2, title: "react-bootstrap", icon: <BiLogoBootstrap style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 3, title: "react-router v5", icon: <BiBorderOuter style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 4, title: "css", icon: <BiLogoCss3 style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Doctors Portal",
  //     img: doctor,
  //     brief:
  //       "This platform is helpful for booking a doctor appointment by seeing available schedule",
  //     modalTitle: "Doctors Portal Web Application",
  //     client: "Mosharraf Haque",
  //     date: "01 February 2022",
  //     service: "Web Application",
  //     budget: "$100",
  //     live: "https://doctors-portal-cc100.web.app/",
  //     description:
  //       "It’s a full stack website implemented by using React, React-router-6, daisy-ui, node-js, express-js, JWT, firebase, heroku where three type of users are exist patient, doctor & admin. The users must go through the authentication process for booking or treating any service. Dashboard is different for the users, patients can book service or cancel service with review. Doctors give their service by seeing the booking schedule.",
  //     technology: [
  //       { id: 1, title: "React", icon: <BiLogoReact style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 2, title: "Tailwind css", icon: <BiLogoTailwindCss style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 3, title: "css", icon: <BiLogoCss3 style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 4, title: "Firebase", icon: <BiLogoFirebase style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 5, title: "Node Js", icon: <BiLogoNodejs style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "University page",
  //     img: university,
  //     brief:
  //       "A University website where you are available to see their education system and culture",
  //     modalTitle: "University Landing Web Page",
  //     client: "Shahib Anower",
  //     date: "01 November 2022",
  //     service: "Web Application",
  //     budget: "$50",
  //     live: "https://alamin-cse44.github.io/university-web-landing-page/",
  //     description:
  //       "It’s a University landing page website. A University website where you are available to see their education system and culture. UI is implemented by using raw HTML, CSS and Javascript for dynamic output.",
  //     technology: [
  //       { id: 1, title: "HTML", icon: <BiLogoReact style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 2, title: "CSS", icon: <BiLogoCss3 style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //       { id: 3, title: "JavaScript", icon: <BiLogoJavascript style={{color: "#ff014f", width: "50px", height: "50px"}} /> },
  //     ],
  //   },
  // ];

  const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects?limit=${30}`); 
          // console.log("response ",response);
          setProjects(response?.data?.data);
        } catch (error) {
          console.error("Error fetching skills:", error);
        }
      };
      
      fetchProjects();
    }, []);

    console.log(projects);

  return (
    <>
      <Container id="portfolio" className="portfolio" sx={{ pt: 10 }}>
        <Box className="portfolio-top">
          <Title1 title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" />
          <Title2 title="My Portfolio" />
        </Box>

        <Swiper
          style={{ marginTop: "50px" }}
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="portfolio-pagination"
        >
          {projects?.map((project) => (
            <SwiperSlide
              style={{
                height: "550px",
                bgcolor: "#202327",
                display: "flex",
                justifyContent: "center",
              }}
              key={project.id}
            >
              <Projects key={project.id} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Divider sx={{ background: "#121415", mt: 15 }} />
      </Container>
    </>
  );
};

export default Portfolio;
