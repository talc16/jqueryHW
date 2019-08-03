

$(function(){
    counter=1
    $(".action").on("click", function(){
        $(".col-md-4").each(function(){
            $(this).append(counter);
            counter++
        })
    })
})
