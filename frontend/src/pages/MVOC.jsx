import MVOC02 from "../components/MVOC02";
import MVOC03 from "../components/MVOC03";
import VocationCoursesHome from "../components/VocationCoursesHome";

const MVOC = () => {
  const para1 =
    "A Master of Vocation (M.Voc) is a postgraduate degree focused on vocational training and skill development, aligning learning with National Occupational Standards (NOS). Students build practical expertise plus language and business communication skills — making them highly employable.";
  const para2 =
    "The M.Voc program blends academic depth with industry relevance, offering advanced training, internships, and project-based learning. It enables students to specialize in domains like healthcare, IT, design, finance, or management while developing leadership and entrepreneurial abilities. Graduates emerge ready for supervisory, technical, or managerial roles, contributing directly to workforce innovation and professional excellence.";
  const title = "Master of Vocation Courses";
  const short = "MVOC";
  return (
    <div>
      <VocationCoursesHome
        short={short}
        title={title}
        para1={para1}
        para2={para2}
      />
      <MVOC02 />
      <MVOC03 />
    </div>
  );
};

export default MVOC;
