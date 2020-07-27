import React from 'react';
import PropTypes from 'prop-types';
import FactionIcon from '../factionIcon'
import CharacterIcon from '../characterIcon'

const characterGroupByFaction = props => {
    return (
        <div>
                {props.factions.map((value, index) => {
                    return <div>
                        <FactionIcon faction={value.faction} key={index}/>
                    {value.characters.map((value, index) => {
                        return(
                            <div>
                                <CharacterIcon character={value.name} key={index}/>
                            </div>
                            )
                    })}
                        </div>
                })}
        </div>
    );
};

characterGroupByFaction.propTypes = {
    factions: PropTypes.array
};

export default characterGroupByFaction;