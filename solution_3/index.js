
let htmlContent =""
$(function(){
    
    $(".action").on("click", function(){
        let select = $('select.mySelect');
        let fNum= $("input[name='fNum']").val()
        let sNum= $("input[name='sNum']").val()
        

        for (let s= fNum; s < parseInt(sNum)+1; s++) {
            htmlContent+=`<option value=${s}>${s}</option>`  ;      
        }
        $(select).append(htmlContent)
    })
})
