import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.on(this.state.term)
    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }

    render(){
        return (
            <div className="ui container">
                <form  className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input type="text" onChange={this.onInputChange } value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
