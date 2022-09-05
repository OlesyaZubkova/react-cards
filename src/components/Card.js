import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const { card } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.text}</p>
        <a
          href="https://github.com/netology-code/ra16-homeworks/tree/Toolkit/composition/cards"
          className="btn btn-primary"
        >
          {card.btn}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    btn: PropTypes.string,
  }),
};

export default Card;
