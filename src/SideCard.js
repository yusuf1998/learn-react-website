import React, { Component, Fragment } from "react";
import MyImage from "./my-image.jpg";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

class SideCard extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <CardImg top width="100%" src={MyImage} alt="banner" />
          <CardBody>
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
              Yusuf Habibi
            </CardTitle>
            <CardSubtitle
              className="text-secondary mb-3 font-weight-light text-uppercase"
              style={{ fontSize: "0.8rem" }}
            >
              Web Developer
            </CardSubtitle>
            <CardText
              className="text-secondary mb-4"
              style={{ fontSize: "0.75rem" }}
            >
              Full-stack web developer learning new hacks one day at a time. Web
              technology enthusiast.
            </CardText>
            <Button color="success" className="font-weight-bold">
              View Profile
            </Button>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
export default SideCard;
