import React from 'react';
import {SwapiServiceConsumer} from "../context";

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => (
        <SwapiServiceConsumer>
            {
                (swapiService) => {
                    const serviceMethods = mapMethodsToProps(swapiService);

                    return <Wrapped {...props} {...serviceMethods} />;
                }
            }
        </SwapiServiceConsumer>
    )
};

export default withSwapiService;
