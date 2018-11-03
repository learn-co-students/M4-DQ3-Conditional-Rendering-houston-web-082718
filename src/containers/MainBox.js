import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selected: ' '
  }

  updateSelected = (selected) => {
    this.setState({
      selected: selected
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let detailsToDisplay = <div>Hi, I'm a div!</div>

    if (this.state.selected === "profile") {
      detailsToDisplay = <Profile />
    }
    else if (this.state.selected === "photo") {
      detailsToDisplay = <Photos />
    }
    else if (this.state.selected === "cocktail") {
      detailsToDisplay = <Cocktails />
    }
    else if (this.state.selected === "pokemon") {
      detailsToDisplay = <Pokemon />
    }

    return (
      <div>
        <MenuBar selected={this.state.selected} updateSelected={this.updateSelected} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
