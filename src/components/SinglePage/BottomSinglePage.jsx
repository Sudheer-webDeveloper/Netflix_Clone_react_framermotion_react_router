import React, { useEffect } from "react";
import MainFooter from "../Listpage/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const BottomSinglePage = ({ data }) => {
  const { ref, inView } = useInView(); // The inview changes from true -false , false -true
  const animation = useAnimation(); // It gives access to add animation
  useEffect(() => {
    // The use effect side effect will execute the animation based on inView
    if (inView) {
      console.log("Inview is", inView);
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          damping: 20,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: -1000,
      });
    }
  }, [inView]);

  console.log();
  return (
    <div className="main-container-8" ref={ref}>
      <motion.div className="episodes-8" animate={animation}>
        <h2>Images | {data.title}</h2>

        <div className="image-8">
          {data.episodes.map((episode, index) => (
            <div key={index}>
              <img src={episode} alt={data.movie} />
              <h5>
                Teaser {index + 1} | {data.title}
              </h5>
            </div>
          ))}
        </div>
      </motion.div>

      <article>
        <div className="footer-4">
          <h1>There's even more to watch.</h1>
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals and more. Watch as
            much as you want, anytime you want.
          </p>
          <div className="button-4">
            <button>Join Now</button>
          </div>
        </div>
      </article>

      <div animate={animation}>
        <MainFooter />
      </div>
    </div>
  );
};

export default BottomSinglePage;

// here we are using useInView hook from react-intersection-observer , use animation hook form framer-motion , useeffect from react

/*
  const variants = {
    variants={variants} initial="initial" whileInView="final"
    initial: {
      x: -1000,
      opacity: 0.2,
    },
    final:{
      x: 1,
      opacity: 1,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 20,
        damping: 10,
      },
    }
  };

*/
