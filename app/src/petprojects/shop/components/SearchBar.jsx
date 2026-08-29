import s from   './SearchBar.module.css'
export function SearchBar ({search, onSearch, onClear}) {
    return(
        <>
            <div className={s.search}>
                <input value={search} onChange={onSearch} type="text" placeholder="Product search..."/>
                <button type="button" onClick={onClear} className={s.clear}>X</button>
            </div>
        </>
    )
}