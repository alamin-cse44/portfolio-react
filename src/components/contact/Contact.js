import { Box, Typography, Divider, Grid, Paper } from "@mui/material";

import Title1 from "../../common/Title1";
import Title2 from "../../common/Title2";

import "./Contact.scss";

const Contact = () => {
  return (
    <Box className="contact" sx={{ mx: 5, mt: 10 }}>
      <Box sx={{textAlign: 'center'}}>
        <Title1 title="Contact" />
        <Title2 title="Contact With Me" />
      </Box>
    </Box>
  );
};

export default Contact;
