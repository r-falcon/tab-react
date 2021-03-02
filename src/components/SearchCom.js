import React from 'react'
import axios from 'axios'
import MapCom from './MapCom'
import Search from './Search'

class SearchCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataList: [],
    }
  }

  async componentDidMount() {
    let res = await axios.get('http://localhost:8080/api/newsData')
    let data = JSON.parse(res.data.forum.extra.ncov_string_list)
    // console.log(data.provinces)
    this.setState({
      isLoading: true,
      dataList: data.provinces,
    })
  }

  render() {
    // console.log(this.state.isLoading)

    if (this.state.isLoading) {
      // console.log(this.state.dataList)
      let arrArr = this.state.dataList.map((item, index) => {
        return (
          <li className="detailMain" key={index}>
            <p>{item.name}</p>
            <p>{item.confirmedNum}</p>
            <p>{item.curesNum}</p>
            <p>{item.deathsNum}</p>
          </li>
        )
      })

      return (
        <div className="contentItem map">
          {/* 标题 */}
          <h1>疫情地图展示</h1>
          {/* 展示地图 */}
          <MapCom cityList={this.state.dataList} />
          {/* 渲染数据 */}
          <div className="detail">
            {/* 搜索框 */}
            <Search cityList={this.state.dataList} />
            <h1>疫情列表情况展示</h1>
            <ul className="detailBox">
              <li className="detailMain">
                <h2>地区</h2>
                <h2>确诊</h2>
                <h2>治愈</h2>
                <h2>死亡</h2>
              </li>
              {arrArr}
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className="contentItem map">
          <h1>数据正在加载...</h1>
        </div>
      )
    }
  }
}

export default SearchCom
