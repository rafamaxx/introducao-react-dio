import {useState} from 'react';
import Button from '../Button';

const Card = () => {

    const [cont,setCont] = useState(0);

    function Adicionar (){
        setCont(cont+1);
    }

    function Remove (){
        setCont(cont-1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Card Bootstrap
            </div>
            <div className="card-body">
                <Button
                    className = "btn btn-success"
                    onClick = {Adicionar}
                >
                    Adicionar 
                </Button>
                <Button
                    className = "btn btn-danger"
                    onClick ={Remove}
                >
                    Remover
                </Button>
                <p>Contador: {cont}</p>
            </div>
        </div>
    )
}

export default Card;