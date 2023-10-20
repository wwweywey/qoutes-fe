import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchQouteCategoriesServoce } from "../../services/quoteService";
import "./categories.scss";

const Categories = () => {
  const [qouteCategories, setQouteCategories] = useState([]);

  const fetchQouteCategories = async () => {
    try {
      const res = await fetchQouteCategoriesServoce();
      setQouteCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQouteCategories();
  }, []);

  return (
    <div className="catergoryContainer">
      <h1>Categoies</h1>
      <div className="categoryBox">
        {qouteCategories.map((item) => (
          <Link
            key={item.id}
            to={`/qoutes?categoryID=${item.id}`}
            className="link"
          >
            <div className="quotes">{item.name}</div>
          </Link>
        ))}
      </div>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Categories;
