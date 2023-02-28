import { Component } from "react";

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TaskList from '../task-list/task-list';
import TaskAddForm from '../task-add-form/task-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            data: [
                { task: "Task 1", done: false, id: 1 },
                { task: "Task 2", done: false, id: 2 }
            ],
            filter: 'all',
            term: '',
            userName: '',
            time: '',
            date: new Date().toDateString().replace(/\s/, ', '),
            hours: +(new Date().toLocaleTimeString().slice(0, 2))
        }
        this.maxId = 3
    }

    onUpdateTime = () => {
        const { hours } = this.state;

        window.onload = () => {
            if (hours < 12) {
                this.setState(() => {
                    return { time: "morning" }
                })

            } else if (hours > 11 && hours < 17) {
                this.setState(() => {
                    return { time: "afternoon" }
                })
            } else {
                this.setState(() => {
                    return { time: "evening" }
                })
            }
        }
    }

    greetingsName = (e) => {
        e.preventDefault();

        this.setState({
            userName: e.target.value,
        })
    }


    addNewTask = (task) => {
        const newTask = {
            task,
            done: false,
            id: this.maxId++
        }

        this.setState(({ data }) => {
            const newArr = [...data, newTask]
            return {
                data: newArr
            }
        })
    }

    deleteTask = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onChangeTask = (changedTask, task) => {
        this.setState(({ data }) => {
            return {
                data: data.map(item => {
                    if (item.task === task) {
                        return { ...item, task: changedTask }
                    }
                    return item
                })
            }
        })
    }

    onChecked = (id, prop) => {
        this.setState(({ data }) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, [prop]: !item[prop] }
                    }
                    return item;
                })
            }
        })
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'done':
                return items.filter(item => item.done);
            case 'current':
                return items.filter(item => !item.done);
            default:
                return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return (item.task.indexOf(term)) > -1
        })
    }

    render() {
        const { data, filter, term, userName, time, date, hours } = this.state;
        const tasks = this.state.data.length;
        const tasksDone = this.state.data.filter(item => item.done).length;
        const tasksCurrent = this.state.data.filter(item => !item.done).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className='todo-container'>
                <AppHeader
                    userName={userName}
                    time={time}
                    date={date}
                    hours={hours}
                    greetingsName={this.greetingsName}
                    onUpdateTime={this.onUpdateTime}
                />
                <main className='todo-wrapper'>
                    <section className='search-panel'>
                        <SearchPanel
                            onUpdateSearch={this.onUpdateSearch}
                        />
                        <AppFilter
                            all={tasks}
                            done={tasksDone}
                            current={tasksCurrent}
                            onFilterSelect={this.onFilterSelect}
                        />
                    </section>
                    <section className='todo'>
                        <TaskAddForm
                            onAdd={this.addNewTask}
                        />
                        <TaskList
                            data={visibleData}
                            onChangeTask={this.onChangeTask}
                            onChecked={this.onChecked}
                            onDelete={this.deleteTask}
                        />
                    </section>
                </main>
            </div>
        )
    }
}

export default App;