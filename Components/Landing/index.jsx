"use client";

import Image from "next/image";
import styles from "./style.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const index = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: "-500px",
        });
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    };

    return (
        <section className={styles.landing}>
            <Image src={"/images/background.jpg"} fill={true} alt="bgimg" />
            <div className={styles.dets}>
                <Image
                    src={"/images/arrow.svg"}
                    alt="arrow image"
                    width={25}
                    height={25}
                />
                <p>Freelance</p>
                <p>Designer & Developer</p>
            </div>
            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <h1 ref={firstText}>Some Random Text -</h1>
                    <h1 ref={secondText}>Some Random Text -</h1>
                </div>
            </div>
        </section>
    );
};

export default index;
