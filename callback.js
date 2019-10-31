const posts = [
    {title:'Post one' ,body :'This is post 1'},
    {title:'Post two' ,body :'This is post 2'}
];

function getPosts()
{
    setTimeout(()=>{
        let output ='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML= output ; 
    },1000)
}

function createPost(post,callback)
{
    setTimeout(()=> {
        posts.push(post);
        callback();
    },2000);
}

createPost({title:'Post three', body:'This is post 3'},getPosts) ; 