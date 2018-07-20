import React, { Component } from 'react';
import './DropdownSimple.css';
import OptionsGroup from './OptionsGroup.js';


class DropdownSimple extends Component {
    constructor(){
        super()
        this.toggle = this.toggle.bind(this)
        this.showForm = this.showForm.bind(this)
        this.setOption = this.setOption.bind(this)
        this.state = {
            dropdownOpen: false,
            options: {},
            optionValues: ['Cancel hiring', 'Extend hiring']
        }

    }

    showForm(){
        this.toggle()
        this.props.showForm()
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))

    }

    setOption(name,value){
        let options = this.state.options
        options[name] = value
        this.setState({
            options: options
          })
        this.showForm()  
    }

    render() {
        return (
            <div className="dropdown-simple">
            <button  className="button dropdown-simple__button" onClick={this.toggle}>
                <em className="icon far fa-comment-alt" title="arrow" aria-label="arrow"></em>
                <span>Request action</span>
                <em className="icon fa fa-angle-down" title="arrow" aria-label="arrow"></em>
            </button>
            {
                this.state.dropdownOpen &&
                <ul className="dropdown__list">
                    <li className="dropdown-simple__options" >
                        <OptionsGroup options={this.state.optionValues} name='Hiring' setOption={this.setOption} />
                    </li>
                </ul>
            }

            </div>
        )

        
    }
}

export default DropdownSimple;
