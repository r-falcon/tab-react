import React from 'react'
import axios from 'axios'
import './main.css'
import SearchCom from './components/SearchCom'
import NewsCom from './components/NewsCom'

// function Map() {
//   return (
//     <div className="contentItem">
//       <h1>这是疫情地图</h1>
//     </div>
//   )
// }

// function New() {
//   return (
//     <div className="contentItem">
//       <h1>这是最新进展</h1>
//     </div>
//   )
// }

function Gz() {
  return (
    <div className="contentItem">
      <h1>这是广州疫情</h1>
    </div>
  )
}

function Xc() {
  return (
    <div className="contentItem">
      <h1>这是直击现场</h1>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      navList: ['疫情地图', '最新进展', '广州疫情', '直击现场'],
      tabIndex: 0,
      barStyle: {
        left: '22px',
      },
      contentStyle: {
        transform: 'translate(0, 0)',
      },
    }
  }

  render() {
    return (
      <div className="container">
        {/* 导航区域 */}
        <div className="navBox">
          {this.state.navList.map((item, index) => {
            if (index === this.state.tabIndex) {
              return (
                <div
                  className="navItem active"
                  key={index}
                  onClick={(event) => {
                    this.navClickEvent(index)
                  }}
                >
                  {item}
                </div>
              )
            } else {
              return (
                <div
                  className="navItem"
                  key={index}
                  onClick={(event) => {
                    this.navClickEvent(index)
                  }}
                >
                  {item}
                </div>
              )
            }
          })}

          <div className="bar" style={this.state.barStyle}></div>
        </div>

        {/* 内容区域 */}
        <div className="contentBox" style={this.state.contentStyle}>
          {/* <Map></Map> */}
          <SearchCom></SearchCom>
          <NewsCom></NewsCom>
          <Gz></Gz>
          <Xc></Xc>
        </div>
      </div>
    )
  }

  navClickEvent = (index) => {
    console.log(index)
    this.setState({
      tabIndex: index,
      barStyle: {
        left: index * 88 + 22 + 'px',
      },
      contentStyle: {
        transform: `translate(-${index * 375}px, 0)`,
      },
    })
  }
}

export default App
