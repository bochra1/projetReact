import { useState , useEffect } from "react";
import BlogList from "./BlogList";
import Usefetch from "./Usefetch";
import Blogdetails from "./Blogdetaild";
const  Home = () => {
    const { data: blogs, isPending, Error} = Usefetch('http://localhost:8000/blogs');

        
    
        //const [name, setName] = useState('mario');

    //const handleClick = () => {
//setName('luigi')   ;
//setAge(30);
     //console.log(name);
    
    //const [name, setName] = useState('bochra')  ; 
    //const [age, setAge] = useState(25)  ; 
   // const handleDelete=(id) => {
         //const newBlogs = blogs.filter(blog=> blog.id !== id);
         //setBlogs(newBlogs);

   // }
    return (  
        <div className="home">
            {Error && <div> { Error }</div> }
            {isPending && <div>loading....</div>}
           {blogs && < BlogList blogs={blogs} title ="ALl Blogs"/>}
    

</div>
    );
}
 
export default Home;