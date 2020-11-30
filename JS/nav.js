$('.link').hide();
$('#burger').click(() => {
    console.log("Fold / Open")
    $('.link').slideToggle(900);
});
