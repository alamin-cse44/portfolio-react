import { Typography } from "@mui/material";

const Title1 = ({ title }) => {
  return (
    <Typography
      className="title1"
      sx={{
        fontSize: {
          lg: 15,
          md: 15,
          xs: 15,
        },
        fontWeight: '500',
        color: '#ff014f',
        textTransform: 'uppercase',
        letterSpacing: '3px'
      }}
    >
      {title}
    </Typography>
  );
};

export default Title1;
