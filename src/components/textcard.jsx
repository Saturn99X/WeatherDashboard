import React from "react";
import PropTypes from 'prop-types';

// Reusable component for text card 
const TextCard = ({ title, text, footer,global_classNames ,title_classNames,text_classNames,footer_classNames }) => {
  return (
    <div
      className={` text-leagueSpartan text-lg font-semibold flex flex-col  m-6 p-4 rounded-xl text-gray-950 hover:scale-105
       bg-[rgba(255, 255, 255, 0.2)] backdrop-blur-lg border justify- absolute border-white border-opacity-20 shadow-lg ${global_classNames}`}
    
    >
      <h1 className={`${title_classNames}`}>{title}</h1>
      <p className={`${text_classNames}`} >{text}</p> 
      <footer className={`${footer_classNames}`} >{footer}</footer>
    </div>
  );
}

TextCard.propTypes = {
  title: PropTypes.node,
  text: PropTypes.string.isRequired,
  footer: PropTypes.node,
  title_classNames: PropTypes.node,
  text_classNames: PropTypes.node,
  footer_classNames: PropTypes.node
};

export default TextCard;
