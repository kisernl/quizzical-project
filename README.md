# Quizzical - React App Project

- API from - https://opentdb.com/api_config.php
- Figma file - https://www.figma.com/design/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?node-id=0-1&node-type=canvas&t=edfkPiCLnNxB0R23-0

## Requirements

- two screens (1) start & (2) questions (which will also display correct answers when answers are checked)
- pull 5 questions from the OTDB API
- tally correct answers after check answers is clicked
- should be a styled and polished final app

## Hints

- Use html-entities library for decode html entities
- Need to randomly insert correct_answer into an array with incorrect_answers from API objects
- Track selected amnswer index inside each question object for the purpose of allowing only one answer to be selected and to style that answer
