import React from 'react'
import './DropdownApproval.css'
import Dropdown from './Dropdown.js'
import OptionsGroup from './OptionsGroup.js'


class DropdownApproval extends Dropdown {
    constructor(){
        super()
        this.toggle = this.toggle.bind(this)
        this.setOption = this.setOption.bind(this)
        this.state = {
            optionSelected: "",
            optionValues: ['Approve', 'Reject'],
            optionsDisabled: []
        }

    }

    setOption(name,value){
        let optionValues = ['Approve', 'Reject']
        let selectedIndex = optionValues.indexOf(value)
        if (value === 'Approve') {
            optionValues[0] = 'Cancel approval'
        }
        if (value === 'Reject') {
            optionValues[1] = 'Cancel rejection'
        }
        this.setState({
            optionSelected: value,
            optionValues,
            optionsDisabled: this.optionsDisabled(optionValues, selectedIndex)
          })
        this.toggle()
    }

    optionsDisabled(optionValues, selected){
        if (selected === 0){
            return [optionValues[1]]
        }
        if (selected === 1){
            return [optionValues[0]]
        }
        return []
    }

    render() {
        return (
            <div className="dropdown-approval">
            <button  className="button dropdown-approval__button" onClick={this.toggle}>
                <em className="icon fa fa-angle-down" title="arrow" aria-label="arrow"></em>
            </button>
            {
                this.state.dropdownOpen &&
                <ul className="dropdown__list">
                    <li className="dropdown-approval__options" >
                        <OptionsGroup options={this.state.optionValues} name="Hiring" setOption={this.setOption} disabled={this.state.optionsDisabled}/>
                    </li>
                </ul>
            }

            </div>
        )

        
    }
}

export default DropdownApproval
