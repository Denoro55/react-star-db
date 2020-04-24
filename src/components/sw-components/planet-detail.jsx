import React from "react";
import ItemInfo, {Field} from "../item-info";
import {withSwapiService} from '../hocs';

const PlanetDetail = (props) => {
    return <ItemInfo {...props}>
        <Field name="population" label="Population" />
        <Field name="rotationPeriod" label="Rotation Period" />
        <Field name="diameter" label="diameter" />
    </ItemInfo>
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanetById,
        getImageUrl: swapiService.getPlanetImage
    }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetail);
