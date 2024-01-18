"use client";
import styles from "./style.module.css";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "../button";

export default function Home() {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    const burger = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(burger.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {
                    gsap.to(burger.current, {
                        scale: 1,
                        duration: 0.25,
                        ease: "power1.out",
                    });
                },
                onEnterBack: () => {
                    gsap.to(
                        burger.current,
                        { scale: 0, duration: 0.25, ease: "power1.out" },
                        setIsActive(false)
                    );
                },
            },
        });
    }, []);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>Code by</p>
                        <p className={styles.dennis}>Dennis</p>
                        <p className={styles.snellenberg}>Snellenberg</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    {/* <Magnetic> */}
                    <div className={styles.el}>
                        <a>Work</a>
                        <div className={styles.indicator}></div>
                    </div>
                    {/* </Magnetic> */}
                    {/* <Magnetic> */}
                    <div className={styles.el}>
                        <a>About</a>
                        <div className={styles.indicator}></div>
                    </div>
                    {/* </Magnetic> */}
                    {/* <Magnetic> */}
                    <div className={styles.el}>
                        <a>Contact</a>
                        <div className={styles.indicator}></div>
                    </div>
                    {/* </Magnetic> */}
                </div>
            </div>
            <div ref={burger} className={styles.headerButtonContainer}>
                <div
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className={styles.button}
                >
                    <div
                        className={`${styles.burger} ${
                            isActive ? styles.burgerActive : ""
                        }`}
                    ></div>
                </div>
            </div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </>
    );
}
