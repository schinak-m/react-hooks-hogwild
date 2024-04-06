import React from 'react'

const Sort = ({onSortChange}) => {
  return (
    <div>
      <label>Sort: </label>
      <select name="sort" onChange={onSortChange}>
	  <option value="">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Sort
