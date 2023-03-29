import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

const Stars = ({count}) => {
    if (count <= 0 || count > 5 || isNaN(count)) {
        return null
    }

    const stars = [...Array(count).keys()];
    return (
    <ul className="card-body-stars u-clearfix">
        {stars.map((el) => <Star key={el} />)}
</ul>
  )
}

Stars.propTypes = {
    count: PropTypes.number.isRequired
}

Stars.defaultProps = {
    count: 0
}

export default Stars;
