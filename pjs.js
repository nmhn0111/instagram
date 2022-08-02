document.addEventListener("DOMContentLoaded",
    function(e){
        let wow = document.querySelector("#wow")
        let button = document.querySelector("input")
        let _wow = wow.textContent
        
        button.addEventListener("click",
            function(e){
                console.log(typeof(_wow))
                console.log(_wow)
                wow.innerHTML = "<input value=" + _wow + "></input>"
                console.log(wow)
            }
        )
    }
)
