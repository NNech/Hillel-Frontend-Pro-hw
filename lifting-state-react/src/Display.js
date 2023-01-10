import * as React from "react";

export default function Display({ name, animal }) {
    return <div>{`Эй ${name}, твое любимое животное: ${animal}!`}</div>;
}
