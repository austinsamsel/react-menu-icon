import React, { Component } from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';
import MenuIcon from './MenuIcon';

chai.use(chaiEnzyme())

describe('the environment', () => {
  it('works, hopefully', () => {
    expect(true).to.be.true;
  });
});

describe('Menu Icon', () => {

  const wrapper = shallow(<MenuIcon />);
  const icon = wrapper.find('.icon');
  //const b1 = wrapper.find('.b1');
  //const b2 = wrapper.find('.b2');
  //const b3 = wrapper.find('.b3');
  
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
 
  it('should have a default state of visually stacked bars', () => {
    wrapper.setState({'open': false});
    const b1 = wrapper.find('.b1');
    const b2 = wrapper.find('.b2');
    const b3 = wrapper.find('.b3');
    expect(b1).to.have.style('transform', 'rotate(0deg)');
    expect(b2).to.have.style('opacity'  , '1');
    expect(b3).to.have.style('transform', 'rotate(0deg)');
  });

  it('should should form an "X" when "open"', () => {
    wrapper.setState({'open': true});
    const b1 = wrapper.find('.b1');
    const b2 = wrapper.find('.b2');
    const b3 = wrapper.find('.b3');
    expect(b1).to.have.style('transform', 'rotate(135deg)');
    expect(b2).to.have.style('opacity'  , '0');
    expect(b3).to.have.style('transform', 'rotate(-135deg)');
  });
  
  it('should spread when hovered while "closed"', () => {
    wrapper.setState({'open': false, 'hover': true});
    const b1 = wrapper.find('.b1');
    const b3 = wrapper.find('.b3');
    expect(b1).to.have.style('top', '-1.75rem');
    expect(b3).to.have.style('top', '1.75rem');
  });

  
  it('should collapse when hovered while "open"', () => {
    wrapper.setState({'open': true, 'hover': true});
    const b1 = wrapper.find('.b1');
    const b3 = wrapper.find('.b3');
    expect(b1).to.have.style('top', '0px');
    expect(b3).to.have.style('top', '0px');
  });


});
