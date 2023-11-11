import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import empty from "../../images/empty.png";
import { motion } from "framer-motion";

const Movies = () => {
  const { searchItems, searchTerm } = useSelector((state) => state.search);

  const variants = {
    initial: {
      x: 2000,
      opacity: 0.4,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        when: "beforeChildren",
      },
    },
  };

  const itemVarinats = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <main>
      <div className="available-5">
        <span>Available Movies : {searchItems.length}</span>
        {searchItems.map((item) => {
          const { title, id } = item;
          return (
            <span key={id}>
              {title}
              <span style={{ marginLeft: "5px", color: "white" }}>|</span>
            </span>
          );
        })}
      </div>
      <motion.div
        className="movies-5"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        {searchItems.length > 0 ? (
          <motion.div
            className="flex-5"
            variants={itemVarinats}
            initial="initial"
            animate="animate"
          >
            {searchItems.map((movie) => {
              return (
                <motion.div key={movie.id} variants={itemVarinats}>
                  <NavLink
                    to={`/netflix/${movie.id}`}
                    className={({ isActive }) =>
                      isActive ? "notActive" : "active"
                    }
                  >
                    <div className="card-5">
                      <div className="random-8">
                        <img src={movie.img} alt={movie.title} />
                      </div>
                      <div className="text-6">
                        <h3>{movie.title}</h3>
                        <button>{movie.year}</button>
                      </div>
                    </div>
                  </NavLink>
                </motion.div>
              );
            })}
            {searchItems.length >= 3 || (
              <form action="" className="empty">
                <button>REFRESH</button>
              </form>
            )}
          </motion.div>
        ) : (
          <div className="empty-6">
            <img src={empty} alt="empty" />
            <h3>No Movie with that name</h3>
            <form>
              <button>REFRESH</button>
            </form>
          </div>
        )}
      </motion.div>
    </main>
  );
};

export default Movies;
