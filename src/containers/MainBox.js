import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'
// import { cocktails } from '../data.js';

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      menuBar: ''
    }
  }

  onClickHandler = (id) => {
    if (id === 'profile') {
      this.setState({
        menuBar: <Profile />
        // menuBar: Profile()
      })
    } else if (id === 'photos') {
      this.setState({
        menuBar: <Photos />
        // menuBar: Photos()
      })
    } else if (id === 'cocktails') {
      this.setState({
        // menuBar: <Cocktails />
        menuBar: Cocktails()
      })
    } else if (id === 'pokemon') {
      this.setState({
        menuBar: <Pokemon />
      })
    }
  }

  render() {

    /*
  
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
  
    */

    const detailsToDisplay = <div>{this.state.menuBar}</div>

    return (
      <div>
        <MenuBar onClickHandler={this.onClickHandler} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
