import React from "react";
import { Link } from "react-router-dom";
import styles from "../Users.module.css";

export default function List({ albums }) {
    return (
        <div>
            {albums.map((item) => {
                return (
                    <div key={item.id} className={styles.item}>
                        <span>{item.title}</span>
                        <Link to={`/albums/${item.id}`}>
                            <button className={styles.itemBtn}>Photos</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
