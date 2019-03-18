import React from 'react';
import './index.scss';

function animate(item) {
  if (item && item.id) {
    const el = document.getElementById(item.id);
    el.classList.add('active');
    el.addEventListener('animationend', function f() {
      this.removeEventListener('animationend', f);
      this.classList.remove('active');
    });
  }
}

class Panel extends React.Component {
  static KEY_MAP = {
    ArrowUp: { id: 'minus', val: '-' },
    ArrowDown: { id: 'plus', val: '+' },
    ArrowLeft: { id: 'divide', val: '/' },
    ArrowRight: { id: 'times', val: '*' },
    Enter: { id: 'equals', val: '=' },
    '*': { id: 'dot', val: '.' },
    '#': { id: 'switch', val: '±' },
    SoftLeft: { val: 'clear' },
    SoftRight: { val: 'clear-all' }
  };

  componentDidMount() {
    // instead of onKeyDown to wrapper div.panel, add event listener here
    // is quick and simple - no need to set focus.
    window.addEventListener('keydown', this);
  }

  shouldComponentUpdate() {
    // no need to update after rendered
    return false;
  }

  handleEvent(e) {
    const item = Panel.KEY_MAP[e.key];
    const { onUserInput } = this.props;
    animate(item);
    onUserInput(item && item.val ? item.val : e.key);
  }

  render() {
    return (
      <div className="panel">
        <div id="plus" className="plus" />
        <div id="minus" className="minus" />
        <div id="times" className="times" />
        <div id="divide" className="divide" />
        <div id="equals" className="equals" />
        <div id="dot" className="dot" />
        <div id="switch" className="switch" />
      </div>
    );
  }
}

export default Panel;
