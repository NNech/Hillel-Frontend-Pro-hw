import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Users.module.css";

export default function NavBtn() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)} className={styles.navBtn}>
                Back
            </button>
        </div>
    );
}
