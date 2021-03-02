import React from 'react'
import axios from 'axios'
import bannerImg from '../assets/imgs/banner.jpg'

class NewsCom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      newsList: [],
    }
  }

  async componentDidMount() {
    let res = await axios.get('http://localhost:8080/api/news')
    let data = JSON.parse(res.data.data[0].content)
    console.log(data)
    this.setState({
      isLoading: true,
      newsList: data.sub_raw_datas,
    })
  }

  render() {
    console.log(this.state.newsList)
    let arrArr = this.state.newsList.map((item, index) => {
      return (
        <div className="newsItem" key={index}>
          <div className="time">{item.raw_data.showtime_string}</div>
          <div className="content">{item.raw_data.desc}</div>
        </div>
      )
    })

    if (this.state.isLoading) {
      return (
        <div className="contentItem news">
          <div className="banner">
            <img src={bannerImg} alt="banner"></img>
          </div>
          <div className="newsContent">
            <div className="line"></div>
            <div className="newsList">{arrArr}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="contentItem news">
          <h1>数据正在加载...</h1>
        </div>
      )
    }
  }
}

export default NewsCom
