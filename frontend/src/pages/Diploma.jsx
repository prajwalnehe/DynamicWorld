import Diploma02 from "../components/Diploma02";
import Diploma03 from "../components/Diploma03";
import VocationCoursesHome from "../components/VocationCoursesHome";

const Diploma = () => {
  const para1 = "A Diploma is a short-term training program focused on developing Practical Skills for a specific job or career—ideal after 10th or 12th for a quicker pathway to employment. These programs help learners enter the workforce fast, master specialized skills, or act as a stepping stone to further education. Popular examples include Digital Marketing, Data Science, Web Development, and Cyber Security. Diplomas also span engineering, nursing, hospitality management, and renewable energy technology."
  const para2 = "Diploma programs emphasize hands-on training, industry exposure, and real-world application rather than theoretical study. Courses are structured with a career-oriented curriculum, often including internships, workshops, and certification modules. With flexible durations (6 months to 3 years), they cater to students and working professionals alike, offering a cost-effective route to employability and a foundation for higher technical or professional education."
  const title = "Diploma Courses"
  const short = "Diploma"
  return (
    <div>
      <VocationCoursesHome short={short} title={title} para1={para1} para2={para2}/>
      <Diploma02 />
      <Diploma03 />
    </div>
  );
};

export default Diploma;
