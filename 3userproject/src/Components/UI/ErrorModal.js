import Button from './Button';
import Card from './Card';
import './ErrorModal.css'

const ErrorModal = props => {
    return(
        <div>
            <div className='backdrop' onClick={props.onConfirm}></div>
            <Card className='modal'>
                <h3 className='header'>{props.title}</h3>
                <div><p className='content'>{props.content}</p></div>
                <footer className='actions'><Button onClick={props.onConfirm}>Okay</Button></footer>
            </Card>
        </div>
    );
};

export default ErrorModal;