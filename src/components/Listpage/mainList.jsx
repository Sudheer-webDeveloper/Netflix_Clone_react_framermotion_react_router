import React from "react";
import { NewReleases, actionMovies, indiaMovies } from "../../data";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// In this component I can do like this also by spreading all three arrays to one array annd then using slice like to want some limited product's in one horizonatal scroll , instead of that I did like this see below , I implemented the search logic in MoviesNav.jsx component by combing all category of movies.

// Why I don't do like that because in Netflix databse also they seperate each movie in a seperate category like action , thriller, comedy  into a seperate database ,collection like that, they don't combine all the movies into  one file and fetch the movie by finding its category which is not good, that's why I did like this.

const Mainlist = () => {
  const slidevariants = {
    initial: {
      x: -1000,
      opacity: 0.2,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        when:"beforeChildren"
      },
    },
  };

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x:0,
        opacity:1,
        transition: {
          // delay:0.4,
          type: "spring",
          damping: 30,
        },
      });
    }
    if (!inView) {
      animation.start({
        x:-3000,
        opacity:0.5,
      });
    }
  }, [inView]);

  return (
    <motion.main variants={slidevariants} initial="initial" animate="animate">
      <h2>Action Thrillers</h2>
      {/* first movies  */}

      <div className="main-section-3">
        {NewReleases.map((movie) => {
          const { img, id, title } = movie;
          return (
            <NavLink key={id}
              to={`/netflix/${id}`}
              className={({ isActive }) => (isActive ? "notActive" : "active")}
            >
              <motion.div className="movie-card-3" key={id}>
                <img src={img} alt={title} />
                <h3>{title}</h3>
              </motion.div>
            </NavLink>
          );
        })}
      </div>


      {/* for indian movies  */}
      <h2>Indian Movies</h2>
      <div className="main-section-3">
        {indiaMovies.map((movie) => {
          const { img, id, title } = movie;
          return (
            <NavLink key={id} 
              to={`/netflix/${id}`}
              className={({ isActive }) => (isActive ? "notActive" : "active")}
            >
              <div className="movie-card-3" key={id}>
                <img src={img} alt={title} />
                <h3>{title}</h3>
              </div>
            </NavLink>
          );
        })}
      </div>

      {/* for new releases */}

      <h2>New Releases</h2>
      <div
        className="main-section-3"
        ref={ref}
      >
        {actionMovies.map((movie) => {
          const { img, id, title } = movie;
          return (
            <NavLink key={id}
              to={`/netflix/${id}`}
              className={({ isActive }) => (isActive ? "notActive" : "active")}
            >
              <motion.div className="movie-card-3" key={id} animate={animation}>
                <img src={img} alt={title} />
                <h3>{title}</h3>
              </motion.div>
            </NavLink>
          );
        })}
      </div>
    </motion.main>
  );
};

export default Mainlist;
