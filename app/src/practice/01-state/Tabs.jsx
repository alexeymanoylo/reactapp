import {useState} from "react";

export function Tabs() {
    // activeTab хранит, какая вкладка открыта сейчас ('a' или 'b').
    const [activeTab, setActiveTab] = useState('a')

    return (
        <>
            <ul className="tabs">
                {/* className={activeTab === 'a' && 'active'}:
                    если true → 'active', если false → React выводит пусто (игнорирует false). */}
                <li className={activeTab === 'a' && 'active'}>
                    <button type="button" onClick={() => setActiveTab('a')}>Tab A</button>
                </li>
                <li className={activeTab === 'b' && 'active'}>
                    <button type="button" onClick={() => setActiveTab('b')}>Tab B</button>
                </li>
            </ul>

            <div className="tabs-container">
                {/* Контент переключается по activeTab (здесь обе ветки одинаковы — для примера) */}
                {activeTab === 'a'
                    ? <div className="tab-item">Content {activeTab}</div>
                    : <div className="tab-item">Content {activeTab}</div>
                }
            </div>
        </>
    )
}