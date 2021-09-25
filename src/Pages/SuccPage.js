import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const SuccPage = ()=>{
    const history = useHistory();


    return (
        <div className="center__all" style={{marginTop:"155px"}}>
        <h1>Ihre Zahlung war erfolgreich. Sie werden in kürze weitergeleitet.</h1>
        <button onClick={()=> history.push("/")} className="paarfit_button" style={{marginTop:"50px"}}>Weiter Trainieren</button>
    </div>)
}


export default SuccPage
