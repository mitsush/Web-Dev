let input=document.querySelector('#input')
let list=document.querySelector('#list')

input.addEventListener("keydown",function(event){
    // if(event.key=="Enter"){
    //     if(this.value===''){
    //         alert("Enter an input");
    //     }else{
    //     addItem(this.value)
    //     this.value="";
    //     }
    // }
    if (event.key == "Enter") {
        addItem();
    }
})
function addItem()
{
    let inputValue = input.value.trim();

    if (inputValue === "") {
        alert("Enter an input");
        return;
    }

    let listItem=document.createElement("li");
    listItem.innerHTML=`${inputValue}<i></i>`;

    listItem.addEventListener("click",function(){
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })

    list.appendChild(listItem);
    input.value = "";
}