import React from 'react';
import PropTypes from 'prop-types';

const factions = {
    'Empire': require('../../assets/factionImages/Icon_Empire.png'),
    'Legion of Glory': require('../../assets/factionImages/Icon_Legion_of_Glory.png'),
    'Princess Alliance': require('../../assets/factionImages/Icon_Princess.png'),
  }

const factionIcon = props => {
    return (
        <div>
            <img src={factions[props.faction]} alt={props.faction}/> {props.faction}
        </div>
    );
};

factionIcon.propTypes = {
    faction: PropTypes.string
};

export default factionIcon;