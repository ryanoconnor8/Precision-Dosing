import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
  <Button color="secondary" size="small">
    View Changes
  </Button>
);

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
});

function DosageWarning(props) {
  const { classes } = props;

  return (
    <div>
      <SnackbarContent
        className={classes.snackbar}
        message={
          "Patient's current Rivaroxaban concentration is 314 mcg/L.  Rivaroxaban concentrations > 300 mcg/L can lead to serious bleeding."
        }
        action={action}
      />
    </div> 
  );
}

DosageWarning.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DosageWarning);