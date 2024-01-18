import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import styles from "./style.module.css";

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    open: {
        scale: 1,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        scale: 0,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
};

const Modal = ({ modal, projects }) => {
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);

    useEffect(() => {
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
            duration: 0.8,
            ease: "power3",
        });
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
            duration: 0.8,
            ease: "power3",
        });

        let xMoveCursor = gsap.quickTo(cursor.current, "left", {
            duration: 0.45,
            ease: "power3",
        });
        let yMoveCursor = gsap.quickTo(cursor.current, "top", {
            duration: 0.45,
            ease: "power3",
        });

        window.addEventListener("mousemove", (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX);
            yMoveContainer(pageY);
            xMoveCursor(pageX);
            yMoveCursor(pageY);
        });
    }, []);

    return (
        <>
            <motion.div
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "open" : "closed"}
                ref={modalContainer}
                className={styles.modalContainer}
            >
                <div
                    style={{ top: index * -100 + "%" }}
                    className={styles.modalSlider}
                >
                    {projects.map((project, index) => {
                        const { src, color } = project;
                        return (
                            <div
                                className={styles.modal}
                                style={{ backgroundColor: color }}
                                key={`modal_${index}`}
                            >
                                <Image
                                    src={`/images/${src}`}
                                    width={300}
                                    height={0}
                                    alt="image"
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            <motion.div
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "open" : "closed"}
                ref={cursor}
                className={styles.cursor}
            >
                View
            </motion.div>
        </>
    );
};

export default Modal;
