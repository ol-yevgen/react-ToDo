import { Component } from "react";

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <form className="task">
                <input
                    type="text"
                    placeholder="Search"
                    className="task-add--input"
                    value={this.state.term}
                    onChange={this.onUpdateSearch}
                />
            </form>
        )
    }
}

export default SearchPanel;