import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1, borderRadius: "15px" }}>
        <LinearProgress
          sx={{ borderRadius: "15px" }}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "#fff" }}>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const ProfessionalSkills = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const developing = [
    {
      id: 1,
      topic: "HTML",
      prog: (
        <LinearProgressWithLabel
          sx={{ padding: "5px", borderRadius: "15px" }}
          value={progress}
        />
      ),
    },
    {
      id: 2,
      topic: "CSS",
      prog: (
        <LinearProgressWithLabel
          sx={{ padding: "5px", borderRadius: "15px" }}
          value={progress - 5}
        />
      ),
    },
    {
      id: 3,
      topic: "JAVASCRIPT",
      prog: (
        <LinearProgressWithLabel
          sx={{ padding: "5px", borderRadius: "15px" }}
          value={progress - 10}
        />
      ),
    },
    {
      id: 5,
      topic: "FRONTEND",
      prog: (
        <LinearProgressWithLabel
          sx={{ padding: "5px", borderRadius: "15px" }}
          value={progress - 20}
        />
      ),
    },
    {
      id: 5,
      topic: "NODE.JS",
      prog: (
        <LinearProgressWithLabel
          sx={{ padding: "5px", borderRadius: "15px" }}
          value={progress - 25}
        />
      ),
    },
    {
      id: 6,
      topic: "SOFTWARE",
      prog: (
        <LinearProgressWithLabel
          sx={{ padding: "5px", borderRadius: "15px" }}
          value={progress - 30}
        />
      ),
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={7}>
        <Grid item xs={12} md={6} lg={6}>
          <Typography
            sx={{
              fontSize: {
                lg: 40,
                md: 35,
                sm: 25,
                xs: 25,
              },
              fontWeight: "800",
              color: "#c4cfde",
            }}
          >
            Develeopment Skills
          </Typography>
          {developing.map((item) => (
            <Box item xs={12} md={6} lg={6} key={item.id}>
              <Box sx={{ width: "100%", mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 20,
                    },
                    fontWeight: "800",
                    color: "#c4cfde",
                  }}
                >
                  {item.topic}
                </Typography>
                {item.prog}
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Typography
            sx={{
              fontSize: {
                lg: 40,
                md: 35,
                sm: 25,
                xs: 25,
              },
              fontWeight: "800",
              color: "#c4cfde",
            }}
          >
            Develeopment Skills
          </Typography>
          {developing.map((item) => (
            <Box item xs={12} md={6} lg={6} key={item.id}>
              <Box sx={{ width: "100%", mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 20,
                    },
                    fontWeight: "800",
                    color: "#c4cfde",
                  }}
                >
                  {item.topic}
                </Typography>
                {item.prog}
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalSkills;
