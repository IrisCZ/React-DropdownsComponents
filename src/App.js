import React, { Component } from 'react';
import './App.css';
import DropdownMultiple from './DropdownMultiple.js';
import DropdownSimple from './DropdownSimple.js';
import DropdownApproval from './DropdownApproval';


class App extends Component {

  constructor(){
    super();
    this.setSelectedOptions = this.setSelectedOptions.bind(this)
    this.showForm = this.showForm.bind(this)
    this.state = {
        selected: {},
        formShown: false
    }
  }

  setSelectedOptions(selectedOptions){
    this.setState({ selected: selectedOptions })
  }

  showForm() {
    this.setState(prevState => ({
      formShown: !prevState.formShown
    }))
  }

  doNothing(){
    console.log("to avoid console errors")
  }
  

  render() {
    
  
    return (
      <section className="app">
      
        <nav className="nav-bar">
          <DropdownMultiple setSelectedOptions={this.setSelectedOptions}></DropdownMultiple>
          <DropdownSimple showForm={this.showForm}></DropdownSimple>
          <DropdownApproval showForm={this.showForm}></DropdownApproval>

        </nav>
        
        <article className="app__info">
          <div>
            <table className="app__info__table">
              <tbody>
                {Object.keys(this.state.selected).map( ( option ) => {
                return (
                    <tr  className="app__info__row" key={option}>
                      <td className="app__info__title">
                        {option}: 
                      </td>
                      <td className="app_info__option">
                        {this.state.selected[option]}
                      </td>
                    </tr>
                )
              })}

              </tbody>
            </table>
          </div>
          {
            this.state.formShown &&
            <div className="app__form">
              <form>
                <fieldset className="app__form__group">
                  <label className="app__form__group__title">New end date</label>
                  <input  className="app__form__group__field" type="date" value="2018-07-22" onChange={this.doNothing}></input>
                </fieldset>
                <fieldset className="app__form__group">
                  <label className="app__form__group__title">Notes</label>
                  <textarea className="app__form__group__field"></textarea>
                </fieldset>
              </form>
            </div>
          }


        </article>
      </section>
    );
  }
}

export default App;
