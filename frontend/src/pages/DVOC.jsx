import DVOC2 from "../components/DVOC2";
import DVOC3 from "../components/DVOC3";
import VocationCoursesHome from "../components/VocationCoursesHome";

const DVOC = () => {
  const para1 =
    "A Diploma in Vocation (D.Voc) is a specialized program that imparts practical skills required for specific trades or occupations. This course focuses on equipping students with industry-relevant knowledge that is essential in today’s job market. D.Voc courses aim to develop key competencies like critical thinking, problem-solving, collaboration, and communication skills.";
  const para2 =
    "Examples include Production Engineering (engineering drawing, manufacturing processes), Public Administration (governance & policy), Psychology (human behaviour), Retail Management (category management, marketing), Library Science (librarian/archivist), and Fashion Designing (garment construction, pattern making, illustration).";
  return (
    <div>
      <VocationCoursesHome
        short={"DVOC"}
        title={"Diploma of Vocation Courses"}
        
        para1={para1}
        para2={para2}
      />
      <DVOC2 />
      <DVOC3 />
    </div>
  );
};

export default DVOC;
