import React, { Component } from 'react';
import Radium from 'radium';

class MenuIcon extends Component {

  constructor() {
    super();

    this.state = {
      open:    false,
      hover:   false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleClick() {
    if(this.state.open){
      this.setState({
        open: false,
        hover: false
      });
    } else {
      this.setState({
        open: true,
        hover: false
      });
    }
  }

  handleHover() {
    this.setState({
      hover: true
    });
  }

  handleLeave() {
    this.setState({
      hover: false
    });
  }

  render() {

    let b1top, b3top, b1trans, b3trans;
      // if menu is open but user is not hovering.
      if (this.state.open && !this.state.hover ){
        b1top = '0px';
        b3top = '0px';
        b1trans = 'rotate(135deg)';
        b3trans = 'rotate(-135deg)';
      }
      // if menu is open and the user is hovering.
      else if (this.state.open && this.state.hover) {
        b1top = '0px';
        b3top = '0px';
        b1trans = 'rotate(0deg) scale(1.25)';
        b3trans = 'rotate(0deg) scale(1.25)';
      }
      // if menu is closed and the user is hoving.
      else if (!this.state.open && this.state.hover) {
        b1top = '-1.75rem';
        b3top = '1.75rem';
        b1trans = 'rotate(0deg)';
        b3trans = 'rotate(0deg)';
      }
      // if menu is closed and user is not hovering, default.
      else{
        b1top= '-1rem';
        b3top= '1rem';
        b1trans = 'rotate(0deg)';
        b3trans = 'rotate(0deg)';
     };

    let b2opacity = this.state.open ? '0' : '1';
    let b2trans   = this.state.open ? 'scale(0)' : 'scale(1)';

    const s = {
      wrap: {
        border:'15px solid #caffff',
        height:'calc(100vh - 30px)',
        width:'calc(100% - 30px)',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      icon: {
        display:'flex',
        alignSelf: 'center',
        position: 'relative',
        width:'4rem',
        height:'4rem',
        alignContent:'flex-end'
      },
      bar: {
        position: 'absolute',
        marginTop:'1.8rem',
        width: '4rem',
        height: '0.5rem',
        borderRadius: '0.25rem',
        background: 'linear-gradient( 20deg, #5e27ff, #27a5ff )',
        transition: '0.5s ease-in'
      },
      b1: {
        top: b1top,
        transform: b1trans,
      },
      b2: {
        opacity: b2opacity,
        transform: b2trans
      },
      b3: {
        top: b3top,
        transform: b3trans
      }
    };


    return (
      <div style={s.wrap}>
        <div className='icon' 
          style={s.icon}
          onMouseOver={this.handleHover}
          onClick={this.handleClick}
          onMouseOut={this.handleLeave}
        >
          <span className="b1" style={[s.bar, s.b1]}></span>
          <span className="b2" style={[s.bar, s.b2]}></span>
          <span className="b3" style={[s.bar, s.b3]}></span>
        </div>
      </div>
    );
  }
}

export default Radium(MenuIcon);
