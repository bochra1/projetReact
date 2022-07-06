import { useState } from "react";
import { useEffect } from "react";
const Usefetch = (url) => {

    const [data, setData] = useState(null)  ; 
    const [isPending, setisPending] = useState(true);
    const [Error, setError] = useState(null);
    useEffect(() => {
        setTimeout(()=> {

        
        fetch(url) .then(res => {
        if(!res.ok){ throw  Error('could not fetch the  data');}
        return res.json();
    })
    .then(data => 
         {setData(data);
        setisPending(false);} ) 
        .catch(err=>
             {
                setisPending(false);
                setError(err.message);})}, 1000);}, [url]);
return { data , isPending, Error }

}
export default Usefetch;