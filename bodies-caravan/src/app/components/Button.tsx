import { AiFillPlayCircle } from "react-icons/ai";
import '../styles/styles.css';
export default function Button(){
    return(
        <>
            <div className="button m-4 p-4 rounded-lg flex items-center justify-center gap-2">
                <button>Iniciar</button>
                <AiFillPlayCircle />
            </div>
        </>
    );
}