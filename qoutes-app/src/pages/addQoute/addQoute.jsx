import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchQouteCategoriesServoce,
  createQouteRequest,
} from "../../services/quoteService";
import "./addQoute.scss";

const AddQoute = () => {
  const selectRef = useRef();
  const qouteRef = useRef();
  const authorRef = useRef();
  const navigate = useNavigate();
  const [qouteCategories, setQouteCategories] = useState([]);

  const createQoute = (quoteData) => {
    createQouteRequest(JSON.stringify(quoteData))
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        navigate("/qoutes");
        return response.json();
      })
      .then((data) => {
        console.log("Quote created:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const category = selectRef.current.value;
    const qoute = qouteRef.current.value;
    const author = authorRef.current.value;
    const userID = localStorage.getItem("userId");

    if (!userID) {
      return null;
    }

    createQoute({
      user_id: userID,
      category_id: category,
      description: qoute,
      author,
    });
  };
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

  console.log(qouteCategories);
  return (
    <div className="submitFormContainer">
      <form className="submitForm" onSubmit={handleSubmit}>
        <h1>Add new qoutes</h1>
        <label htmlFor="catergory">
          Category:
          <select name="category" ref={selectRef}>
            {qouteCategories.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label htmlFor="">Message: </label>
        <input
          type="text"
          name="quote"
          ref={qouteRef}
          placeholder="Input the qoute"
        />{" "}
        <br />
        <label htmlFor="">Author: </label>
        <input
          type="text"
          name="author"
          ref={authorRef}
          placeholder="Who is the Author"
        />{" "}
        <br />
        <br />
        <hr />
        Tags:
        <br />
        {/*need to enter password to confirm submittion */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddQoute;
