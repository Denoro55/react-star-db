import React from 'react';
import PropTypes from 'prop-types';

const Row = ({left, right}) => {
    return (
        <div className="row">
            <div className="col-12 col-xl-6 pt-4">
                {left}
            </div>
            <div className="col-12 col-xl-6 pt-4">
                {right}
            </div>
        </div>
    )
};

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
};

export default Row;
