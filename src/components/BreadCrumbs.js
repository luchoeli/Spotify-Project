import React from 'react';
import { Route, Link } from 'react-router-dom'
const BreadCrumbs = (props) => {
    const listItems = props.listItems
    const largo = listItems.length;

    
        return(
            <Route>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {
                            listItems.map((li,index) => {
                                const link = li.link;
                                const text = li.text;
                                const classname = "breadcrumb-item";

                                if (index === largo)
                                    classname = "breadcrumb-item active";

                                return <li className={classname} aria-current="page"> <Link to={link}>{text}</Link> </li>
                            })
                        }
                    </ol>
                </nav>    
            </Route>
        )

    
};
export default BreadCrumbs;