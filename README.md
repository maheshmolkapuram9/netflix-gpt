#Netflix-gpt

-created recat app
-configuraged tailwind css
-configured routing
-created header, login & signup forms
-login & sign up form validation.
-created and linked firebase projet
-integrated signin and signout with firebase
-created redux store with userSlice
-integrated update profile and redirects to the browse page
-handled sign out
-handled loading state during async operation in signin,signout & signup.
-Browse Page (all movies)
--Main Container (single Movie)
---Video Container
---Title Container
--Secondary Container(all movies)
---MovieLists
----Moviecard

-GPT toggle button
--created gptSlice to manage GPT related state
--built a gpt search form
--implemented a language toggle feature in GPT search page
--Configured OpenAI
--created .env file to store important information including OpenAI_Key
--integrated OpenAI endPoints for movie suggestions
--given a input to openAI endpoint to give names of only 5 movies
--coverted 5 movies to an array
--used TBDB movie search endpoints to generate the movies data.
--stored movies data in GPT slice state and used re-usuable components to show the UI.

#features
-login/logout forms
-form validation
-if loggedin
redirect to - Browse page
-header
-trailer in the background(random one from movies list everytime)
-title, description and play buttons
-lots of movie suggestions (PlayingNow, TopRated, Upcoming, Popular,)
-horizontal scroll
-gpt features
-multi lunguage options in GPT page
-GPT search bar
-AI movie suggestions with the help of OPENAI endpoints
