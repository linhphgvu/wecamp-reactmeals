import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Order.module.css';

const Overlay = (props) => {
  return (
    <div className={classes.order}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlay');

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>;
  };

const Order = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Order;