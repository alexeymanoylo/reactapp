import {useState} from "react";

// Дочка-дисплей: получает данные СВЕРХУ через пропс count, только показывает.
function CounterDisplay({count}) {
    return <p>Count: {count}</p>
}

// Дочка-кнопка: получает КОЛЛБЭК onIncrement (функцию), вызывает его при клике.
// Сама состояние не хранит — «докладывает» родителю.
function CounterButton({onIncrement}) {
    return <button onClick={onIncrement}>Increment</button>
}

export function LiftedCounter() {
    // ЕДИНСТВЕННЫЙ владелец состояния — родитель.
    const [count, setCount] = useState(0)

    return (
        <>
            {/* Данные ВНИЗ: count передаём как пропс */}
            <CounterDisplay count={count}/>
            {/* Действие ВНИЗ: onIncrement — колбэк, который меняет state родителя */}
            <CounterButton onIncrement={() => setCount(count + 1)}/>
        </>
    )
}