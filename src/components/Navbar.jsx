import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { styles } from "../styles";
import NavBarList from "./NavBarList";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex fixed bg-primary items-center top-0 z-20 
      `}
    >
      <div className="w-full m-auto h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <p className="cursor-pointer text-[18px] font-bold flex">
            Manish Nandwani &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <NavBarList
          active={active}
          classes={"sm:flex hidden flex-row gap-10"}
          setActive={setActive}
          setToggle={setToggle}
        />
        <div className="sm:hidden flex">
          <img
            src={toggle ? close : menu}
            alt={"menu-icon"}
            className="cursor-pointer w-[24px]"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-4 black-gradient z-10 absolute top-16 right-0 m-4 min-w-[100px] rounded-xl`}
          >
            <NavBarList
              active={active}
              classes={"flex flex-col gap-4 list-none"}
              setActive={setActive}
              setToggle={setToggle}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
