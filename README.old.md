# Frontend Take Home Assignment

Hey there! 👋 Thanks for your interest in working with us! The next step in our hiring process is a virtual code interview. Below you will see a code work section. We ask you to record yourself sharing your screen presenting the code developed with Loom (http://loom.com/). Loom is a free video recording software that will provide you links which you will send us. Please send us 1 video link, explaining your code structure.

**Something things to keep in mind:**

- We recommend you do a practice run so that you can get accustomed with Loom's software and our questions.
- Please be sure your audio is clear and your camera is on when you answer the questions. You will need to create a second video that records your screen for the code share.
- Contact me (Jair) if you have issues with the assignment.


# Star Wars character app
Skills that are tested: UI, API integration, and testing.

# Expectations
- We expect you to read the chakra-ui/martial-ui docs, and use their components to create the interface.
- We expect simple and well written components, always using the hooks from React.
- Your components should receive props that should be typed with javascript.


Using a [public API](https://swapi.dev/), display a list of all Star Wars characters using the endpoint “/people”. The API has paging, so the developer must also implement pagination. Also, a simple loader for fetching/refetching data as well as handling the error state (i.e., if the API server is down).
This is how it would read:

For every user, we’d like to display a card with the name of each character along with a random picture for each character (see Picsum photos for random picture inspiration). Each character card should be colored based on their species and have some kind of animation when the user hovers over the card. When we click on a character’s card, more information should appear in a modal about the character.

In the character details modal, we’d like to display information about the person: name as the header of the modal, height displayed in meters, mass in kg, date person was added to the API (in dd-MM-yyyy format), number of films the person appears in and their birth year. We should also fetch information about the person’s homeworld and display its name, terrain, climate, and amount of residents.

# Bonus Features 🚀

In addition to pagination, we’d also like you to implement searching and filtering. 
- To search, the user should enter a character name (partial or complete) and have all matching results returned.
- For filtration, the user should be able to select either the homeworld, film, or species of any character and see results.
- Don’t forget to combine the search with filters.

# Authentication

Implement JWT authentication (with silent refresh when the token expires) with a UI for logging in and out of the app (with a fake username and password). The API itself does not require authentication, so this would have to be mocked.

Add an integration test for testing the modal opens with the correct person’s information.

# Development Instructions

1. Implement motion/animation transitions for the card components. Surprise us by choosing for yourself which aspects to implement.
2. We recommend you follow strictly our React stack including javascript, [Chakra-UI](https://chakra-ui.com/)/[Material-UI](https://mui.com/material-ui/getting-started/), [Framer Motion](https://www.framer.com/motion/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). But it is not a requirement.
3. Time to submit the project is 3 days from the time you receive the project. 1 day grace if you received this task after 3pm IST.



# Delivery Instructions
- Fork this Github repository and add you changes.
- Send a video using Loom answering the proposed questions, explaining your decisions and presenting the code structure.

