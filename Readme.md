
# Spotlight Shops
## React Native Test Project

Spotlight is your own unique shop. Where you can
- Showcase all your products easily
- Stream Live and hold product launch event
- Earn from every live stream and each sale

Giving Control to Creators

Connecting Creators & Consumers

Let your followers buy directly from your videos and interact with you live.

![App Demo 1](https://media.giphy.com/media/N3WAKAvwsWcNDopPmZ/giphy.gif)
![App Demo 2](https://media.giphy.com/media/T5RwSjqCLfZqSO8OOz/giphy.gif)
![App Demo 3](https://i.ibb.co/rQ1ZZsL/Screen-Shot-2022-04-13-at-1-13-04-AM.png)

# Contents

- [Project Requirements](#-project-requirements)
- [Tech Stack](#-tech-stack)
- [Workflow](#-workflow)
- [How to Install and run](#-how-to-install-and-run)

# Project Requirements

- Use Expo managed workflow and come up with deeplinking solution which will work with EAS IOS builds.
- Implementing AASA file adding it to associated domains
- Using any 3rd party library that could work (firebase, branch, etc)

# Tech Stack

- Expo
- React Native
- Firebase Hosting (Used for assetlinks.json(Android) & AASA file(iOS) hosting)
- Firebase Dynamic Linking

# Workflow

- A universal link generated with Deep Linking to redirect users from anywhere to our app.
- If App is already installed, universal link will redirect inside App.
- If App is not installed, it will be redirected to App on Play Store(Android) or App Store(iOS)

# How to install dependencies and run

### Follow the following instruction to get this app up and running on your local machine

- Clone the reposity [Spotlight Shops Deep Linking Test Project](https://github.com/EngFaisalWaleed/spotlight-shops).

```
git clone https://github.com/EngFaisalWaleed/spotlight-shops
cd spotlight-shops
```

- Node v14

- EXpo CLI

```
yarn global add expo-cli
```

- Install packages/dependencies
```
yarn install
```
- Run app
```
expo start
```

It will start app in expo development mode. To access deep link. Go to browser and hit

```
exp:127.0.0.1:19000 - Or where your app is running, it will be prompted after expo start
```

## Generate Shareable Universal Link

You can make a following request in POSTMAN to generate a universal link
```
curl --location --request POST 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyCMUTGBoxUhZjwJDhPHXS7oF-fLqGvnY88' \
--header 'Content-Type: application/json' \
--data-raw '{
  "dynamicLinkInfo": {
    "domainUriPrefix": "https://spotlightshops.page.link",
    "link": "https://spotlight-shops.firebaseapp.com/",
    "androidInfo": {
      "androidPackageName": "com.enggfaisalwaleed.SpotlightShop"
    },
    "iosInfo": {
      "iosBundleId": "com.enggfaisalwaleed.SpotlightShop"
    }
  }
}'
```

It will result in following format

![Request Response](https://i.ibb.co/4Zv9J2w/Screen-Shot-2022-04-13-at-1-40-26-AM.png)

For now you can skip the warning as the App is not hosted. Important values are

- Shortlink: ShortLink is the Universal link that we can share with other apps.
- PreviewLink: PreviewLink contains a flow chart created by Firebase to visualize the flow of the app.

