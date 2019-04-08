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