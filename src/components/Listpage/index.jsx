import React from "react";
import NavList from "./NavList";
import Mainlist from "./mainList";
import LowerMiddle from "./lowerMiddle";
import TopList from "./TopList";
import MainFooter from "./Footer";

const Index = () => {
  return (
    <>
      <NavList />
      <section>
        <TopList />
      </section>
      <section>
        <Mainlist />
      </section>
      <section>
        <LowerMiddle />
      </section>
      <section>
         <MainFooter />
      </section>

    </>
  );
};

export default Index;
