# React Native + ReactJS with react-native-web Template
Have you ever confused how to start building your cross platform app using React with shared code-base? 
When you use `react-native init` command, the project cannot be initiated with `npx create-react-app` and vice versa.

That's why I created this template to start building your app complete with react-native and reactjs in a single project.

This template already include tools to access `react-native`, and `react-scripts` to start Metro bundler in specific platform.

## Why not use Expo?
You may want to checkout these great article!  
https://apiko.com/blog/expo-vs-vanilla-react-native/
and many more. Just Google it :)

> Some of them, you can add modules that written in native code, such as bluetooth devices, or choosing your own custom platform for push notification.


## How to use it?
1. Stop using `react-native init` or `npx create-react-app`.

2. To create new project, clone this repository  
`$ git clone https://github.com/mardikarifqi/react-native-web-template.git`

3. Run `npm install`  
This will automatically install all react package, including `react-native-web`.

4. Run using our predefined command to start/build this app.  

    Description          | Command  
    -------------------- | -------------  
    Run on Android       | `$ yarn run:android`  
    Run on iOS           | `$ yarn run:ios`  
    Start Metro Bundler  | `$ yarn run:metro`  
    Run on Web           | `$ yarn run:web`  
    Build Web            | `$ yarn build:web`  

5. Rename this project using `react-native-rename`. (Install this tools first `$ npm install -g react-native-rename`)

6. If you want more power, you still can use XCode or Android Studio to open the `android` or `ios` folder to compile your app.

## Directory Structure
> **Do not change the existing directory** as react tools is using this structure as the entry point.  

- `/app` folder is a symlink of `/src/app` where you put all of your applications code in here.   
  The symblink created when `npm install` is called. 

- The rest, you can specify on your own like `css`, or `assets`.

## What's the advantage
**Of course shared base-code!**

If you run this template on Android, and Web at the same time, you will see the same UI. That UI is controller by `/app/App.js` which utilize `react-native-web`.

Another way to do that is to split your file into `.native.js`, and `.web.js`, and more. Webpack by default will choose depends on the platform. You can Google it :)

## Will this template gets an update?
Currently, it's based on what's the package.json said.
I'll try my best to keep up with `react` stable release :)