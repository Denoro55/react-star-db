import React from 'react';

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

export default Row;
