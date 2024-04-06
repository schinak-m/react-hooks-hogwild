import React from 'react'

const Filter = ({onFilterChange}) => {
  return (
    <div className='filterWrapper'>
      <label>Filter: </label>
      <select name="filter" onChange={onFilterChange}>
        <option value='All'>All</option>
        <option value={true}>Greased</option>
        <option value={false}>Not greased</option>
      </select>
    </div>
  )
}

export default Filter
