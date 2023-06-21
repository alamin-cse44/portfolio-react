import { Typography } from "@mui/material";

const Title2 = ({ title }) => {
  return (
    <Typography
      className="title2"
      sx={{
        fontSize: {
          lg: 60,
          md: 40,
          xs: 30,
        },
        fontWeight: '900',
        color: '#ffffff',
        lineHeight: '40px',
        letterSpacing: '2px',
        mt: 3
      }}
    >
      {title}
    </Typography>
  );
};

export default Title2;
