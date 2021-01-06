import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidUpdate(prefProps) {
      if (this.props.getData !== prefProps.getData) {
        this.update()
      }
    }

    componentDidMount() {
      this.update()
    }

    update() {
      this.props.getData().then((data) => {
        this.setState({
          data,
        });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;