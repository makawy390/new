import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Container, Grid } from "@mui/material";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import img from "../../assets/2.png";
import "./home.css";
// import {} from 'react-router-dom';
import { Link , useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <div className="home">
      <Container fixed>
       <Grid container spacing={2}>
        <Grid item xs={4} md={4.5} >
        <div className="listed">
          {arrLinks.map(({icon , url}, index)=>(
            <li key={index}><Link to={url}>{icon}</Link></li>
          ))}
        </div>
        </Grid>
        <Grid item xs={8} md={4}>
           <div className="content-home">
          <span>Hello Iam</span>
        <h3>Mohamed Mekawy</h3>
        <span>front end developer</span>
        <button>dowload cv</button>
        <button>Contact</button>
        <div className="image-content">
          <img src={img} alt="." />
        </div>
        </div>
        </Grid>
       </Grid>
      </Container>
    </div>
  );
};

export default Home;
