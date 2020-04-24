import React from "react";
import ItemInfo, {Field} from "../item-info";
import {withSwapiService} from '../hocs';

const PersonDetail = (props) => {
    return <ItemInfo {...props}>
        <Field name="gender" label="Gender" />
        <Field name="birthYear" label="Birth Year" />
        <Field name="eyeColor" label="Eye Color" />
    </ItemInfo>
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPeopleById,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(mapMethodsToProps)(PersonDetail);
