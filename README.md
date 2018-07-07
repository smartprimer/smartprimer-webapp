# Smart Primer Application

This is the main smart primer application. It is developed as a web application and deployed to tablets using Cordova.

## Branches

Master - the one merged with the bookbuddy automatic chatbot. Deprecated now. Please use the bookbuddy repo instead.

Cordova - the candy man story with the woz interface.

Homescreen - the old "add to homescreen" web page. Decrecated.

## Wiki

https://github.com/smartprimer/smartprimer-webapp/wiki

## Hosting 

The web app is hosted at http://smartprimer.org/ (contact Sherry for server username and password if you want to access the server)

## Installation 

#### Add to Homescreen (Deprecated)

Open the website above (http://smartprimer.org/) from the Chrome browser on a Android tablet. Click the setting button in the browser and choose "Add to Homescreen". This will automactially turn the website to an application on your Android desktop. You can start to play with the application! Make sure to turn on the volume.

#### Cordova (Recommended)

Make sure you have all the requirements satisfied. Connect your tablet with your computer. Go to the cordova folder and run `cordova run android -device`. To build it, run `cordova build android -device`

## Cordova Requirements (for Mac)

1. Install `npm` if you don’t have it. The recommended way is to download [Node.js (9.6.1 current)](https://nodejs.org/en/).

2. Follow the [instructions](https://cordova.apache.org/#getstarted) to install `Cordova`. (Stop when you successfully install Cordova. You don’t need to create a new cordova repository.)

3. Install `Android SDK`. The recommended way is to install [Android Studio](https://developer.android.com/studio/index.html)

4. Check your `JDK` version by typing `java -version`. If it’s not 1.8, uninstall it ([uninstallation instructions for JAVA](https://docs.oracle.com/javase/8/docs/technotes/guides/install/mac_jdk.html#A1096903) and [JDK]( https://www.java.com/en/download/help/mac_uninstall_java.xml)) and install [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

5. Enable the [developer mode](https://www.androidcentral.com/how-enable-developer-settings-android-42) for your android device.

6. Go to the project folder and run `cordova run android -device`. Install corresponding missing packages if you encounter any error messages.

7. (Optional) If you want to run an emulator on your computer. You need to create one using AVD Manager. Instructions are [here](https://developer.android.com/studio/run/managing-avds.html). 

8. (Optional) If it's the first time you install Android Studio on your computer, you might encounter an error message `Failed to find build tools revision 26.0.2`. See solutions [here](https://stackoverflow.com/questions/47721952/how-to-solve-failed-to-find-build-tools-revision-26-0-2).


