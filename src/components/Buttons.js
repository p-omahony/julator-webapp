import React, { Component } from 'react';

class SimpleButton extends Component {

    render() {
      return(
        <div className="simple-button">
          <button id={this.props.id}>{this.props.value}</button>
        </div>
      )
    }
  }

class SelectButton extends Component {
  render() {
    const final = [];
    for (let option of this.props.options) {
      final.push(<option>{option}</option>);
    }
    return (
      <select className="select-button">
        {final}
      </select>
    );
  }
}

class Dropdown extends Component {
  render() {
    return (
      <div className='dropdown'>
        <div className="btn-group">
          <button type="button" class="btn btn-danger">Action</button>
          <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export {SimpleButton, SelectButton, Dropdown};