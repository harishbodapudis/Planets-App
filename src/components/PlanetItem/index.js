// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetsDataList} = props
  const {name, imageUrl, description} = planetsDataList

  return (
    <div>
      <div className="slide-container">
        <img src={imageUrl} alt={`planet ${name}`} className="slide-img" />
        <h1 className="color-name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
