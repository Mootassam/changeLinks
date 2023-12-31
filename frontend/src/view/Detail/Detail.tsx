import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { parameter } = useParams();
  const dataFetchedRef = useRef(false);
  const fetchData = async () => {
    if (parameter) {
      try {
        const response = await axios.get(
          `http://138.68.64.63:8080/api/get/${parameter}`
        );
        window.location.href = response.data.link;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, []);

  return (
    <div className="body__detail">
      <div className="spinner"></div>
    </div>
  );
}

export default Detail;
