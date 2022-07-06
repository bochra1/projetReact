
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author ,setAuthor]=useState('mario');
    const [isPending, setisPending] = useState(false);
const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog= { title, body, author};
        setisPending(true);
fetch('http://localhost:8000/blogs', { 
    method : 'Post',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(blog)
    }).then(()=> { console.log('new blog added ! ');
    setisPending(false);
    //history.go((-1));
    history.push('/');
}

)     }


    return (
        <div className="create">
            <h2> Addd a new blog</h2>
            <form onSubmit= {handleSubmit}>
                <label>Blog title:</label>
                <input type ="texte" required value ={title}
                onChange={(e) => setTitle(e.target.value)}></input>
                <label> Blog body:</label>
                <textarea required onChange={(e) => setBody(e.target.value)}> </textarea>
                <label>Blog author :</label>
                <select value = {author}onChange={(e) => setAuthor(e.target.value)}> 
                    <option value ="mario"> mario</option>
                    <option value="yoshi"> Yoshi</option>
                </select>
               {!isPending && <button>Add Blog</button>}
               {isPending && <button disabled >Adding Blog...</button>}

            </form>
        </div>
      );
}
 
<div className="create">

</div>
export default Create;