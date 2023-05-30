let body = document.getElementsByTagName("body")[0]


function changeColor(){
    setTimeout(function(){
        body.setAttribute("class","bg")
    },5000)
}

changeColor()