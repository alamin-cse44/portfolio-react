import { Box, Divider, Typography, Grid, Avatar, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box sx={{ mx: 5, mt: 10, textAlign:'center' }}>
      <p className="poster-welcome">FIND WITH ME</p>
      <Box
        sx={{
          display: "flex",
          // flexDirection: 'column',
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Avatar
            className="poster-socialIcon"
            sx={{
              width: "70px",
              height: "60px",
              bgcolor: "#202327",
              boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
            }}
            variant="square"
          >
            <FacebookIcon style={{ fontSize: "30px" }} />
          </Avatar>
          <Avatar
            className="poster-socialIcon"
            sx={{
              width: "70px",
              height: "60px",
              bgcolor: "#202327",
              boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
            }}
            variant="rounded"
          >
            <GitHubIcon style={{ fontSize: "30px" }} />
          </Avatar>
          <Avatar
            className="poster-socialIcon"
            sx={{
              width: "70px",
              height: "60px",
              bgcolor: "#202327",
              boxShadow: "0 3px 10px rgb(0 0 0/ 0.99)",
            }}
            variant="rounded"
          >
            <LinkedInIcon style={{ fontSize: "40px" }} />
          </Avatar>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
