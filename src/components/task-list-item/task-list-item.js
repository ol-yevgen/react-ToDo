import edit from '../../assets/note-pencil-thin-svgrepo-com.svg'
import trashBin from '../../assets/trash-bin.svg'
import './task-list-item.css';

const TaskListItem = (props) => {
    const { task, onChangeTask, onChecked, onDelete, done } = props;
    let classNames = "task-add--input";

    if (done) {
        classNames += ' done'
    }

    return (
        <li className="task todo-list--item task-progres">
            <div className="checked"
                data-toggle='done'
                onClick={onChecked}>
                <input
                    type="checkbox"
                    name="task"
                    className="custom-checkbox"
                    id="checkbox"
                />
                <label
                    htmlFor="checkbox"
                ></label>
            </div>
            <form className="list">
                <input
                    type="text"
                    defaultValue={task}
                    className={classNames}
                    onChange={(e) => onChangeTask(e.target.value, task)}
                />
            </form>
            <div className="todo-list--item---action">
                <button className="action-button edit">
                    <img
                        src={edit}
                        alt="Edit"
                    />
                </button>
                <button className="action-button delete">
                    <img
                        src={trashBin}
                        alt="Delete"
                        onClick={onDelete}
                    />
                </button>
            </div>
        </li>
    )
}

export default TaskListItem;