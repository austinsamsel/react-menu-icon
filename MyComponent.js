import React, { Component } from 'react';
import Radium from 'radium';
import color from 'color';

class MyComponent extends Component {
  
  constructor() {
    super();

    this.state = {
      open:    false,
      hover:   false
    }
    this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick() {
    if(this.state.open){
      this.setState({
        open: false
      });
    } else {
      this.setState({
        open: true
      });
    }
  }

  render() {
    
    let b1rotate = this.state.open ? 'rotate(135deg)' : 'rotate(0deg)';
    let b1top    = this.state.open ? '0'              : '-1rem';

    let b2opacity = this.state.open ? '0' : '1';
    let b2scale   = this.state.open ? 'scale(0)' : 'scale(1)';;

    let b3rotate = this.state.open ? 'rotate(-135deg)': 'rotate(0deg)';
    let b3top    = this.state.open ? '0'              : '1rem'; 
    
    const s = {
      wrap: {
        height:'100vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#eee'
      },
      icon: {
        display:'flex',
        alignSelf: 'center',
        position: 'relative',
        width:'100px',
        height:'100px'
      },
      bar: {
        position: 'absolute',
        width: '4rem',
        height: '0.5rem',
        borderRadius: '0.25rem',
        background: 'linear-gradient( 20deg, #5e27ff, #27a5ff )',
        transition: '0.5s ease-in'
      },
      b1: {
        top: b1top,
        transform: b1rotate
      },
      b2: {
        opacity: b2opacity,
        transform: b2scale
        //animation: b2anim,
        //animationName: b2animName 
      },
      b3: {
        top: b3top,
        transform: b3rotate
      }
    };
    

    return (
      <div style={s.wrap}>
        <div style={s.icon} onClick={this.handleClick}>
          <span style={[s.bar, s.b1]}></span>
          <span style={[s.bar, s.b2]}></span>
          <span style={[s.bar, s.b3]}></span>
        </div> 
      </div>    
    );
  }
}

export default Radium(MyComponent);
