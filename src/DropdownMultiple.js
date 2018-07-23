import React from 'react'
import './DropdownMultiple.css'
import Dropdown from './Dropdown.js'
import OptionsGroup from './OptionsGroup.js'

class DropdownMultiple extends Dropdown {
    constructor(){
        super() 
        this.toggle = this.toggle.bind(this)
        this.apply =this.apply.bind(this)
        this.setOption = this.setOption.bind(this)
        this.state = {
            options: {}
        }
    }
    
   

    setOption(name,value){
        let options = this.state.options
        options[name] = value
        this.setState({
            options: options
          })
    }

    apply() {
        this.toggle()
        let options = this.state.options
        this.props.setSelectedOptions(options) 
    }

    render() {
        return (
            <div className="dropdown-multiple">
                <button className="button dropdown-multiple__button" onClick={this.toggle} >
                    Any state
                    <em className="icon fa fa-angle-down" title="arrow" aria-label="arrow"></em>
                </button>
                {
                    this.state.dropdownOpen &&
                    <ul className="dropdown__list">
                        <li>
                            <OptionsGroup options={["Any signature state", "Signed", "Not signed"]} name="Signed" setOption={this.setOption} default="Any signature state" />
                        </li>
                        <li>
                            <OptionsGroup options={["Any signature state", "Signed by Jobandtalent", "Not signed by Jobandtalent"]} name="Signed By"  setOption={this.setOption}  default="Any signature state" />
                        </li>
                        <li>
                            <OptionsGroup options={["Any review state", "Review pending", "Review aproved", "Review rejected"]} name="State Review"  setOption={this.setOption}  default="Any review state" />
                        </li>
                        <li className="dropdown__apply" onClick={this.apply}>Apply</li>
                    </ul>
                 }
            </div>
            
        )
    }
}

export default DropdownMultiple
