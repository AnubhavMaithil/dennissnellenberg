"use client";

import styles from "./page.module.css";
import Project from "./project";
import Modal from "./modal";
import Button from "../Button";
import { useState } from "react";
import Image from "next/image";

const projects = [
    {
        title: "Spotify Clone",
        src: "spotify.jpeg",
        color: "#000000",
        theme: "Backend Project",
    },
    {
        title: "Whatsapp Clone",
        src: "whatsapp.png",
        color: "#FCF5EB",
        theme: "Backend Project",
    },
    {
        title: "Canvas Project",
        src: "canvas.png",
        color: "#EFE8D3",
        theme: "Canvas Project",
    },
    {
        title: "3d Animation",
        src: "four.jpg",
        color: "rgb(191, 182, 173) ",
        theme: "After Effects Project",
    },
];

export default function Home() {
    const [modal, setModal] = useState({ active: false, index: 0 });

    return (
        <>
            <main className={styles.Gallerymain}>
                <div className={styles.container}>
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            project={project}
                            index={index}
                            setModal={setModal}
                        />
                    ))}
                </div>
                <Modal modal={modal} projects={projects} />
                <Button>
                    <p>View More</p>
                </Button>
            </main>
        </>
    );
}
