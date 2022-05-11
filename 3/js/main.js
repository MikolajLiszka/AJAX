const btn = document.getElementById("btn");

$(document).ready(function loadData() {
    $("#btn").click(function () {
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php', function(data) {

            let userId = $('<p></p>').text('User id: ' + data.userId);
            let id = $('<p></p>').text('User id: ' + data.id);
            let title = $('<p></p>').text('User id: ' + data.title);
            let body = $('<p></p>').text('User id: ' + data.body);
            let hr = $('<hr>');

            $('body').append(userId);
            $('body').append(id);
            $('body').append(title);
            $('body').append(body);
            $('body').append(hr);
        })
    })
});