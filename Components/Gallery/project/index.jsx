import styles from "./style.module.css";

function Project({ project, index, setModal }) {
    const { title, theme } = project;
    return (
        <div
            className={styles.project}
            onMouseEnter={() => setModal({ active: true, index: index })}
            onMouseLeave={() => setModal({ active: false, index: index })}
        >
            <h2>{title}</h2>
            <p>{theme}</p>
        </div>
    );
}

export default Project;
