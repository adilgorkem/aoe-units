import classes from './Modal.module.css'

const Backdrop = (props) => {

return <div className={classes.backdrop} onClick={props.onClose}></div>    

}

const ModalOverlay = props => {

return <div className={`${classes.modal} ${props.className}`} >
    <div className={classes.content}>{props.children}</div>
</div>

}

export { Backdrop };
export { ModalOverlay };
