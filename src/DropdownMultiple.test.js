import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import DropdownMultiple from './DropdownMultiple.js';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe(DropdownMultiple, () => {
  let dropdown;

  beforeEach(function() {

    dropdown = shallow(<DropdownMultiple />);

  });

  it('is an element', () => {

    ReactTestUtils.isElement(dropdown)

  });

  it('changes its state when dropdown multiple button is clicked', () => {
    
    const dropdownButton = dropdown.find('button.dropdown-multiple__button');

    dropdownButton.simulate('click');

    expect(dropdown.state().dropdownOpen).toEqual(true);

  });

  it('checks that dropdown options exist', () => {
    
    const dropdownButton = dropdown.find('button.dropdown-multiple__button');

    expect(dropdown.find('ul.dropdown__list')).toHaveLength(0);

    dropdownButton.simulate('click');
    
    expect(dropdown.find('ul.dropdown__list')).toHaveLength(1);
    
  });

})
