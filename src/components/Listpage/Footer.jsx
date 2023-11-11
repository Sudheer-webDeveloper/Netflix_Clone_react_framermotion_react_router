import React from "react";
import down from "../../images/down-icon.png";
import { motion,useAnimation} from "framer-motion";
import {useInView } from "react-intersection-observer";
import { useEffect } from "react";


const Footer = () => {

  const {ref,inView} = useInView()
  const animation=useAnimation();
  
  useEffect(()=>{
      if(inView){
        animation.start({
          y:0,
          transition:{
            delay:0.2,
            type:"spring",
            damping:20,
          }
        })
      }
      if(!inView){
        animation.start({
          y:350,
        })
      }
  },[inView])


  return (
    <div ref={ref}>
      <motion.div
        className="footer"
        animate={animation}
      >
        <h2>Questions? call 000-777-000</h2>

        <div className="row1">
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed test</a>
          </div>
          <div className="col">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookies preferences</a>
            <a href="#">Legal Notices </a>
          </div>
          <div className="col">
            <a href="#">Account</a>
            <a href="#">Ways to watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div className="col">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <button className="language-btn">
          English <img src={down} alt="down-icon" />
        </button>
        <button>Sign In</button>
        <p className="copyright-text">Netflix India </p>
      </motion.div>
    </div>
  );
};

export default Footer;



/*


  className="footer"
        initial={{
          x: -1000,
          opacity: 0.2,
        }}
        whileInView={{
          x: 1,
          opacity: 1,
          transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 20,
            damping: 10,
          },
        }}
*/