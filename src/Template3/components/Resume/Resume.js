
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle5 from "../Particle5";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/GaneshKaricharla.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const sem = "7";
  const cgpa = "8.69";
  const hackerrankbadges = "6";
  const hackerrankcert = "4";
  const leetcodeproblems = "6";
  const codeforcescontrib = "0"


  return (
    <Container fluid className="resume-section">
      <Particle5 />
      <Container>
      
        <Row className="resume" >
        
          <Col md={6} className="resume-left">
          
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SDET Engineer, Frugal Testing"
              date="June 2021 - Present"
              content={[
                "Conducting Test Plan, Test Strategy and Test case walkthrough with different project stakeholders and clients.",
                "Starting with analysis of Non-Functional requirements, prepared test cases and executed the test cases with the coordination of the support teams and involved in recording and analyzing the results.",
              ]}
            />

            <h3 className="resume-title">Certificates and Participations</h3>
            <a 
            href="https://media.geeksforgeeks.org/courses/certificates/648e9d8dafdab530c11cd17ff0133ea7.pdf"
            target="_blank" className="course-link" rel="noreferrer">
            
              <Resumecontent
                title="Data Structures and Algorithms"
                date="Geeks for Geeks"
                content={[
                  "Completed a 8 weeks training on Data Structures and Algorithms,which includes multiple contests and tracks to be completed.",
                ]}
            />
            </a>


            <a 
            href="https://www.coursera.org/account/accomplishments/professional-cert/SED2BSBPA856"
            target="_blank" className="course-link" rel="noreferrer">
            
              <Resumecontent
                title="Google IT Automation with Python"
                date="Coursera"
                content={[
                  "This six-course certificate, developed by Google, is designed to provide IT professionals with in-demand skills -- including Python, Git, and IT automation",
                  "The hands-on curriculum is designed to teach learners how to write code in Python, with a special focus on how this applies to automating tasks in the world of IT support and systems administration"               
                ]}
            />
            </a>


            <a 
            href=""
            target="_blank" className="course-link" rel="noreferrer">
            
              <Resumecontent
                title="Master Performance Testing"
                date="Blazemeter"
                content={[
                  "Learned to run performance tests that check opening a URL on remote machines.",
                  "Learned to use Slaves and Masters for load testing counters and other scenarios with JMeter"
                ]}
            />
            </a>
            


            <a 
            href=""
            target="_blank" className="course-link" rel="noreferrer">
              <Resumecontent
                title="Java"
                date="Solo Learn"
                content={[
                  "Completed Java certification on Solo Learn platform which included a fast schedule of concepts on OOPS and File handling in Java and basic concepts of programming."
                ]}
            /></a>


            <a 
            href="https://www.coursera.org/account/accomplishments/specialization/HR8A3JHXQEWP"
            target="_blank" className="course-link" rel="noreferrer">
              <Resumecontent
                title="Excel Skills for Business"
                date="Coursera"
                content={[
                  "In this Specialization, I have learned to develop advanced Excel Skills for Business.I have completed the four courses in this Specialization and learned to design sophisticated spreadsheets, including professional dashboards, and perform complex calculations using advanced Excel features and techniques."
                ]}
            /></a>

            <a 
            href="https://www.coursera.org/account/accomplishments/specialization/HR8A3JHXQEWP"
            target="_blank" className="course-link" rel="noreferrer">
              <Resumecontent
                title="Excel Skills for Business"
                date="Coursera"
                content={[
                  "In this Specialization, I have learned to develop advanced Excel Skills for Business.I have completed the four courses in this Specialization and learned to design sophisticated spreadsheets, including professional dashboards, and perform complex calculations using advanced Excel features and techniques."
                ]}
            /> </a>
            
            <a 
            href="https://www.coursera.org/account/accomplishments/specialization/EKE23M4GRJ2K"
            target="_blank" className="course-link" rel="noreferrer">
              <Resumecontent
                title="Web Design for Everybody"
                date="Coursera"
                content={[
                  "I have completed this certification and learned how to write syntactically correct HTML5 and CSS3, and how to create interactive web experiences with JavaScript",
                  "Mastering this range of technologies will allow you to develop high quality web sites that, work seamlessly on mobile, tablet, and large screen browsers accessible."
                ]}
            /></a>

            <a 
            href="https://www.coursera.org/account/accomplishments/specialization/EKE23M4GRJ2K"
            target="_blank" className="course-link" rel="noreferrer">
              <Resumecontent
                title="Machine Learning"
                date="Coursera"
                content={[
                  "Machine learning is the science of getting computers to act without being explicitly programmed",
                  "This course I've got familiarised to machine learning, datamining, and statistical pattern recognition and was trained on the following topics:Supervised learning,Unsupervised learning, Best practices in machine learning."
                ]}
            /></a>








          </Col>


          <Col md={6} className="resume-right">

            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Lovely Professional University"
              date="2018 - Present"
              content={[
                `Currently pursuing ${sem}th sem professionaling in Bachelor's degree in Computer Science with current CGPA ${cgpa}.`,
                ``
            ]}
            />
            <Resumecontent
              title="Board of Intermediate Education, Andhra Pradesh"
              date="2016 - 2018"
              content={["Completed my Intermediate with 98% aggregate with core subjects as MATHS, PHYSICS, CHEMISTRY"]}
            />
            <Resumecontent
              title="SSC - 10th class"
              content={["Completed my Schooling with 9.7 cgpa , this is the period where i learned displine, punctuality than core subjects."]}
            />


            <h3 className="resume-title">Ranks in Competitive Platforms</h3>
            <Resumecontent
              title=""
              content={[
                `Total Problems solved in Leetcode  == > ${leetcodeproblems}`,
                `Total Verified Skill Cerificates in Hackerrank == > ${hackerrankcert}`,
                `Total Badges Cerificates in Hackerrank == > ${hackerrankbadges}`,
                `Total Contribution in Codeforces == > ${codeforcescontrib}`
              ]}
            />
          </Col>

        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="warning" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>

      </Container>
    </Container>
  );
}

export default Resume;
