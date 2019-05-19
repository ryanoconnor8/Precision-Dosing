import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const PatientDemographics = () => {
    return (
        <React.Fragment>
            <List>
                <ListItem>
                    <ListItemText primary="Age :" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Sex :" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Weight :" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Height :" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="BMI :" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Drug :" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Indication :" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Inpatient Dose :" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Outpatient Dose :" />
                </ListItem>
            </List>
        </React.Fragment>
    )
}

export default PatientDemographics;