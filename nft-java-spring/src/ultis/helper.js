import { Route, Routes } from "react-router-dom";

const renderRouteChild = (params) => {
    let routes = <Route>
        {
            params && params.map((param) =>
                <Route path={param.path} element={param.component} key={param.path}>
                    {
                        param.child
                    }
                </Route>
            )
        }
    </Route>

    return routes;
}
export const renderRoutes = (params) => {
    let routes = <Routes>
        {
            params && params.map((param) =>
                <Route exact path={param.path} element={param.component} key={param.path}>
                    {
                        renderRouteChild(param.child)
                    }
                </Route>
            )
        }
    </Routes>
    return routes;
}

export const renderNavMarket = (params) => {
    let navbar = <ul style={{ padding: '0 5px 0 0' }}>
        {
            params && params.map((param) => 
                <li>
                    <span>{param.name}</span>
                    {
                        param.active? <i class="fa fa-angle-up" aria-hidden="true"></i> : <i class="fa fa-angle-down" aria-hidden="true"></i>
                    }
                </li>
            )
        }
    </ul>

    return navbar;
}