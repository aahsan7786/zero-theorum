export default class LocalStorage {

    setState = (stateName, state) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem(stateName, serializedState);
        } catch (error) {
            console.error(`Error with save state to localStorage - ${error}`);
        }
    };

    getState = (stateName) => {
        try {
            const localState = localStorage.getItem(stateName);
            if(localState === null) {
                return undefined;
            }
            return JSON.parse(localState);
        } catch (error) {
            console.error(`Error with get state from localStorage - ${error}`);
        }
    };

    remoteState = (stateName) => {
        try {
            localStorage.removeItem(stateName);
        } catch (error) {
            console.error(`Error with removing state from localStorage - ${error}`);
        }
    };

}