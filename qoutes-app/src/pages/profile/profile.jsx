import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar";
import {
  fetchUserQoutes,
  fetchFavoriteQoutesRequest,
} from "../../services/quoteService";

import "./profile.scss";

const Profile = () => {
  const [user, setUser] = useState({});
  const [qoutesList, setQoutesList] = useState([]);
  const [favoriteQoutes, setFavoriteQoutes] = useState([]);
  const navigate = useNavigate();
  const { userId } = useParams();
  const ID = userId || localStorage.getItem("userId");

  const fetchQoutes = async () => {
    try {
      const res = await fetchUserQoutes(ID);
      setQoutesList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFavoriteQoutes = async () => {
    try {
      const res = await fetchFavoriteQoutesRequest(ID);
      setFavoriteQoutes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQoutes();
    fetchFavoriteQoutes();
  }, []);

  if (!ID) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <div className="profileContainer">
        <div className="detailsContainer">
          <Avatar />
          <div className="userDetail">
            <p>
              Username: <span> {user?.user}</span>
            </p>
          </div>
        </div>
        <div className="quouteCollection">
          <h2>FAVORITE QOUTES </h2>

          <div className="qoutesThumbnails">
            {favoriteQoutes?.length > 0 ? (
              <div>
                <div className="quoteList">
                  {favoriteQoutes?.map((item, i) => {
                    return (
                      <div key={item._id + i}>
                        <div className="quoteText">
                          <h3 className="categoryName">
                            {item.category_id.name}
                          </h3>
                          <p>"{item.description}"</p>
                          <p>Author: {item.author}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="myQuouteFooter">
                  <Link to="/qoutes"> Browse more</Link>
                </div>
              </div>
            ) : (
              <Link to="/qoutes"> Like a qoute</Link>
            )}
          </div>
        </div>
        <div className="quouteCollection">
          <h2>MY QOUTES </h2>
          <div className="qoutesThumbnails">
            <div className="quoteList">
              {qoutesList?.map((item, i) => {
                return (
                  <div key={item._id + i}>
                    <div className="quoteText">
                      <h3 className="categoryName">{item.category}</h3>
                      <p>"{item.description}"</p>
                      <p>Author: {item.author}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="myQuouteFooter">
            <Link to="/qoutes/add"> Add qoute</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
