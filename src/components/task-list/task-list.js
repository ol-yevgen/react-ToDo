import TaskListItem from '../task-list-item/task-list-item'

import './task-list.css';

const TaskList = ({ data, onChangeTask, onChecked, onDelete }) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item
        return (
            <TaskListItem
                key={id}
                {...itemProps}
                onChangeTask={onChangeTask}
                onChecked={(e) => onChecked(id, e.currentTarget.getAttribute('data-toggle'))}
                onDelete={() => onDelete(id)}
            />
        )
    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TaskList;
