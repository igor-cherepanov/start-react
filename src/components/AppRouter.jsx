import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";
import Error from "../pages/Error";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map((route, key) =>
                    <Route key={key} path={route.path} element={route.component}/>
                )
                :
                publicRoutes.map((route, key) =>
                    <Route key={key} path={route.path} element={route.component}/>
                )
            }
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;