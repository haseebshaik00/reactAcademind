import './Card.css';

export default function Card(props){

    const finalClass = 'card ' + props.className;
    return(
        <div className={finalClass}>
            {props.children}
        </div>
    );

}