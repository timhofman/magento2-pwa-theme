import React from 'react';

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';

const NAVIGATION_QUERY = gql`
    query getCategories {
        category(id: 2) {
            children {
                id,
                name,
                url_key,
                path,
                url_path
                level
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
function Navigation(props) {

    const { loading, error, data } = useQuery(NAVIGATION_QUERY);

    if (loading) return <div>Fetching</div>
    if (error) return <div>Error</div>

    return (
        <nav>
            <ul>
                {data.category.children.map((category, index) => (
                    <li key={category.id}><a href={category.url_path}>{category.name}</a></li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;