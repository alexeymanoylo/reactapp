import {useState} from "react";
export function FruitList () {
    const [fruits, setFruits] = useState([])

    function addFruit () {
        setFruits([...fruits, {id: fruits.length + 1, title: "Fruit " + (fruits.length + 1)}])
    }

    return (
        <>
            <button type="button" onClick={addFruit}>+ Add Fruit</button>
            <ul>
                {fruits.map(fruit => (
                    <li key={fruit.id}>{fruit.title}</li>
                ))}
            </ul>
        </>
    )
}