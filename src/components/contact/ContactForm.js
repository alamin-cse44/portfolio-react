import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xwkdeoog");
  // if (state.succeeded) {
  //   return (
  //     <p style={{ fontSize: "18px", fontWeight: 700, color: "#ff014f" }}>
  //       Thanks for joining!
  //     </p>
  //   );
  // }
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
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ie: Kazi Nazrul Islam"
              />

              <label className="form-label" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ie: nazrul@gmail.com"
              />

              <label className="form-label" htmlFor="phone">
                Your Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="ie: +880 1643530690"
              />

              <label className="form-label" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="Write your message here.."
              />

              <button
                className="form-btn"
                type="submit"
                disabled={state.submitting}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
};

export default ContactForm;
