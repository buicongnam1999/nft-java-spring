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