import React, { Component } from 'react'

const WelcomePage = {
  backgroundColor: "blue"
  //backgroundImage: "url(./welcome_page_pic.jpg)",
  //backgroundSize: "100%"
}

class Welcome extends Component {
  
    onClick(){
        window.location.href= './MainPage'
    }

    render() {
    
      return (
        <div className="WelcomePage">
            <div>
                <button id="bt" onClick={this.onClick}>Click</button>
            </div>
        </div>
      )
    }
  }

  export default Welcome