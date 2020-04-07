import React from 'react'
import '../css/HomeHeader.css'
  
class HomeHeader extends React.Component {
    render() {
      return (
        <div className="Headerbg">
                <header>
                    
                        <h2 className="alt">
                            Hi, I'm _______________{/*<span className="rainbow">__________</span>*/}
                            <br />
                        </h2>
                        <h3 className="alt" style={{textShadow: '3px 3px 4px black',}}>
                            Human and Deity
                        </h3>    
                        <icon className="fa fa-hand-peace-o" 
                        style={{
                            fontSize: "2rem",
                            padding: "0 0 1rem",
                            textShadow: '3px 3px 5px black',
                        }} />
                        <p style={{
                          letterSpacing: "1rem",
                          textShadow: '3px 3px 3px black',
                        }}>Welcome</p>
                        
                </header>
           
        </div>
      )
    }
}

export default HomeHeader