import React from 'react'

const NoteItem = (props) => {
    const {note} = props;
  return (
    <div className='col-md-3'>
          <div class="card my-3">
              <div class="card-header">
                  {note.title}
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">{note.description}</li>
              </ul>
          </div>
    </div>
  )
}

export default NoteItem
