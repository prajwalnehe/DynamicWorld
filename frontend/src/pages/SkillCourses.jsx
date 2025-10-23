import SkillCourse02 from "../components/SkillCourse02";
import SkillCourse03 from "../components/SkillCourse03";
import VocationCoursesHome from "../components/VocationCoursesHome";

const SkillCourses = () => {
  const para1 =
    "Skill courses are short, focused programs designed to enhance practical abilities and industry-specific knowledge. Unlike traditional degrees, they emphasize hands-on training to make students job-ready. These courses are available in various fields like technology, healthcare, business, and digital marketing. They offer flexibility (often online or hybrid) and provide certificates upon completion to boost employability.";
  const para2 =
    "Skill courses focus on real-world application and career advancement, often developed in collaboration with industry experts. Learners gain targeted expertise in specific tools, technologies, or workflows, enabling faster upskilling or career shifts. These programs are ideal for students, graduates, or professionals seeking to stay competitive in evolving job markets, offering affordable, time-efficient, and outcome-driven learning pathways aligned with current industry demands.";
  const title = "Certificate Skill Courses";
  const short = "Skill Courses";
  return (
    <div>
      <VocationCoursesHome
        short={short}
        title={title}
        para1={para1}
        para2={para2}
      />
      <SkillCourse02 />
      <SkillCourse03 />
    </div>
  );
};

export default SkillCourses;
