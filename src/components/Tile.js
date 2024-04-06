import React, {useState} from 'react'

const Tile = ({hog}) => {
    const [displayDetails, setDisplayDetails] = useState(false)

    const toggleDetails = () => {
        setDisplayDetails(() => !displayDetails)
    }
  return (
    <div className=''>
      <div className="pigTile" onClick={toggleDetails}>
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
        {displayDetails && (
            <div>
            <h3>specialty: {hog.specialty}</h3>
            <h3>weight: {hog.weight}</h3>
            <h3>greased: {hog.greased ? "yes" : "no"}</h3>
            <h3>highest medal achieved: {hog["highest medal achieved"]}</h3>
          </div>
        )}
    </div>
    </div>
  )
}

export default Tile
