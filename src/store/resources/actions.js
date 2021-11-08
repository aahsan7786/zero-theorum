import {SET_RESOURCES_OPEN, DEFAULT_RESOURCES} from "Store/constants";

export const setResourcesOpen = (id) => {
    return {
        type: SET_RESOURCES_OPEN,
        payload: id
    }
};

export const defaultResources = () => {
    return {
        type: DEFAULT_RESOURCES
    }
};

