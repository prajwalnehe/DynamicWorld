import StudyAbroadServices from "../components/StudyAbroadServices";
import StudyAbroadTestomonials from "../components/StudyAbroadTestomonials";
import WhatWeProvide from "../components/StudyAbroadWhatWeProvide";
const StudyAbroadHomePage = () => {
  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1761048506/StudyAbroadGirl_kohxhm.svg"
          alt="StudyAbroad Banner"
        />
      </div>
      <StudyAbroadServices />
      <WhatWeProvide />
      <StudyAbroadTestomonials />
    </div>
  );
};

export default StudyAbroadHomePage;
