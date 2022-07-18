import './Card.css'

const Card = (props) => {
    // can also be done adding ${} with back ticks
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default Card;