import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BottomSinglePage from "../../components/SinglePage/BottomSinglePage";

const MiddleSinglePage = () => {
  const { searchItems } = useSelector((state) => state.search);
  const params = useParams();
  const [movie, setMovie] = useState(searchItems[params.id]);
  return (
    <main className="single_page-7">
      
      <div className="middleSinglePage-7">
        <div className="image-7">
          <img src={movie.mainImg} alt={movie.title} />
        </div>
        <div className="content-7">
          <img src={movie.movieImg} alt="" />
          <h2>{movie.title}</h2>
          <div>
            <span>{movie.year} |</span>
            <span>2h 3m |</span>
            <span>Action</span>
          </div>
          <p>{movie.desc}</p>
          <p>
            <span>Starring :</span> {movie.starring}
          </p>
        </div>
      </div>
      <BottomSinglePage data={movie}/>
    </main>
  );
};

export default MiddleSinglePage;
