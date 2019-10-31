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

function createPost(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            posts.push(post);
           const error = false;
           if(!error)
           {
               resolve();
           }
           else{
               reject('Error something went6 wrong');
           }
        },2000);
    });
}

// createPost({title:'Post 3',body:'this is post 3'})
// .then(getPosts)
// .catch(err=>console.log(err)) ; // if error is taken true 


//Async Await 
// async function init()
// {
//     await createPost({title:'Post 3',body:'this is post 3'});
//     getPosts();
// }
// init();

//Async await with fetch 
async function fetchUsers()
{
    const res = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data) ; 
}

fetchUsers(); 



//Promise.all 
// const promise1 = Promise.resolve("Hello world") ; 
// const promise2 = 10 ;
// const promise3 = new Promise ((resolve,reject) => {
//     setTimeout(resolve , 2000,'Goodbye');
// });
// const promise4 = fetch ('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()); 
// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values));