import ButtonCyan from "components/home/buttons/ButtonCyan";
import ButtonSelectRobot from "components/home/buttons/ButtonSelectRobot";
import CheckboxMarket from "components/home/checkbox/CheckboxMarket";
import { Route, Routes, Link } from "react-router-dom";

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

export const renderNav = (params) => {
    let navbar = <ul>
        {
            params && params.map((param) =>
                param.active ?
                    <li className="active" key={param.path}>
                        <Link to={param.path}>{param.value}</Link>
                    </li> :
                    <li key={param.path}>
                        <Link to={param.path}>{param.value}</Link>
                    </li>
            )
        }
    </ul>

    return navbar;
}

export const renderNavMarket = (params, openOrCloseNav, checkBox) => {
    let navbar = <ul style={{ padding: '0 5px 0 0' }}>
        {
            params && params.map((param) =>
                <li>
                    <span onClick={() => openOrCloseNav(param.name)}>{param.name}</span>
                    {
                        param.active ?
                            <span>
                                <i className="fa fa-angle-up" aria-hidden="true" onClick={() => openOrCloseNav(param.name)}></i>
                                {
                                    param.type === "click" && <ul>
                                        {
                                            param.child && param.child.map((e, index) =>
                                                <li>
                                                    <div className="form-group">
                                                        <CheckboxMarket key={index} name={e.name} checkBox={checkBox} />
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                }
                                {
                                    param.type === "select" && <div style={{ paddingBottom: '10px' }}>
                                        <ButtonSelectRobot>Select Robot</ButtonSelectRobot>
                                        <ButtonCyan>Geisha</ButtonCyan>
                                    </div>
                                }
                            </span> :
                            <span>
                                <i className="fa fa-angle-down" aria-hidden="true" onClick={() => openOrCloseNav(param.name)}></i>
                            </span>
                    }
                </li>
            )
        }
    </ul>

    return navbar;
}

export const renderLoad = (value) => {
    let loader = <div className="loader">
        <div className="box box0">
            <div></div>
        </div>
        <div className="box box1">
            <div></div>
        </div>
        <div className="box box2">
            <div></div>
        </div>
        <div className="box box3">
            <div></div>
        </div>
        <div className="box box4">
            <div></div>
        </div>
        <div className="box box5">
            <div></div>
        </div>
        <div className="box box6">
            <div></div>
        </div>
        <div className="box box7">
            <div></div>
        </div>
        <div className="ground">
            <div></div>
        </div>
    </div>

    return loader;
}