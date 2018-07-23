import { Component } from 'react'
import './Dropdown.css'


class Dropdown extends Component {
    constructor(){
        super()
        this.state = {
            dropdownOpen: false
        }
    }
 
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

}

export default Dropdown
