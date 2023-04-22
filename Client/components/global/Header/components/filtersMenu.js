export function FiltersMenu() {
    return (
        <div className="header_bottom__filters">
            <div className="filters_options">
                <div className="option">
                    <span>Производитель</span>
                    ...
                </div>
                <div className="option">
                    <span>Цена</span>
                    <div className="count">
                        <div>
                            <span>От</span>
                            <input type="number" />
                        </div>

                        <div>
                            <span>До</span>
                            <input type="number" />
                        </div>
                    </div>
                </div>

                <div className="option">
                    <span>Сортировать</span>
                    <select>
                        <option></option>
                        <option>От дешевых к дорогим</option>
                        <option>От дорогих к дешевым</option>
                    </select>
                </div>
            </div>
            <div className="filters_actions">
                <button>Применить фильтры</button>
                <button>Сбросить все фильтры</button>
            </div>
        </div>
    )
}