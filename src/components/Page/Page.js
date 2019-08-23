import React, {Fragment} from 'react';

import Header from './Header.js';
import Body from './Body.js';

class Page extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />

                <Body>
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                </Body>
            </Fragment>
        )
    }
}

export default Page;