//assim q a página carregar ,chama-se os avisos salvos
document.addEventListener("DOMContentLoaded",()=>{
    updatePosts();
})

function updatePosts(){

    //fazer a chamada do back-end por meio de uma função call-back
    fetch("http://localhost:3000/api/all").then(res=>{
        return res.json();
    }).then(json=>{
        console.log(json)

        let postElements='';

        //converter string json em um objeto
        let posts=JSON.parse(json);
        console.log(json);
        posts.forEach((post) => {
            let postElement=`<div id=${post.id} class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">
                        ${post.title}
                    </h5>
                </div>
                <div class="card-body">
                    <div class="card-text">
                        ${post.description}
                    </div>
                </div>

            </div>`
            postElements +=postElement;
        });
            document.getElementById("posts").innerHTML=postElements;
       })
}
function newPost(){
    let title=document.getElementById("title").value;
    let description=document.getElementById("desc").value;

    let post={title,description};

    const options={
        method:"POST",
        headers:new Headers({'content-type':'application/json'}),
        body:JSON.stringify(post)
    }
    fetch("http://localhost:3000/api/new",options).then(res=>{
        console.log(res);
        updatePosts();
        document.getElementById("title").value='';
        document.getElementById("desc").value='';
    })
}