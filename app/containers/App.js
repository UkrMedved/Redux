import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Hello from "./../components/Hello";
import * as actions from "./../actions";


class App extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
            <Hello name={this.props.name} backgr={this.props.backgr} newName={this.props.newName} newBack={this.props.newBack} />
      );
   }
}

const mapStateToProps = state => {
   return {
      name: state.hello,
      backgr: state.backgr
   };
};

const mapDispatchToProps = dispatch => {
   return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);