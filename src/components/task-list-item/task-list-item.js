// import edit from '../../assets/note-pencil-thin-svgrepo-com.svg'
import trashBin from '../../assets/trash-bin.svg'
import './task-list-item.css';

const TaskListItem = (props) => {
    const { task, onChangeTask, onChecked, onDelete, done, id} = props;
    let taskClassNames = "task-add--input";
    let checkboxClassNames = "custom-checkbox"

    if (done) {
        taskClassNames += ' done'
        checkboxClassNames += ' done'
    }

    return (
        <li className="task todo-list--item task-progres">
            <div className="checked"
                data-toggle='done'
                onClick={onChecked}>
                <input
                    type="checkbox"
                    name="task"
                    className={checkboxClassNames}
                    id="checkbox"
                />
                <label
                    htmlFor="checkbox"
                ></label>
            </div>
            <form className="list">
                <input
                    type="text"
                    readOnly
                    defaultValue={task}
                    className={taskClassNames}
                    onChange={(e) => {
                        onChangeTask(e.target.value, task, id);
                        }
                    }
                />
            </form>
            <div className="todo-list--item---action">
                {/* <button className="action-button edit">
                    <img
                        src={edit}
                        alt="Edit"
                    />
                </button> */}
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