# Youtube client app

## Deployment: [Link](https://youtube-client.vercel.app/main)

![image](https://github.com/AndrewMotevich/youtube-client/assets/101500007/27ccba3d-3692-48a7-9455-886225e12745)


<strong>
<details>
 <summary> Credentials for admin page:</summary>
  Login: (any emeil: example@example.com)
 
  Password: (any password with numbers, uper/lover case and special character)
</details>
</strong>

## Features: 
  - search vidos from youtube Api
  - get info about vidos
  - add your custom video cards (Push the user Icon after login)
  - filter result by search query, creation date, views count

## Used: 
  - Angular
  - Angular Material
  - NgRx
  - NgRx/effects
  - RxJs
  - ngneet/until-destroy

## Description: 
Here is a simple project wich demonstrate how to use NgRx, RxJs and youtubeApi.

Youtube api have a quota for use (10000 response queries or 200 requsets pre day). 

If you rich this limit the aplication will turn to the mock data and you will not search new videos.

## NgRx has:
### store with two models:

1. youtubeCards []
2. customCards []

### two selectors:

1. customCardsSelector
2. youtubeCardsSelector

### one effect to get youtube cards from API

### actions:

- add customCards
- add youtubeCards
- get youtubeCardsFromApi
