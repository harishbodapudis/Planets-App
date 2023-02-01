// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetSlider extends Component {
  constructor(props) {
    super(props)
    const {planetsList} = props
    this.state = {planetsData: planetsList}
  }

  render() {
    const {planetsData} = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="main-container" data-testid="planets">
        <h1 className="heading">PLANETS</h1>
        <Slider {...settings}>
          {planetsData.map(item => (
            <PlanetItem key={item.id} planetsDataList={item} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetSlider
