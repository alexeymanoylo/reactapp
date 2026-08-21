import {useState} from "react";

export function Tabs() {
    const [activeTab, setActiveTab] = useState('a')

    return (
        <>
            <ul className="tabs">
                <li className={activeTab === 'a' && 'active'}>
                    <button type="button" onClick={() => setActiveTab('a')}>Tab A</button>
                </li>
                <li className={activeTab === 'b' && 'active'}>
                    <button type="button" onClick={() => setActiveTab('b')}>Tab B</button>
                </li>
            </ul>

            <div className="tabs-container">
                {activeTab === 'a'
                    ? <div className="tab-item">Content {activeTab}</div>
                    : <div className="tab-item">Content {activeTab}</div>
                }
            </div>
        </>
    )
}