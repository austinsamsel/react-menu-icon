import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import MenuIcon from './MenuIcon';

describe('the environment', () => {
  it('works, hopefully', () => {
    expect(true).to.be.true;
  });
});

describe('Menu Icon', () => {

  const wrapper = shallow(<MenuIcon />);
  const icon = wrapper.find('.icon');

  it('should render as icon wrapped in a div', () => {
    expect(wrapper.find('.icon')).to.have.length(1);
    expect(wrapper.type()).to.eql('div');
  });
  
  it('should have three spans for each bar', () => {
    expect(wrapper.find('span')).to.have.length(3);
  });

  it('should start with closed and not hovered', () => {
    expect(wrapper.state('open')).to.equal(false);
    expect(wrapper.state('hover')).to.equal(false);
  });

  it('should call handleClick() when clicked', () => {
    const clicked = spy();
    const wrapper = shallow(<div className="icon" onClick={clicked}/>);
    wrapper.simulate('click');
    expect(clicked.calledOnce).to.equal(true);
  });

  it('should have an "open" state when clicked once', () => {
    wrapper.setState({'open': false});
    icon.simulate('click');
    expect(wrapper.state('open')).to.equal(true);
  });

  it('should have a "closed" state when clicked twice', () => {
    wrapper.setState({'open': true});
    icon.simulate('click');
    expect(wrapper.state('open')).to.equal(false);
  });

  it('should have a "hover" state onMouseOver', () => {
    wrapper.setState({'hover': false});
    icon.simulate('MouseOver');
    expect(wrapper.state('hover')).to.equal(true);
  });
  
  it('should not have a "hover" state on onMouseOut', () => {
    wrapper.setState({'hover': true});
    icon.simulate('MouseOut');
    expect(wrapper.state('hover')).to.equal(false);
  });



});
