import React from "react";
import logo from "../../images/logo.png";
import down from "../../images/down-icon.png";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import {useNavigate } from "react-router-dom";




const Home = () => {
  const navigate = useNavigate();
  // console.log(navigate)

  return (
    <header>
      <div className="header">
        <nav>
          <img src={logo} alt="logo" className="logo" />
          <div>
            <button className="language-btn">
              English <img src={down} alt="" />
            </button>
            <button>Sign In</button>
          </div>
        </nav>

        <div className="header-content">
          <div className="get-1">
            
            <button onClick={()=>navigate("/netflix")}>
          {/* <NavLink to="/netflix/shows" className={({isActive})=>(isActive?"" : "")}> */}

              <span>To Originals</span>
              <motion.span
                initial={{
                  x: -10,    
                  opacity: 0.3,
                }}
                animate={{
                  x: 10,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <FiArrowRight />{" "}
              </motion.span>

              {/* </NavLink> */}
            </button>

          </div>

          <h1>Unlimited movies ,TV shows and more.</h1>
        
          <h3>Watch anywhere Cancel anytime</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            memebership.
          </p>

          <form className="email-signup">
            <input type="email" placeholder="Email address" required />
            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Home;
