$(function(){
    $(".action").on("click", function(){
        let fName= $(this).closest("tr").find("input[name='fname']").val()
        $(this).closest("tr").find("#showName").text(fName)
        $(this).closest("tr").find("input[name='fname']").hide()
    })
})
