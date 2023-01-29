import React from "react";
import { useParams } from "react-router-dom";
import useUserPhotos from "../hooks/useUserPhotos";
import NavBtn from "../components/NavBtn";
import styles from "../Users.module.css";

export default function UserPhotos() {
    const { photosId } = useParams();
    const photos = useUserPhotos(photosId);

    return (
        <div>
            <NavBtn />
            <div className={styles.photos}>
                {photos.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.thumbnailUrl} alt=""></img>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
