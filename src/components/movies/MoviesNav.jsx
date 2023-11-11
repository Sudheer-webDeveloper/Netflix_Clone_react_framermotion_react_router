import React from "react";
import logo from "../../images/logo.png";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setSearchItems } from "../../featuresSlice/searchSlice";
import { actionMovies,indiaMovies,NewReleases } from "../../data";




const MoviesNav = () => {
  const { searchTerm, searchItems } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  
  const handleChange = (e) => {
   return dispatch(setSearchTerm(e.target.value));
  };

  

  const handleSearch =(e)=>{
    e.preventDefault()
    console.log(searchTerm)
    const results = searchItems.filter((item)=>{
     return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    //  return item.title.toLowerCase().startsWith(searchTerm[0])
    })
    if(searchTerm.length===0){
     return dispatch(setSearchItems([...actionMovies,...indiaMovies,...NewReleases]))
    }
     dispatch(setSearchItems(results))
    return dispatch(setSearchTerm(""))
  }
  return (
    <header className="header-1">
      <nav>
        <div className="first-1">
          <img src={logo} alt="Logo" />
          <motion.h1
            initial={{
              x: 1,
              opacity: 0.3,
            }}
            animate={{
              x: -20,
              opacity: 1,
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
            }}
          >
            <FiArrowLeft />
          </motion.h1>

          <NavLink
            relative="path"
            to=".."
            end
            className={({ isActive }) => (isActive ? "notActive" : "active")}
          >
            <h3 style={{letterSpacing:"1px"}}>ORIGINALS</h3>
          </NavLink>
        </div>
        <div className="second-1">
          <div className="input-1">

            <form action="" className="form-1" onSubmit={handleSearch}>
              <button>
                <h3>
                  <BsSearch />
                </h3>
              </button>

              <input
                type="search"
                id="search"
                placeholder="Movie Name"
                value={searchTerm}
                onChange={handleChange}
              />
          </form>
          </div>
        </div>
      </nav>
      
    </header>
  );
};

export default MoviesNav;



/*


 const handleSearch =(e)=>{
    e.preventDefault()
    console.log(searchTerm)
    const results = searchItems.filter((item)=>{
     return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    if(searchItems.length===1){
       const newItems= searchItems.filter((item)=>{
            return item.title.toLowerCase().startsWith(searchTerm[0])
       })
       return dispatch(setSearchItems(newItems))
    }
    if(searchTerm.length===0){
     return dispatch(setSearchItems([...actionMovies,...indiaMovies,...NewReleases]))
    }
    return dispatch(setSearchItems(results))
  }

*/



