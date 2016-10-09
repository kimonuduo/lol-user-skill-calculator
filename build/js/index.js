$("#login_form input").keypress(function(e) {
  if (e.keyCode == 13) {
    $(this).closest("form").submit();
  }
});

function testJS() {
    var b = document.getElementById('name').value,
        url = './result.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}