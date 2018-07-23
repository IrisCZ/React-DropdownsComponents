import React from 'react';
import DropdownSimple from './DropdownSimple.js';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe(DropdownSimple, () => {
  let dropdown;

  beforeEach(function() {

    dropdown = shallow(<DropdownSimple showForm={function(){}} />);
    
  });

  it('checks that when an options is clicked the dropdown  closes', () => {
    
    dropdown.instance().setOption('name', 'Cancel hiring');

    expect(dropdown.find('ul.dropdown__list')).toHaveLength(0);
    
  });

  
  it('setOption calls showForm function', () => {

    dropdown = shallow(<DropdownSimple showForm={function(){}} />);

    spyOn(dropdown.instance(), 'showForm');
    dropdown.instance().setOption('name', 'Cancel hiring');

    expect(dropdown.instance().showForm).toHaveBeenCalled();
    
  });

})
