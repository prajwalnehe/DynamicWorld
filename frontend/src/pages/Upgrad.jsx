import Upgrad02 from "../components/Upgrad02";
import VocationCoursesHome from "../components/VocationCoursesHome";

const para1 = "Upgrad Skill Courses empower you with industry-relevant knowledge and practical expertise. Gain hands-on training, flexible learning options, and certifications to boost your career prospects. Stay ahead of trends and adapt to the ever-evolving job market. Designed for professionals and learners aiming for growth and excellence. Unleash your potential and transform your career with Upgrad,UpGrad is South Asia’s premier higher EdTech platform, empowering over 10 million learners globally. Leveraging advanced technology, world-class faculty, and industry partnerships, upGrad delivers impactful online learning experiences. Their mission is to redefine professional growth by making quality education accessible to everyone."

const para2 = "UpGrad is South Asia’s leading EdTech platform, offering globally recognized programs with top universities and industry experts. It makes quality education accessible, helping professionals upskill and advance their careers through flexible, tech-driven learning."

const short = "Upgrad"
const title = "Upgrad Courses" 
const Upgrad = () => {
  return (
    <div>
      <VocationCoursesHome short={short} title={title} para1={para1} para2={para2}/>
      <Upgrad02 />
    </div>
  );
};

export default Upgrad;
