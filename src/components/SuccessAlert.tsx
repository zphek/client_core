import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SuccessAlert = () => {
    return (<div className="absolute flex">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500"/>
        <h2>Se ha creado correctamente!</h2>
    </div>);
}
 
export default SuccessAlert;