
import './app-filter.css';

const AppFilter = (props) => {
    const { all, done, current } = props
    const buttonData = [
        { name: 'all', label: 'All tasks', info: all },
        { name: 'done', label: 'Done tasks', info: done },
        { name: 'current', label: 'Current tasks', info: current },
    ]

    const buttons = buttonData.map(({ name, label, info }) => {
        const active = props.filter === name;
        const clazz = active ? 'filter-btn--active' : '';
        return (
            <button
                className={`filter-btn ${clazz}`}
                onClick={() => { props.onFilterSelect(name) }}
                key={name}
            >
                {label}
                <span className="filter-btn--info">{info}</span>
            </button>
        )
    })

    return (
        <div className="filter">
            {buttons}
        </div>
    )
}

export default AppFilter;