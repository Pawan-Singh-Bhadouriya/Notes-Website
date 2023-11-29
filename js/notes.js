// ------------------------search------------------
const search=()=>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById(".card")
    const product1 = document.querySelectorAll(".all-card-item")
    const product2 = document.querySelectorAll(".card-item")
    const product = document.querySelectorAll(".subject")
    const pname = document.getElementsByTagName('p')

    for(var i=0;i<=pname.length; i++){
        let match=product[i].getElementsByTagName('p')[0];

        if(match){
            let text_value = match.textContentt || match.innerHTML ||match.innerText

            if(text_value.toUpperCase().indexOf(searchbox) >-1){
                product2[i].style.display =""; //pehle product2 ki jagah product tha or niche wali properties bhi nhi thi
                // product2[i].style.width="13vw";
                // product2[i].style.position="relative";
                // product2[i].style.left="35%";
                // storeitems[i].style.display="none";

            }else{
                product2[i].style.display ="none";//pehle product2 ki jagah product tha
            }
        }
    }
}

// ----------------hambburger----------------
var hambburger = document.getElementById("hambburger");
var closes = document.getElementById("close");
var vclas=document.getElementById("v-clas");
function openmenu(){
    console.log("Menu clicked")
    header.style.height="12vh";
    header.style.transition="0.5s";
    hambburger.style.display="none";
    closes.style.display="block";
    vclas.style.opacity="100";
}
function closemenu(){
    header.style.height="2vh";
    header.style.transition="0.5s";
    closes.style.display="none";
    hambburger.style.display="block"
    vclas.style.opacity="0";

    
}


   
