import React, {Fragment} from 'react';
import { Query } from 'react-apollo'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';

const PRODUCTS_QUERY = gql`
    query productsQuery {
        products(
            filter:{
                price: {
                    gt: "45"
                }
            }
        ) {
            items {
                id,
                name
            }
        }
    }
`


/**
 * @doc you can use a function component when you render something
 * without having other functions. When you components needs multiple
 * functions, you should use a component class based on React.Component
 *
 * Note: you can only use React Hooks in function components
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Header(props) {

    const { loading, error, data } = useQuery(PRODUCTS_QUERY);

    if (loading) return <div>Fetching</div>
    if (error) return <div>Error</div>

    console.log(data);

    return (
        <header>
            <h1>Test App</h1>
            <ul>
            {data.products.items.map((product, index) => (
                <li key={product.id}>{product.name}</li>
            ))}
            </ul>
        </header>
    )
}

export default Header;