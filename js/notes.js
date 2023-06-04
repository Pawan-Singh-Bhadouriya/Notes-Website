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
                product[i].style.display ="";
            }else{
                product[i].style.display ="none";

            }
        }
    }
}

// const submit=()=>{
//     alert("your order have been placed");
// }