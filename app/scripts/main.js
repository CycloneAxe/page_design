console.log('\'Allo \'Allo!');



function showAlert() {
    $("#myAlert").addClass("in");
}
window.setTimeout(function () {
    showAlert();
}, 3000);
function hideAlert() {
    $("#myAlert").removeClass("in");
}
window.setTimeout(function () {
    hideAlert();
}, 6000);