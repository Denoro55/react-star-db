import React from "react";
import ItemInfo, {Field} from "../item-info";
import {withSwapiService} from '../hocs';

const StarshipDetail = (props) => {
    return <ItemInfo  {...props}>
        <Field name="model" label="Model" />
        <Field name="length" label="Length" />
        <Field name="costInCredits" label="Cost In Credits" />
    </ItemInfo>
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarshipById,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetail);
