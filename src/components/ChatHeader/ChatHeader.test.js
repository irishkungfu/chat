import React from 'react';
import ChatHeader from './ChatHeader';
import { shallow } from 'enzyme';
import { configureAdapter } from "../../setupTests"
import MessageListModel from "../../models/MessageListModel"
configureAdapter()

describe('ChatHeader', () => {
    const store = new MessageListModel()
    let wrapper;
    beforeEach(() => wrapper = shallow(<ChatHeader store={store} />));

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
})