import {useState} from "react";
export function FruitList () {
    // Стартуем с пустого массива — список заполняется кнопкой.
    const [fruits, setFruits] = useState([])

    function addFruit () {
        // НЕ push! Создаём НОВЫЙ массив через spread [...fruits, новыйЭлемент].
        // Так React замечает изменение и перерисовывает.
        // id = fruits.length + 1 — простой способ уникального ключа при добавлении.
        setFruits([...fruits, {id: fruits.length + 1, title: "Fruit " + (fruits.length + 1)}])
    }

    return (
        <>
            {/* onClick={addFruit} — передаём саму функцию (без скобок),
                т.к. аргументы не нужны. Вызовется при клике. */}
            <button type="button" onClick={addFruit}>+ Add Fruit</button>
            <ul>
                {/* .map рисует каждый элемент; key — уникальный id */}
                {fruits.map(fruit => (
                    <li key={fruit.id}>{fruit.title}</li>
                ))}
            </ul>
        </>
    )
}