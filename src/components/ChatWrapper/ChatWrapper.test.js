import React from 'react';
import ChatWrapper from './ChatWrapper';
import { shallow } from 'enzyme';
import { configureAdapter } from "../../setupTests"
import MessageListModel from "../../models/MessageListModel"

// mockup a reliable number for Math.random to ensure passing snapshot testing
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

configureAdapter()

describe('ChatWrapper', () => {
    const store = new MessageListModel()
    let wrapper;
    beforeEach(() => wrapper = shallow(<ChatWrapper store={store} />));

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
})