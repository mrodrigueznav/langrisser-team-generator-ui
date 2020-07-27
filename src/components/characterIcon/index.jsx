import React from 'react';
import PropTypes from 'prop-types';

const characters = {
    'Elwin': require('../../assets/characterImages/Card_Head_Elwin.png'),
    'Ledin': require('../../assets/characterImages/Card_Head_Ledin.png'),
    'Sophia': require('../../assets/characterImages/Card_Head_Sophia.png'),
  }

const characterIcon = props => {
    return (
        <div>
            <img src={characters[props.character]} alt={props.character}/>
        </div>
    );
};

characterIcon.propTypes = {
    character: PropTypes.string
};

export default characterIcon;