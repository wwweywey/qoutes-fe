import { userIsAuthenticated } from "../utils/helpers";
import "../styles/QuoteModal.css";

// import { styled } from "@mui/material/styles";
// import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// const StyledRating = styled(Rating)({
//   "& .MuiRating-iconFilled": {
//     color: "#ff6d75",
//   },
//   "& .MuiRating-iconHover": {
//     color: "#ff3d47",
//   },
// });

export const QuoteModal = ({ qoute, setShowQouteModal }) => {
  const user = userIsAuthenticated();

  console.log(qoute);
  const handleClick = () => {
    setShowQouteModal(false);
  };

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

  return (
    <>
      <div className="modalContainer">
        <div className="quoteModal">
          <div className="quoteMessage">"{qoute.description}"</div>

          <p className="quoteAuthor">- {qoute.author}</p>

          {/* {user && (
            <div className="likeButton" onClick={addQouteToFavorites}>
              <FavoriteIcon fontSize="inherit" className="likeIcon" />
            </div>
          )} */}

          {/* <div className="rating">
            <StyledRating
              name="customized-color"
              defaultValue={1}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
          </div> */}
          <FavoriteIcon fontSize="inherit" className="likeIcon" />
        </div>

        {/* <span onClick={handleClick} className="closeButton">
          CLOSE
        </span> */}
        <CloseIcon onClick={handleClick} className="closeButton" />
      </div>
    </>
  );
};

export default QuoteModal;
