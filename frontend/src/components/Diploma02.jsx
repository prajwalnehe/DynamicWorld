import React, { useEffect, useMemo, useState } from "react";
import DynamicUniversity from "./DynamicUniversity";
import axios from "axios";
import UniversityStrip from "./UniversitityStrip";

const Diploma02 = () => {
  const api = import.meta.env.VITE_BACKEND_API;
  const [isLoading, setIsLoading] = useState(true);
  const [diploma, setDiploma] = useState([]);
  const handleApi = async () => {
    try {
      const { data } = await axios.get(`${api}/diploma-programs`);
      setDiploma(data.data);
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
    <div className="min-h-screen w-full ">
      <div className="mx-auto max-w-7xl">
        <UniversityStrip/>
        {isLoading ? (
          <p className="text-center mt-10">Loading...</p>
        ) : (
          <DynamicUniversity university={diploma} />
        )}
      </div>
    </div>
  );
};

export default Diploma02;
