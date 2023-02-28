import { Component } from 'react';
import add from '../../assets/add2-svgrepo-com.svg'
import './task-add-form.css';

class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.task === '') return
        this.props.onAdd(this.state.task);
        this.setState({
            task: ''
        })
    }

    render() {
        const { task } = this.state;

        return (
            <form className="task task-add">
                <input
                    type="text"
                    name="task"
                    value={task}
                    placeholder="Write a new task..."
                    className="task-add--input"
                    onChange={this.onValueChange}
                />
                <button
                    type="submit"
                    className="task-add--button action-button"
                    onClick={this.onSubmit}>
                    <img src={add} alt="Add" />
                </button>
            </form>
        )
    }
}

export default TaskAddForm;