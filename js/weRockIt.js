$(function () {

    $(document).on('submit', '#test-form', submitToMailingList);
    $(document).on('submit', '#sponsorshipEmailForm', submitSponsorForm);

    function submitToMailingList(event) {
        event.preventDefault();
        var form = $('form#test-form'),
            url = 'https://script.google.com/macros/s/AKfycbz0nWMxmjxxguJski_acVi0VDUZBtDAGBxRhIzcjZU65Tedo9I/exec';
        $.get(url, form.serialize())
            .done(function (response) {
                debugger;
            })
            .fail(function () {
                debugger;
            });
    }

    function submitSponsorForm(event){
        event.preventDefault();
        var form = $('form#sponsorshipEmailForm'),
            url = 'https://script.google.com/macros/s/AKfycbzz7ZuItYGczN943eoRWZ3o1-qdv7a0lp27mIneYUm5pl4nBYix/exec';
        $.get(url, form.serialize())
            .done(function (response) {
                debugger;
            })
            .fail(function () {
                debugger;
            });
    }
});


/*


$('#submit-form').on('click', function(e) {
    debugger;
    e.preventDefault();
   /!* var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success(
        // do something
    );*!/
});*/
