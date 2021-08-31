import { Component, createContext } from "react";

const Context = createContext();

const Provider = Context.Provider;
const GlobalProvider = (Children) => {
  return class Parent extends Component {
    state = {
      isLoggedIn: false,
    };

    dispatch = (action) => {
      switch (action.type) {
        case "LOG":
          console.log(1);
          break;
        default:
          return false;
      }
    };

    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};

const Consumer = Context.Consumer;
const GlobalConsumer = (Children) => {
  return class Parent extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};

export { GlobalProvider, GlobalConsumer };
