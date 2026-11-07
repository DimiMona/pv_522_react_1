import './Card.css';
import Male from '../icons/male.png';
import Female from '../icons/female.png'; 
function Card(props)
{
    return(

    <div className = "card">
        <img scr={props.human.photo} alt="photo"/>        
        <div>
            {props.human.name} {props.human.surname} {props.human.age}
            <img scr={props.human.pol === 'male' ? Male : Female} className="sex"/>  
        </div>       
    </div>
    )
}
export default Card;