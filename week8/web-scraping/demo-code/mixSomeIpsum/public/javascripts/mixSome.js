$(document).ready(function(){
    $('#ipsum-form').submit(function(event){
        event.preventDefault()
        $('#mix-btn').addClass('spinning')
        $.ajax({
            method : 'POST',
            url    : '/api/mixsomeipsum',
            data   : $(this).serialize()
        }).done(function(data){
            $('#ipsum-output').text(data)
            $('#mix-btn').removeClass('spinning')
            $('#mix-btn').text('Re-mix')

            console.log(data)
        }).fail(function(data){
            $('#mix-btn').removeClass('spinning')
            $('#ipsum-output').text('Something went wrong...')
            console.log(data)
        })
        // console.log($(this).serialize())
    })
})