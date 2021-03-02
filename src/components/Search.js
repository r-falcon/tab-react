import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: null,
      showStyle: {
        display: 'none',
      },
      result: '',
    }
  }

  keyEvent = (e) => {
    // console.log(e.keyCode)
    if (e.keyCode === 13) {
      console.log(this.props.cityList)
      this.props.cityList.map((item) => {
        if (item.name == this.state.value) {
          console.log(111)
          this.setState({
            showStyle: {
              display: 'block',
            },
            result:
              '城市：' +
              item.name +
              ';      确诊：' +
              item.confirmedNum +
              '                     ' +
              '治愈：' +
              item.curesNum +
              ';      死亡：' +
              item.deathsNum,
          })
        }
      })
    }
  }

  changeEvent = (e) => {
    // console.log(e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <div className="searchBox">
        <input
          type="text"
          placeholder="请输入查询城市"
          onKeyDown={this.keyEvent}
          onChange={this.changeEvent}
        ></input>
        <div className="searchResult" style={this.state.showStyle}>
          {this.state.result}
        </div>
      </div>
    )
  }
}

export default Search
