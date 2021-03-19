import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../theme/colors';

const useStyles = makeStyles({
    error: {
        fontSize: '0.875rem',
        color: colors.red,
        marginTop: '0.5rem',
    },
});

const ErrorMessage = ({ error }) => {
    const classes = useStyles();
    return <p className={classes.error}>{error}</p>;
};

ErrorMessage.propTypes = {
    errorMsg: PropTypes.string,
};

export default ErrorMessage;
