import React from "react";
import { Link } from "react-router-dom";
import styles from "../Users.module.css";

export default function List({ list }) {
    return (
        <div>
            {list.map((item) => {
                return (
                    <div key={item.id} className={styles.item}>
                        {item.name}
                        <Link to={`/${item.id}`}>
                            <button className={styles.itemBtn}>Albums</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
