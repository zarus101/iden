import React, { useEffect, useState } from 'react'
import "../css/style.css"
import "../css/animation.css"
import "../css/mech-queries.css"
import "../css/variable.css"



import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "../css/Header.module.scss";
import { Link, useHistory } from "react-router-dom";


const UserNav = () => {
  const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        history.push("/page-cta");
    };
  return (
    <>
    
    

    
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    IDEN
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/" onClick={menuToggleHandler}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={menuToggleHandler}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/course" onClick={menuToggleHandler}>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={menuToggleHandler}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" onClick={menuToggleHandler}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={menuToggleHandler}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                   <Link to="/"> <button onClick={ctaClickHandler}>Log-out</button></Link>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>


    </>
  )
}

export default UserNav