# Read Me (in progress)

# Fracture
Code Fellows: Code 201: Foundations of Software Development: Class: 201D19: Week 4 Project
February 24 - March 3, 2017
https://www.codefellows.org/courses/code-201/foundations-of-software-development/

## Description

Fracture is a browser role playing game. The player has found itself in a time conundrum where a mysterious time traveling robot has suddenly appeared. The robot is responsible for damaging time and was broken in the process. The robot tells the player that time is in chaos, "my Subatomic-Unilateral-Concatenating-Kaleidoscope has ruptured the delicate balance of space time." As a result, historical characters, monsters and locations have been all mixed up in the present time line.

The player has to travel through time warp-holes to retrieve the robot's missing parts and reassemble the robot. The player must help the robot fix itself by traveling to at least 3 different time periods where it’s parts got lost. After the robot is reassembled it fixes the time conundrum and the story ends. Upon repairing the robot, the player helps restore time and saves the universe.

## Installation

Installation: Installation is the next section in an effective README. Tell other users how to install your project locally. Optionally, include a gif to make the process even more clear for other people.

## Usage

Usage: The next section is usage, in which you instruct other people on how to use your project after they’ve installed it. This would also be a good place to include screenshots of your project in action.

## Contributing

Contributing: Larger projects often have sections on contributing to their project, in which contribution instructions are outlined. Sometimes, this is a separate file. If you have specific contribution preferences, explain them so that other developers know how to best contribute to your work. To learn more about how to help others contribute, check out the guide for (setting guidelines for repository contributors)[https://help.github.com/articles/setting-guidelines-for-repository-contributors/].

## Credits

Time Wizards
- [ ] Glen Pham
- [ ] Kurt Maurer
- [ ] Danny McGill
- [ ] Brianna Burrows
- [ ] Michael Padget

Credits: Include a section for credits in order to highlight and link to the authors of your project.

# License

https://github.com/kurtrm/time-wizards/blob/master/LICENSE

License: Finally, include a section for the license of your project. For more information on choosing a license, check out GitHub’s licensing guide!


# Format Example

1. Landing Page
  - [ ] Title: A large header tag at the top of the page.
  - [ ] Project Cover Image: An image tag just below the title.
  - [ ] Input Information Text: A paragraph tag below the image telling the user what to do.
  - [ ] Name Input Field: An input field tag below the information text that takes text input.
    - This input will be saved in localStorage to be used throughout the game.
  - [ ] Submit/Begin Button: An input button tag below the input field.
    - The game will not allow progression without valid text input being given to the input field above.

# Overview
To create a browser RPG with an interesting and engaging story that has a clear protagonist with a problem that must be solved by the player completing various challenge questions.

# Storyline
The player has found itself in a time conundrum where a mysterious time traveling robot has suddenly appeared as well as found the current time line in chaos . The robot is responsible for damaging time and was broken in the process. The player must help the robot fix itself by traveling to 3 different time periods where it’s parts got lost. After the robot is fixed it fixes the time conundrum and the story ends.

# MVP
1. Game will be displayed statically with a linear storyline across 5 different HTML pages
2. Username, score will be stored and retrieved in local storage
3. 10 total challenge questions, with 9 storyline questions and 1 final challenge question
4. Questions will be code based as well as historical based
5. Display ending and track user score as well as calculate user score when game is finished
6. Restart option for when user fails to complete a challenge

# Problem domain explanation
We drew out our problem domain in the diagram attached. We started first by dividing all the content into 5 different HTML pages. The first page will display our title, as well as a brief introduction and a user input form to take in the player’s name. The second page will dive deeper into the story and introduce the main problem and robot character. The second page will also give details on how to play as well as the main objectives that needs to be completed.

The third page is our main game page which will contain majority of the game’s logic. The third page will have 3 portal images each sending the player to a unique time period with it’s own challenges to solve. Once the player completes all 3 objectives the portal images will disappear and the game will proceed.

The fourth page will be the game over page which will change based on how the player proceeds. If the player fails to complete the challenges a game over message will appear with an option to restart. If the player completes all the challenges then a unique ending will be rewarded to the player. The fourth page will also display the user’s score and provide a link to the final credits page.

The fifth page will give brief credits as well as a short bio on each team member.
