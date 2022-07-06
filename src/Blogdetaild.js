import { useHistory , useParams } from "react-router-dom";
import Usefetch from "./Usefetch";
const Blogdetails = () => {
    const {id} = useParams();
    const { data : blog,Error, isPending} = Usefetch('http://localhost:8000/blogs/' + id);
   const handleClick=() => {
  fetch('http://localhost:8000/blogs/' + blog.id , {
    method: 'DELETE' 
}).then(()=> { 
    history.push('/');  })}
    return (  
        <div className="blog-details">
{isPending && <div> loading.. </div>}   
{Error && <div> {Error} </div>}
{blog&& ( <article>
    <h2>{blog.title}</h2>
    <p>Written by {blog.author}</p>
    <div> {blog.body}</div>
    <button onClick={handleClick}> delete </button>
</article>)}


</div>
    );
}
  
export default Blogdetails;