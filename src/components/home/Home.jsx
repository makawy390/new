import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Container, Grid } from "@mui/material";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import img from "../../assets/2.png";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const arrLinks = [
    {
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/mohamed-makawy-5b6b0723a/",
    },
    { icon: <SiGmail />, url: "mailto:moohesham83@gmail.com?subject=Contact" },
    { icon: <AiFillGithub />, url: "https://github.com/makawy390" },
    {
      icon: <PiWhatsappLogoDuotone />,
      url: "https://api.whatsapp.com/send?phone=+201555245948&text=Hello Dear,Thanks for contacting with me,Can you give me more information about your project!",
    },
  ];
  return (
    <div className="home">
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <h2>Hi,I am Mohamed Hesham</h2>
            <span>Front End Devloper React JS</span>
            <p>
              Having an experience in web design <br />
              Building quality websites and <br /> application with HTML,CSS and{" "}
              <br />
              JavaScript{" "}
            </p>
            <ul className="list">
              {arrLinks.map((arr, id) => (
                <li key={id}>
                  <Link
                    href={arr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {arr.icon}
                  </Link>
                </li>
              ))}
            </ul>
            <button>
              Contact Me <IoIosArrowRoundForward />{" "}
            </button>
          </Grid>
          <Grid item md={4}>
            <div className="image">
              <div className="contact-image">
            <img src={img} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
