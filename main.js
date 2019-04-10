$('#submit').on('click', function (e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function (i, radio) {
        return $(radio).val();
    }).toArray();

    $.getJSON("data.json", function (data) {
        let num_qs = data.questions.length;
        modal.style.display = "block";
        if (choices.length != num_qs) {
            modal.style.display = "block";
        }
        else {

            freqs = {};
            curr_max_val = 0;
            curr_max_choice = choices[0];
            for (var choice in choices) {
                choice = choices[choice]
                if (freqs[choice] === undefined) {
                    freqs[choice] = 1;
                    if (1 > curr_max_val) {
                        curr_max_val = 1;
                        curr_max_choice = choice;
                    }
                }
                else {
                    freqs[choice] = freqs[choice] + 1;
                    if (freqs[choice] > curr_max_val) {
                        curr_max_val = freqs[choice];
                        curr_max_choice = choice;
                    }
                }
            }

            $.getJSON("data.json", function (data) {
                let el = data.outcomes[curr_max_choice[0]];
                $('#result-question').text(`${data.title}`);
                $('#result-you-got').text(`You got: ${el.text}`);
                $('#result-description').text(`${el.description}`);
                $('#result-img > img').attr("src", `${el.img}`)
                $('div.result').show();
            });

        }
    });
});

// below modal block from w3schools
var modal = document.getElementById('myModal');
var btn = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// end w3schools credit


// DANGER: BAD CODE
// listen for clicks on the document and grey out non selected boxes
$(document).on("click", function (event) {
    $(event.target.parentNode.parentNode.parentNode).children().each(function () {
        if ($($(this)[0].children[0].children[0])[0] === undefined) {

        }
        else {
            if (!$($(this)[0].children[0].children[0])[0].checked) {
                $($(this)[0].children[0].children[1]).css("opacity", "0.3");
            }
        }
    })
});


// build the quiz items
$.getJSON("data.json", function (data) {
    $('#quiz_title').text(`${data.title}`);
    data.questions.forEach((question, i) => {
        $(`
            <div id= "${question.question_id}" class="question">
            <div class="question-header-div">
            <h2 class="question-header">${question.question_name}</h2>
            </div>
            
            `).insertBefore("#submit");
        question.answers.forEach((answer, ia) => {
            if (answer.text == "") {
                $(`#${question.question_id}`).append(
                    `
                <div class="question-item">
                    <label class="option">
                        <input type="radio" name="${question.question_name}" value="${answer.outcome}" />
                        <img src="${answer.img_url}" />
                    </label>
                </div> `
                );
            }
            else {
                $(`#${question.question_id}`).append(
                    `
                <div class="question-item">
                    <label class="option">
                        <input type="radio" name="${question.question_name}" value="${answer.outcome}" />
                        <h1 class="question-text-choice"> ${answer.text} </h1>
                    </label>
                </div> `
                );
            }

        });
        $(`</div>`).insertBefore('#submit');
        $(`#${question.question_id} > .question-header-div`).css("background-image", `url(${question.question_img_url})`)
    })

});