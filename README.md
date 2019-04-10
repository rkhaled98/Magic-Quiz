# Magic Quiz

## What is this?

Modeled off of the BuzzFeed style of quizzes, this simple website dynamically constructs a similar type of quiz given a json file containing details about the quiz

## How do I create my own quiz data?

If you want to make your own quiz, simply create a data.json file modeled off of the sample one provided in the repo [here](https://github.com/rkhaled98/Magic-Quiz/blob/public/data.json). Provide a "title", a set of possible "outcomes", and  when you make your "questions", map each "question" in "questions" to a set of  "question.answers" which has some text describing the answer, an optional image instead of text, and a mapping to a certain outcome. The scoring method is simple: each selected answer is mapped to a certain outcome, and the majority outcome wins.


## How do I take my quiz?

With the data.json file created as described above, and with the same format as the sample one provided in the repo [here](https://github.com/rkhaled98/Magic-Quiz/blob/public/data.json), run `python -m SimpleHTTPServer 9000` or `python3 -m http.server` depending on your version of Python. Then visit the localhost port as selected by the python script.


