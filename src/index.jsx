import React, { PropTypes } from "react";

class CardNav extends React.Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    setLevel: PropTypes.func
  };

  static defaultProps = {
    setLevel: () => {}
  };

  render(){
    let { type, id, setLevel } = this.props;
    let selection = { type, id };

    return (
      <nav className="card_nav">
        <button onClick={ setLevel.bind(this, selection)} className="btn btn-inverse browse">
          Open
        </button>
      </nav>
    );
  }
}



export default CardNav;
