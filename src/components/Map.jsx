/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom"
import styles from "./Map.module.css";

function Map() {
    const navigate = useNavigate();
    const [searchParams,setSearchparams]=useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng")
    return (
        <div className={styles.mapContainer} onClick={()=>{
            navigate('form')
        }}>
            <h1>Position :{lat}, {lng}</h1>
            <button onClick={()=>{
                setSearchparams({lat:23,lng:50})
                }}>changePosition
            </button>
        </div>
    )
}

export default Map