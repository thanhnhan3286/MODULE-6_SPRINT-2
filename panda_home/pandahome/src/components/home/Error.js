import "../../css/error.css";
import {NavLink} from "react-router-dom";


export function Error() {
    return (
        <>
                <div id='oopss'>
                    <div id='error-text'>
                        <span>404</span>
                        <p>PAGE NOT FOUND</p>
                        <p className='hmpg'><NavLink to={"/home"} className="back">Back To Home</NavLink></p>
                    </div>
                </div>
        </>
    )
}