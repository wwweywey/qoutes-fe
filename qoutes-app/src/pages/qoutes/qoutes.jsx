import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import QuoteModal from "../../components/QuoteModal";
import { fetchQoutesService } from "../../services/quoteService";
import "./qoutes.scss";

import { userIsAuthenticated } from "../../utils/helpers";
import QuoteModal from "../../components/QuoteModal";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Skeleton from "@mui/material/Skeleton";

const Qoutes = () => {
  const [showQouteModal, setShowQouteModal] = useState(false);
  const [selectedQoute, setSelectedQoute] = useState(null);
  const [qoutesList, setQoutesList] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handleClickQoute = (qoute) => {
    setShowQouteModal(true);
    setSelectedQoute(qoute);
  };

  const fetchQoutes = async () => {
    try {
      const categoryID = queryParams.get("categoryID");
      const res = await fetchQoutesService(categoryID);
      setQoutesList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQoutes();
  }, []);

  if (showQouteModal) {
    return (
      <QuoteModal qoute={selectedQoute} setShowQouteModal={setShowQouteModal} />
    );
  }

  const user = userIsAuthenticated();
  const addQouteToFavorites = () => {
    if (user) {
      const userFavoriteQoutes = JSON.parse(
        localStorage.getItem("userFavoriteQoutes")
      );

      if (userFavoriteQoutes?.length) {
        const filter = userFavoriteQoutes?.filter((id) => id == qoute.id);
        if (filter?.length < 1) {
          const favorites = [...userFavoriteQoutes, qoute.id];
          localStorage.setItem("userFavoriteQoutes", JSON.stringify(favorites));
        }
      } else {
        localStorage.setItem("userFavoriteQoutes", JSON.stringify([qoute.id]));
      }
    }
  };
  console.log(qoutesList);
  return (
    <div className="qouteListContainer">
      <h1>{qoutesList?.[0]?.category}</h1>

      {/* <h1>{qoutesList?.map(item.name)}</h1> */}

      <div className="quoteList">
        {qoutesList?.map((item) => {
          return (
            <div
              key={`${item.id}${Math.random()}`}
              onClick={() => handleClickQoute(item)}
            >
              <div className="quoteText">
                {/* <h3 className="categoryName">{item.category}</h3> */}
                <p>"{item.description}"</p>
                <p>Author: {item.author}</p>
              </div>

              {user && (
                <div className="likeButton" onClick={addQouteToFavorites}>
                  <FavoriteIcon fontSize="inherit" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Link to="/">
        <button>Back to Categories</button>
      </Link>
    </div>
  );
};

export default Qoutes;
