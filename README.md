# Mario Kart Builds Tool

## This tool allows you to dial in your Mario Kart 8 character/kart/wheels/glider builds to any of the traits you would like to optimize.

## Overview
The UI was built with React for routing/templating and TailwindCSS for styling. The api is a Node server built with Express.

## Demo
The homepage prompts greets users with some Mario Kart specific custom styling and prompts them to select a trait to optimize on. Users have the option to select one of 7 stats to optimize: Speed, Acceleration, Weight, Handling, Traction, Mini-Turbo, and Balanced (the builds with the most balanced ratings overall, this would be considered the "best" builds generally).

![Screen Recording 2023-03-12 at 07 20 08 PM](https://user-images.githubusercontent.com/99948055/224584103-fd24de6e-aaec-47d1-8fac-b808f32983b6.gif)


After selecting a trait and submitting the form, a table will display the top 10 build combinations - character, kart, wheels, and glider - to optimize that particular stat.

<img width="1105" alt="Screen Shot 2023-03-03 at 11 15 49 AM" src="https://user-images.githubusercontent.com/99948055/222787060-70682bfc-6265-4fce-bd73-71a6b3a8a14a.png">


## API Design
The app uses excel data containing the build combinations with their relative rating on each of the major stats. There are two routes that can be hit depending on which input the user selects. If the user opts to see the best "balanced" builds, the `fetch()` call on the frontend will hit the `/balanced-builds` route, which will sort the builds by calculating the sum of the product of each of the attribute ratings for a particular build. This way, the build with the most balanced combination of attributes will top the ranking, and not just a build with a really high rating in one metric. 

If the user selects an attribute other than "Balanced", the `/builds` route will be hit and returns the cleaned excel data and is then sorted accordingly.

