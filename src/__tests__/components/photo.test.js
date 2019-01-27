import React from "react";
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {Photo} from 'components/containers/photoContainer';
import 'styled-components-test-utils/lib/jest';

configure({adapter: new Adapter()});

it('should call onSelectPhoto correctly when clicked', () => {
    const props = {
        onSelectPhoto: sinon.spy()
    };
    const wrapper = shallow(<Photo {...props}/>);
    sinon.assert.callCount(props.onSelectPhoto, 0);

    wrapper.simulate('click');

    sinon.assert.callCount(props.onSelectPhoto, 1);
});
