import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Home from '../Containers/GetImages'

function Layout() {
    return (
        <div>
                 <BrowserRouter>
                    <Route  path="/def" exact={true} component={Home}/>
                </BrowserRouter>
                {/* <Route path="/b" exact={true} render={(props) => <AllSocialMedia comp="test" {...props} />}/> */}
        </div>
    )
}

export default Layout
