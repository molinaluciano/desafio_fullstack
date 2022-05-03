import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import useStyles from './styles';

const useCustomStyles = (styles) => makeStyles(styles);

const Container = ({ children, customStyles, ...props }) => {
  const classes = useStyles();
  const rootCustomStyles = useCustomStyles(customStyles)();

  return (
    <Box
      className={`${classes.root} ${rootCustomStyles.root ? rootCustomStyles.root : ''}`}
      {...props}
    >
      {children}
    </Box>
  );
};

Container.defaultProps = {
  customStyles: {},
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default Container;
