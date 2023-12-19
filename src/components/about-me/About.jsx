import "./about.css";
import { Container, Typography, Grid } from "@mui/material";
import { FcGraduationCap } from "react-icons/fc";
import img from '../../assets/1.png'
const About = () => {
  const data = [
    {title : "Birthday" , value : "10/08/1999"},
    {title : "Age" , value : "24"},
    {title : "Nationality" , value : "Egyptian"},
    {title : "Address" , value : "Egypt , Cairo"},
    {title : "Email" , value : "moohesham83@gmail.com"},
    {title : "phone" , value : "01555245948"},
  ];
  return (
    <div className="about">
      <Container>
        <Typography variant="caption" component="h5" className="h5">
          Get to know me
        </Typography>
        <Typography variant="h4" component="h2">
          About Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Typography variant="p" component="p">
          I am Junior Front-End Developer ReactJS, I have a solid foundation in
          web development technologies and  a passion for creating dynamic
          and interactive user interfaces. I am proficient in HTML,CSS, and{" "}
           JavaScript, and have experience working with React JS. <br />
          I am committed to delivering high-quality web applications that are
          optimized for performance and user experience.
           I am eager to learn new technologies and best practices in the
          industry and I am excited about the opportunity to work
          collaboratively with designers and back-end developers to bring
          innovative ideas to life.
        </Typography>
        
          <Grid container spacing={2}>
            {data.map((data , index)=> (
              <Grid item md={6} key={index}>
                <span>{data.title} :  {data.value}</span>
              </Grid>
            ))}
          </Grid>
          </Grid>
          <Grid item md={4}>
            <div className="img">
            <img  src={img} alt="...."/>
            </div>
          </Grid>
        </Grid>
        <div className="education">
          <Typography variant="h4" component="h2">
            Education
          </Typography>
          <span className="graduation">
            <FcGraduationCap />
          </span>

          <Grid container spacing={2} sx={{ paddingLeft: "40px" }}>
            <Grid item md={3}>
              <span>Oct 2017 – July 2021</span>
            </Grid>
            <Grid item md={6}>
              <span>
                Bachelor's Degree, Faculty of Computers and Informatics <br />{" "}
                Zagazig University
                <br /> Grade: Good
              </span>
            </Grid>
          </Grid>
        </div>

      </Container>
    </div>
  );
};

export default About;
