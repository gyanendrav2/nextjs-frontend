import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import TextAreaInput from './TextAreaInput';
import { colors } from '../../theme/colors';
import ErrorMessage from '../errorMessage/ErrorMessage';
import cn from 'classnames';

const useStyles = makeStyles({
    container: {
        marginBottom: '0.5rem',
    },
    wrapper: {
        width: '100%',
    },
    label: {
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        width: '100%',
        color: colors.white,
    },
    input: {
        width: '100%',
        height: 120,
        '& ::placeholder': {
            color: colors.primary,
            opacity: 1,
            fontSize: '0.875rem',
        },
    },
    border: (props) => (props.error ? `solid 1px ${colors.red}` : `solid 1px ${colors.primary}`),
    '&:focus': {
        borderColor: (props) => (props.error ? colors.red : colors.primary),
    },
    '&:hover': {
        borderColor: (props) => (props.error ? colors.red : colors.primary),
    },
    white: {
        color: colors.white,
    },
});

const TextArea = ({ label, inputRegister, error, iscompulsory, errorMsg, ...props }) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Typography className={classes.label}>
                {label} {iscompulsory && <span className={colors.white}>*</span>}
            </Typography>
            <TextAreaInput className={classes.input} error={error} inputRegister={inputRegister} {...props} />
            {iscompulsory == true ? <ErrorMessage errorMsg={errorMsg} /> : null}
        </Box>
    );
};

TextArea.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    inputRegister: PropTypes.any,
    errorMsg: PropTypes.string,
    iscompulsory: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};
export default TextArea;
