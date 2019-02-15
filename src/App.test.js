import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { configureAdapter } from "./setupTests"

configureAdapter()

it('renders without crashing', () => {
  Element.prototype.scrollIntoView = jest.fn()

  shallow(<App />);
});

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a Provider', () => {
    expect(wrapper.find("Provider").length).toEqual(1)
  })
  it('should render a ChatWrapper', () => {
    expect(wrapper.find("ChatWrapper").length).toEqual(1)
  })
  it('should render a ThemeProvider', () => {
    expect(wrapper.find("ThemeProvider").length).toEqual(1)
  })
});