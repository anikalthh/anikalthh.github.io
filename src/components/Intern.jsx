import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { CardContent } from 'semantic-ui-react';
import { CardActionArea } from '@mui/material';

function Intern(props) {
    const listItems = props.description;
    if (listItems) {
        var descItems = listItems.map(function(descItem, key){
                return (
                    <li key={key}>{descItem}</li>
                );
            });
    }
    
    return (
        <div className='intern-section'>
            <Card className="intern-card">
                <CardActionArea sx={{"&:hover": {color: "#6a4d71", }}} href={props.url}>
                    <CardContent className="intern-card-text">
                        <h4>{props.internRole}</h4>
                        <h5>{props.name}</h5>
                        <p className="intern-date"><b>{props.date}</b></p>
                        <ul>
                            {descItems}
                        </ul>
                    </CardContent>
                </CardActionArea>
                
            </Card>
        </div>
    )
}


Intern.propTypes = {
    internRole: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.array,
    url: PropTypes.string
  };

export default Intern;
