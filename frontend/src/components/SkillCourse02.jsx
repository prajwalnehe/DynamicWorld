import axios from "axios";
import { useEffect, useState } from "react";
import UniversityStrip from "./UniversitityStrip";
import DynamicUniversity from "./DynamicUniversity";
const SkillCourse02 = () => {
  const api = import.meta.env.VITE_BACKEND_API;
  const [isLoading, setIsLoading] = useState(true);
  const [skillCourse, setSkillCourse] = useState([]);
  const handleApi = async () => {
    try {
      const { data } = await axios.get(`${api}/skillCourses-programs`);
      setSkillCourse(data.data);
    } catch (error) {
      console.error("Error fetching BVOC programs:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div className="max-w-7xl min-h-screen  text-[#333]">
      <UniversityStrip />
      <div className="w-full">
        {isLoading ? (
          <p className="text-center mt-10">Loading...</p>
        ) : (
          <DynamicUniversity university={skillCourse} />
        )}
      </div>
    </div>
  );
};

export default SkillCourse02;
