import React from "react";
import Input from "./Input";
import Button from "./Button";

export default class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         backgr: this.props.backgr
      },
      this.onChange = this.onChange.bind(this);
   }
   onChange(event) {
      this.setState({
         name: event.target.value
      });
   }

   render() {
      let bgColor = {
         'backgroundColor': this.props.backgr
      };
      return (
         <div style={bgColor}>
            <form>
               <label>
                  Name:
                  <Input type="text" onChange={this.onChange} value={this.state.name} />
               </label>
               <Button onClick={() => this.props.newName(this.state.name)} text="Hello" />
               <Button onClick={() => this.props.newBack(this.props.backgr)} text="CC" />
               <div>Hello {this.props.name}!</div>
            </form>
         </div>
      );
   }
}