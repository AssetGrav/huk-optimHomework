import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const simpleComponent = (Component) => (props) => {
    const isAuto = localStorage.getItem("auth");
    const onLogin = () => {
        console.log("onLogin");
    };
    const onLogout = () => {

    };
    return (
        <>
            {isAuto
                ? <Component {...props}>
                    <button className="btn btn-primary" onClick={onLogout}>Выйти из системы</button>
                </Component>
                : <SmallTitle>
                    <button className="btn btn-primary" onClick={onLogin}>Войти</button>
                </SmallTitle>}
        </>
    );
};

export default simpleComponent;
