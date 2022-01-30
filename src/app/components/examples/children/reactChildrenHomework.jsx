import React from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
import PropTypes from "prop-types";
import SomeComponent from "../hoc/someComponent";

const FormComponent = ({ children }) => {
    return React.Children.map(children, (child) => {
        console.log(child);
        return (
            <>
                {child}
                <p>{children.indexOf(child)}</p>
            </>
        );
    });
};
FormComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
const ReactChildrenHomework = () => {
  return (
    <CardWrapper>
      <SmallTitle>Component number</SmallTitle>
      <Divider />
      <FormComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
        <SomeComponent></SomeComponent>
      </FormComponent>
    </CardWrapper>
  );
};

export default ReactChildrenHomework;
