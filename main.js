$('#submit').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

    // console.log(choices[0]);

    freqs = {};
    curr_max_val = 0;
    curr_max_choice = choices[0];
    // console.log(curr_max_choice);
    for(var choice in choices){
        choice = choices[choice]
        console.log(choices);
        if (freqs[choice] === undefined){
            freqs[choice] = 1;
            if (1>curr_max_val){
                curr_max_val = 1;
                curr_max_choice = choice;
            }
        }
        else{
            freqs[choice] = freqs[choice] + 1;
            if (freqs[choice]>curr_max_val){
                curr_max_val = freqs[choice];
                curr_max_choice = choice;
            }
        }
    }
    // console.log(curr_max_choice);

    $('div.result > h1').text("you are " + curr_max_choice + "!");
    $('div.result').show();
    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
    // you'll need to do some calculations with this
    // a naive approach would be to just choose the most common option - seems reasonable
  });

  // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}