# MVP

1. Landing Page
  - [ ] Title: A large header tag at the top of the page.
  - [ ] Project Cover Image: An image tag just below the title.
  - [ ] Input Information Text: A paragraph tag below the image telling the user what to do.
  - [ ] Name Input Field: An input field tag below the information text that takes text input.
    - This input will be saved in localStorage to be used throughout the game.
  - [ ] Submit/Begin Button: An input button tag below the input field.
    - The game will not allow progression without valid text input being given to the input field above.
2. Instructions Page
  - [ ] Robot Opening Story Div.
    - An image of the robot to the left.
    - The robot then explains itself and the events unfolding in the middle.
    - A button that reveals the next div is to the right.
  - [ ] Robot Objectives Div.
   - An image of the robot to the left.
   - The robot explains what objectives the player has for the game in the middle.
   - A button that reveals the next div is to the right.
  - [ ] Robot How To Play Div:
    - An image of the robot to the left.
    - The robot explains the controls and how to play the game in the middle.
  - [ ] A play button is shown in the footer of the page that takes the player into the game.
3. Select Level Page
  - [ ] Displays an image of the historical figure at the top left.
  - [ ] Displays the historical figure's introduction text and informs the user to select a level.
  - [ ] An image of the location is shown in the middle.
  - [ ] The location name is displayed below the image.
  - [ ] Clicking on either the image or the name will have that location selected for the player to go to.
  - [ ] Player is taken to combat page of the location clicked.
4. Combat Page
  - [ ] The image of the location is displayed at the top.
  - [ ] The Player Div:
    - Player name at the top.
    - Player image.
    - Player dialog box.
  - [ ] The Historical Figure Div:
    - Historical Figure name at the top.
    - Historical Figure image.
    - Historical Figure Dialog.
  - [ ] A horizontal divider splits the top half of the page ( character info ) from the bottom ( combat info ).
  - [ ] Question Div:
    - Gets filled with text for the question being asked.
    - Resets for each new question.
  - [ ] Answer Choices Div:
    - Four total answer choice radio buttons.
    - Four total answer choice texts to the right of their respective radio buttons to indicate what answer it is.
    - If a user clicks the radio button for an answer, take that as their input for that question and compare it to the correct answer.
  - [ ] Answer Response Div:
    - Gets shown after a question has been answered.
    - Will inform the player whether they got the question correct, and if not inform them of the correct answer.
  - [ ] Have the questions asked go in the order: Attack, Defend, and Attack.
    - The attacks are coding questions randomly chosen from an array.
    - The defense is a historical question randomly chosen from an array.
  - [ ] The answers increment a score counter.
  - [ ] Have the final results of the level encounter go one of two ways.
    - If the player got one of the questions right, have them more forward and not lose.
    - If the player got none of the questions right, have them go to the results screen indicating they lose.
5. Results Page
  - [ ] Confirmation of Win/Lose text at the top of the screen.
  - [ ] The player's score is in the middle of the page, in the format: "(answersRight) / (totalAnswers)".
  - [ ] The previous player's score is displayed just below the player's current score.
  - [ ] A restart button on the bottom left that goes to the landing page.
  - [ ] A credits button on the bottom right that goes to the credits page.
  - [ ] The score is saved in localStorage for later comparison.
6. Credits Page
  - [ ] Credits header at the top of the page.
  - [ ] Five Developer Divs:
    - An image of the developer to the left.
    - Text describing them to the right.

# Stretch Goals
