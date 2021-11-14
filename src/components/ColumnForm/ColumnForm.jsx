import React from 'react'

const ColumnForm = ({ column, onChange, onSubmit }) => (
  <form onSubmit={ onSubmit }>
    <div>
      <label>
        Column Title:
        <input type='text' value={ column.title } onChange={ onChange } />
      </label>
      <button type="submit">Submit</button>
    </div>
  </form>
)

export default ColumnForm
