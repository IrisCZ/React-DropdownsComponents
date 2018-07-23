import React from 'react';
import DropdownApproval from './DropdownApproval.js';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe(DropdownApproval, () => {
  let dropdown;

  beforeEach(function() {

    dropdown = shallow(<DropdownApproval />);
    
  });

  it('changes its options', () => {
    
    dropdown.instance().setOption('name', 'Approve')

    expect(dropdown.state().optionValues).toEqual(['Cancel approval', 'Reject']);

  });

})