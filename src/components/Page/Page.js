import React, {Fragment} from 'react';

import Header from './Header.js';
import Body from './Body.js';

class Page extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />

                <Body>
                    <div class="item">1</div>
                    <div class="item">2</div>
                    <div class="item">3</div>
                </Body>
            </Fragment>
        )
    }
}

export default Page;