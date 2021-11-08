import React from 'react';
import { ContextConsumer } from '../context/Context';

const withApiService = () => (Wrapped) => {

    return (props) => {

        return (
            <ContextConsumer>
                {
                    (api) => {
                        return (<Wrapped {...props} api={api} />)
                    }
                }
            </ContextConsumer>
        )

    }

};

export default withApiService;