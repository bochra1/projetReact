import { useState } from "react";
import BlogList from "./BlogList";
const  Home = () => {
        const [blogs, setBlogs] = useState([
            {title:' My new website', body: 'lorem ips..', author:'mario', id :1 },
            {title:' My new party', body: 'lorem ipsum..', author :'myoshi', id :2 },
            {title:' web dev top tips', body: 'lorem ips..', author :'mario', id :3}
        ])  ; 

    //const handleClick = () => {
//setName('luigi')   ;
//setAge(30);
     //console.log(name);
    
    //const [name, setName] = useState('bochra')  ; 
    //const [age, setAge] = useState(25)  ; 

    return (  
        <div className="home">
            <BlogList blogs={blogs} title ="ALl Blogs"/>
            <BlogList blogs={blogs.filter((blog)=> blog.author ==='mario')} title ="Mario'sBlogs"/>

</div>
    );
}
 
export default Home;