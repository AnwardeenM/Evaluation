async function apiCall(url) {

    try{

let res = await fetch(url);
let data = await res.json();
return data;
console.log("data;",data);
    }

    catch(err){
        console.log("err:",err);
    }
   


}




function appendArticles(article, main) {

    let display = document.getElementById("main");
    display.innerHTML = "";

    article.forEach(function(elem){

        let div = document.createElement("div");
        div.setAttribute = ("id","news");
    
        let text1 = document.createElement("div");
        text1.textContent = elem.content;
    
        let text2 = document.createElement("div");
        text2.textContent = elem.description;
    
        let image = document.createElement('img');
        image.src = elem.urlToImage;
        image.setAttribute = "width,100%";
    
        div.append(text1,text2,image);
        display.append(div);

         div.onclick = ()=>{

        localStorage.setItem("article",JSON.stringify(elem));

        window.location.href = "news.html";
    }

        
    

    })

   
   



    
}

export { apiCall, appendArticles }