$(function() {
    $(".devour!!").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");

        var newDevoured = {
            devoured: newBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    })
})