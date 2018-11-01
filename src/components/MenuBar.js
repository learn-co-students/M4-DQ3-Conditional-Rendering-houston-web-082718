import React from 'react'

class MenuBar extends React.Component {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  onClickHandler = (event) => {
    let id = event.target.id
    this.props.onClickHandler(id)
  }

  render() {
    return (
      <div className="ui four item menu">
        <a className="item active" id="profile" onClick={this.onClickHandler}>
          <i className="user large icon" id="profile" />
        </a>

        <a className="item" id="photos" onClick={this.onClickHandler}>
          <i className="photo large icon" id="photo" />
        </a>

        <a className="item" id="cocktails" onClick={this.onClickHandler}>
          <i className="cocktail large icon" id="cocktail" />
        </a>

        <a className="item" id="pokemon" onClick={this.onClickHandler}>
          <i className=" themeisle large icon" id="pokemon" />
        </a>
      </div>
    )

  }
}
export default MenuBar
