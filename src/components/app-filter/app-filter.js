
import './app-filter.css';

const AppFilter = (props) => {
    const { all, done, current } = props
    const buttonData = [
        { name: 'all', label: 'All tasks', info: all },
        { name: 'done', label: 'Done tasks', info: done },
        { name: 'current', label: 'Current tasks', info: current },
    ]

    const buttons = buttonData.map(({ name, label, info }) => {
        return (
            <button
                className="filter-btn"
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