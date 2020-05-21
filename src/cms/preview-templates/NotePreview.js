import React from 'react'
import PropTypes from 'prop-types'

const NotePreview = ({ entry }) => {
  const data = entry.get('data').toJS()
  return (
    <div className="cms-device-box">
      <div className="cms-device-box-border">
        {data}
        {/* should be note component which is not created yet */}
      </div>
    </div>
  )
}

NotePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default NotePreview
