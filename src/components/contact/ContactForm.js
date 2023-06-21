import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const ContactForm = () => {
  return (
    <Box>
      <Card
        className="portfolio-project-card"
        sx={{
          boxShadow: "0px 3px 10px rgb(0 0 0/ 0.99)",
          borderRadius: "5px",
          bgcolor: "#202327",
          p: 3,
        }}
      >
        <CardContent>
          <div className="form">
            <form action="">
              <label className="form-label" for="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ie: Kazi Nazrul Islam"
              />

              <label className="form-label" for="email">
                Your Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="ie: nazrul@gmail.com"
              />

              <label className="form-label" for="phone">
                Your Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="ie: +880 1643530690"
              />

              <label className="form-label" for="message">
                Your Message
              </label>
              <textarea id="w3review" name="message" rows="4" cols="50" placeholder="Write your message here.." />

              <button className="form-btn" type="submit">SEND MESSAGE</button> 
            </form>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
};

export default ContactForm;
