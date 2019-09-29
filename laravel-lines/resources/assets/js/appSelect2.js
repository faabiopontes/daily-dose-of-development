$(document).ready(function () {
    console.log('select2');
    $("#select2").select2({
        "language": "pt-BR"
    });
    $('#select2').on('change', function (e) {
        let selectedOptions = $(this).val().length;
        console.log(selectedOptions);
        $("#numberSelectedLetters").html(selectedOptions);
    });
    $("#openSelect").on("click", function () {
        console.log("openSelect");
        $("#select2").select2("open");
    })
});