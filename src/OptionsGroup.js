import React, { Component } from 'react';
import './OptionsGroup.css';

class OptionsGroup extends Component {
    constructor(props){
        super(props)
        this.handleOptionChange = this.handleOptionChange.bind(this)

        this.state = {
            selectedOption: props.default
        };

    }

    handleOptionChange(e) {
        this.setState({
            selectedOption: e.target.value
        });
        this.props.setOption(this.props.name, e.target.value)
    }

    render() {

        return (
            <ul className="options-group">
                {this.props.options.map( ( option, index ) => {
                    let disabledClass = ""
                    if (this.props.disabled && this.props.disabled.indexOf(option) >= 0) {
                        disabledClass = " disabled "
                    }
                    return (
                        <li key={ `option-${ index }` } className="option">
                            <input 
                                type="radio" 
                                className = "hidden"
                                id = {option}
                                name = { this.props.name }
                                value={ option } 
                                checked={this.state.selectedOption ===  option } 
                                onChange={this.handleOptionChange} />
                            <label className={`option-name  ${disabledClass}`} htmlFor = {option}> { option }</label>
                        </li>)
                })}
            </ul>
        )
    }

    componentDidMount() {
        if(this.state.selectedOption){
            this.props.setOption(this.props.name, this.state.selectedOption)
        }
    }
}

export default OptionsGroup;
