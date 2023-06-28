import { Box, Avatar, Stack } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box sx={{ mx: 5, mt: 10, textAlign: "center" }}>
      <p className="poster-welcome">FIND WITH ME</p>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <a
            href="https://www.facebook.com/profile.php?id=100004690398384"
            target="blank"
          >
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
          </a>
          <a href="https://github.com/alamin-cse44" target="blank">
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
          </a>
          <a
            href="https://www.linkedin.com/in/rehan-mohammed-alamin-1b4587216/"
            target="blank"
          >
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
          </a>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
