import React from "react";
import CardNav from "../src/index.jsx";

class Example extends React.Component {

  constructor(props){
    super(props);
  }

  handleClick({type, id}){
    alert(type + "" + id);
  };

  render() {
    const id = "1";
    const type = "foo";
    return (
      <section>
        <CardNav id={ id } type={ type } setLevel={ this.handleClick }/>
      </section>
    );
  }
}

export default Example;

/*eslint no-alert:0 */
/*eslint no-undef:0 */
