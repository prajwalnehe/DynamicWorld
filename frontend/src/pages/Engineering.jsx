import CollegeAdmissionHome from "../components/CollegeAdmissionHome";
import Engineering02 from "../components/Engineering02";

const Engineering = () => {
  const para1 = "Engineering is more than just a career—it’s a field of expertise that combines creativity and science to design, build, and innovate machines, engines, and structures. After completing 12th grade, students can pursue a four-year undergraduate degree in Engineering (B.Tech), which opens up diverse and exciting career opportunities in various industries."
  const para2 = "Engineering education focuses on problem-solving, innovation, and practical application of scientific principles. Students gain hands-on experience through projects, internships, and lab work across disciplines like Computer Science, Mechanical, Civil, Electrical, and Electronics Engineering. The degree equips graduates with technical expertise and analytical thinking, preparing them for careers in technology, research, manufacturing, and emerging fields such as AI, robotics, and renewable energy."
  const title = "Engineering In India"
  return (
    <div>
      <CollegeAdmissionHome title={title} para1={para1} para2={para2}/>
      <Engineering02/>
    </div>
  );
};

export default Engineering;
