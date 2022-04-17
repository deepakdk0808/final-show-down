import { useNavigate } from 'react-router-dom';


export  const Admin =() =>{
    let navigate = useNavigate()
    return(
        <div>
            <input type="text" placeholder="entername"/>
            <input type="text" placeholder="enterpassword" />
            <button onClick={()=>navigate(`/edit`)}>login here </button>

        </div>

    )
}