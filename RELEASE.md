# Release Procedures

1. Update [CHANGELOG.md](https://github.com/axelclark/metroAppIOS/blob/master/CHANGELOG.md) with next release number
2. Update version in [app.json](https://github.com/axelclark/metroAppIOS/blob/master/app.json)
3. Push changes to `master`
4. Add new [release](https://github.com/axelclark/metroAppIOS/releases) on GitHub
5. Save new snapshots for App Store
6. Run `exp build:ios` from Shell
7. After the command completes it will provide a url to downloard the app file
8. Now add the build with Xcode
    * From the Xcode menu scroll to Open Developer Tool and Choose Application Loader from the menu
    * Click choose and select the build that you downloaded earlier from the expo link
9. Log in to [App Store Connect](https://appstoreconnect.apple.com/)
10. Go to most recent `iOS App` then `+ Version`
11. Add `What's New in This Version`, using `-` for each bullet
12. Update screen shots:  5.5-Inch Retina Display `1242 x 2208` pixels for portrait
13. Once build is done processing, add build to new version and submit for review
  
Procedures from [How to Deploy a Create-React-Native-App to the App Store](https://codeburst.io/how-to-deploy-a-create-react-native-app-to-the-appstore-229a8fa36fb1)
