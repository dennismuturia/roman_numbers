$(document).ready(function() {
  $('form#roman').submit(function(event) {
    /* This is a roman Number converter
    written by Dennis Muturia
    */
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'V', 'IX', 'IV', 'I']

    var input_c = parseInt($('input#inputt').val())

    var finalres = ''

    if (input_c < 3999) {
      for (var i = 0; i < numbers.length; i++) {

        while (numbers[i] <= input_c) {

          finalres += romans[i]

          input_c -= numbers[i]

        }
      }
      alert(finalres)
    } else {
      alert("This cant be done")
    }


  })
})
