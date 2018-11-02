import React from "react";

class MenuBar extends React.Component {
  currentState = event => {
    let id = event.target.id;
    this.props.currentState(id);
  };
  render() {
    return (
      <div className="ui four item menu">
        <a className="item active" id="profile" onClick={this.currentState}>
          <i className="user large icon" id="profile" />
        </a>

        <a className="item" id="photo">
          <i className="photo large icon" id="photo" />
        </a>

        <a className="item" id="cocktail">
          <i className="cocktail large icon" id="cocktail" />
        </a>

        <a className="item" id="pokemon">
          <i className=" themeisle large icon" id="pokemon" />
        </a>
      </div>
    );
  }
}

export default MenuBar;
