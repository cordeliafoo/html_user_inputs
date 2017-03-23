$(document).ready(function () {
  var $form = $('form')
  $form.on('submit', function (e) {
    e.preventDefault()
    // alert('form is submitted')
    var arrInputs = ($(this).serializeArray())

    var $h1 = $('h1')

    var testArray = arrInputs.map(function (input) {
      return input.value
    })
    var nameEmail = testArray[2] + ', ' + testArray[3]
    $h1.text(nameEmail)
    //  $h1.text(test)
  })
})
