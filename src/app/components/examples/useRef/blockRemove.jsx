import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const BlockRemove = () => {
  const nameState = useRef("Домашнее задание");
  const nameStyle = useRef();
  const [loadName, setLoadName] = useState("Text");
  const handleClickWidth = () => {
        setLoadName(!loadName);
        nameStyle.current.style.width = "200px";
        nameStyle.current.style.height = "200px";
  };
  useEffect(() => {
    nameState.current = loadName;
  }, []);
  return (
    <div ref={nameStyle}>
        <CardWrapper >
                <SmallTitle>{nameState.current}</SmallTitle>
                <Divider />
                <button className="btn btn-primary " onClick={handleClickWidth}>
                    start
                </button>
        </CardWrapper>
    </div>
  );
};

export default BlockRemove;
