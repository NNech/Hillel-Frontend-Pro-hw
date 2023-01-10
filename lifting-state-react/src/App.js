import * as React from "react";
import Name from "./Name";
import FavoriteAnimal from "./FavoriteAnimal";
import Display from "./Display";

function App() {
    const [name, setName] = React.useState("");
    const [animal, setAnimal] = React.useState("");

    return (
        <form>
            <Name
                name={name}
                onNameChange={(event) => setName(event.target.value)}
            />
            <FavoriteAnimal
                animal={animal}
                onAnimalChange={(event) => setAnimal(event.target.value)}
            />
            <Display name={name} animal={animal} />
        </form>
    );
}

export default App;
