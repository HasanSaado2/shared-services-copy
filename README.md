# services-hub
Meeting Room App

# Publishing the App

## Create Expo account

After creating an expo account setup eas package in your project:
`npm install -g eas-cli`

- Before we can create our first build, we need to adjust some information about our application. To do that, open your code editor (in my case it is Visual Studio Code) and navigate to your app.json file. In here we will have to change the name, which will be the name of your application and the slug, which is a piece of URL that represents your application.
![Screenshot (21)](https://github.com/HasanSaado2/services-hub/assets/129733495/5b2fbf6f-c329-4d3a-8419-bc321512e9ff)

- Once the installation is finished, we can login to our expo account by typing eas login in the same terminal and providing the username as well as the password of the expo account that we have created earlier. (You can test if you logged in successfully by typing eas whoami in the terminal, which should display your username).

- Before we can start creating our first build is to configure the project. We can simply do that by running `eas build:configure` in the terminal, and choosing iOS as our platform. This command will create eas.json file in your project.
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/793a6c2d-a87c-4b3b-93a1-e19c65ebf281)

### Building for IOS

- We can create our build running: `eas build --platform ios`
>  We need to provide application bundle identifier which is a unique string that identifies your application. (if it doesn't exist just select create identifier)
>  ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/12412757-e79b-45e1-880e-7daad10fec5b)

>  Login to your Apple Account
>  ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/c14a3157-b84b-48c7-9c62-e89ca80f3169)

> Generate a new Apple Distribution Certificate. This certificate identifies you and allows you to submit your application to the App Store:
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/80d5d0d3-546e-4ce6-bfaa-8c065991079e)

> Generate a new Apple Provisioning Profile:
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/e6efed98-2d9c-466e-9534-ce78141731bd)

> Select if you want to set up Push Notifications for your project, after which EAS will start building the application:
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/95e4d8f9-7894-4750-a4c8-a2b6e6b4ae3b)

After the build is finished, you can check out the build details in the link that will be provided.

- Go to the app in App Store Connect.
- Upload Screenshots:
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/7d94eea4-9552-448b-a558-99c3672591a2)

- Scroll a bit down and provide:
> - Promotional Text - This will always appear above the description, so one good sentence about your application should be good here.
> - Description - Think about this very well because it's pretty important to give a good idea to the users about your application.
> - Keywords - Also very important, create good keywords that suite your application if you want your app to appear better in the search results.
> - Support URL - If you already have, you can paste the URL either to your website or your privacy policy. If you don't have either of them, don't worry, I will show you how to get your privacy policy URL a bit later in the tutorial.
> - Version - Pretty self-explanatory, you should provide the version of your app, most likely it's going to be 1.0.0 as it is your first release.
> - Copyright - Who owns the copyright to the application.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/3b41edc8-998d-4b1e-9304-5c50c0c3c85e)

- Scroll down even more, and provide some App Review Information for the testers.
> - Sign-In Information (Optional) - If your application has an authorization screen, then you will have to provide login details to your application for the tester. If your application doesn't have any authorization screen, then simply uncheck Sign-In required box.
> - Contact Information - Provide your first name, last name, phone number and email in case a tester needs to contact you.
> - Notes (Optional) - If you need to, you can provide some notes for the tester.
> - Attachment (Optional) - If you need to, you can attach some attachments for the tester.

- In this page we will have to select Version Release approach.
> - Manually release this version - After the application approval, you will have to go to the dashboard and release the application yourself.
> - Automatically release this version - After the application approval, your application will be released automatically right away.
> - Automatically release this version after App Review, no earlier than - You can specify the date at which you want your application to be released automatically.

- Scroll to the top of the screen and click Save button in the top right corner to save the information.
- Click App Information under General on the left side menu.
- Here we will see that some fields are already populated automatically, but some are still empty, we have to fix that:
> - Subtitle (Optional) - If you want, you can add a subtitle to your application.
> - Category - Select which category fits your application the best. You can also select secondary category
> - Content Rights - Click Set Up Content Rights Information, and if your application contains, shows or access any third-party content, then select Yes in the pop-up, otherwise select No and click Done.
> - Age Rating - Click Set Age Rating Across All Platforms, and go through the questionnaire, which will according to the answers automatically generate an age rating for your application.
> - Scroll to the top of the page and click Save.
-  Click Pricing and Availability under General on the left side menu and select price.
-  Click App Privacy under General on the left side menu.
> To create a privacy policy, open this [website](https://app.privacypolicies.com/wizard/privacy-policy) and go through the questionnaire. After you are finished with that, your privacy policy URL will be generated, so just copy it and go back to the App Store Connect, paste it and click save.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/0b2f30e4-eccf-4107-9e32-90728b5e810f)
- Set up data collection practices. To do that, simply click Get Started button in the gray box below and answer to a few questions. (in privacy policy page)
- To save all of this information by clicking Publish in the top right corner.

- In order to submit our build to the App Store Connect, we need to update the `eas.json` file created earlier, to look something like this:
![Screenshot (22)](https://github.com/HasanSaado2/services-hub/assets/129733495/bc83f152-5b81-4da5-bc94-e3af65605475)

- Run `eas submit -p ios --latest` command and select Add a new ASC API Key after which we will have to confirm that we want to generate a new key.
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/12fe0345-0d0e-401d-8c59-26c1318fcc7a)

- EAS will also ask you to login to your Apple Developer Account like before, so do that and that's it, your application will be scheduled for iOS submission
- Once the submission is completed, we can go back to the App Store Connect dashboard and navigate to the TestFlight tab in the top bar menu. (It may take some time to show up and for processing to finish)
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/402f64b5-6ddd-4dce-88e8-82ea7482036b)
- After the processing is finished you will see a warning near your build saying Missing Compliance, click on the Manage button and select Yes if your application use any encryption and No if it does not, then click Start Internal Testing.
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/34803766-b58a-4061-b16d-ec88a59afff0)
- Before we can release our application to the App Store, we need to submit it for the Apple Review and pass it. In order to submit the app for the review, let's go back to the main dashboard screen by clicking App Store in the top menu bar.
- Now we need to scroll down until we find Build section and click Select a build before you submit your app.
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/51bea178-f7b2-4969-b15d-e64d32ab321d)
- In the pop-up window select the build that you want to submit and click Done. After that, scroll to the top of the page and click Add for Review in the top right corner.
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/76b4e99b-3040-467b-b943-fb7964ebd621)
- In the next page we will be able to review the details of the submission and if everything is correct click Submit to App Review.
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/7fb171fe-44ae-4618-bde7-a7136c41c13d)
- We have to wait around 24 hours untill Apple fully reviews our application and approves it.
- Finally, we can release our application to the App Store. Click Release This Version in the top right corner of the App Store Connect dashboard, approve the release in the pop-up.
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/ecc99954-bdd6-4168-a2a9-a50d0b4bb734)

### Building for Android

- We can create our build running: `eas build --platform android`
- Once the build is finished, download the build file from expo
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/71f79755-b25e-4eae-bf4e-e7f75e66710c)
- Go to the dashboard in Google Play Console and click Create app in the main dashboard screen.
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/a84763a7-5950-4366-aee5-3099f9ed08d0)
- In this page we will have to provide some basic information about the application:
> - App name - The name that will be displayed for the users on the Google Play Store.
> - Default language - What default language does your application use.
> - App or game - Select if your application is a game or an app.
> - Free or paid - Select if your application is free or paid.
- It's time to provide more detailed information about the application. To start, in your application dashboard simply scroll until you find a Set up your app tab and click View Tasks dropdown which will expand the list of task that we will have to go through.
![image](https://github.com/HasanSaado2/services-hub/assets/129733495/fcfd3252-1a6a-4ffc-8edb-ad1945a9464a)
> After every step don't forget to click Save button in the bottom-right corner and go back to the main dashboard page after that.
- App Access
> Here you will have to select if your application is restricted based on login credentials or any other form of authentication. If it is, then you will have to provide instructions on how to access them, if it is not, then simply select All functionality is available without special access.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/91b3f000-2d4b-411e-b23d-59548c252e2c)
- Ads
> Here you will have to select if your application contains any ads. If it does, you have to make sure that ads comply with Google ads policy. Also, keep in mind that selecting Yes will show users that your application contains ads.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/553e14ea-6252-4f43-b7a7-aef96b997d6f)
- Content Ratings
> In this section you will have to complete a short questionnaire about your application, after that your application will receive official content ratings. Ratings will be displayed on Google Play Store to help users identify if your app is suitable for them.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/4040fa16-5bb3-4799-a0f2-4db5bb7879eb)
- Target Audience
> In this section simply select the target age group that suits your application and in the next page answer to the question whether your app may unintentionally appeal to children.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/ba9754c8-816e-4ddd-aebd-8f36eeee134e)
- News App
> Simply answer to whether your application is a news application or not.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/e47fe277-4959-4011-a0b1-97ab6c8443b0)
- COVID-19 Contact Tracing And Status Apps
> This section is more relevant to the applications that are somehow related to the COVID-19 and who knows, maybe by the time you are following this guide it's not even there. But if it is, just select all statements that apply to your application.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/496a269d-f012-4334-86ff-500eff5a8082)
- Data Safety
> Follow the instructions to create a privacy and policy doc in the IOS section and paste it.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/39635903-4268-4538-a0bb-452bbcbe2c83)
> In the dashboard scroll to the bottom of the side menu and under Policy tab click App content.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/2199bb09-b5fa-4e3f-9be7-21e51a4ad319)
> In here, click Manage under Privacy policy tab. Then paste the URL that you just copied in the box and click Save button in the right bottom corner.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/41f7aa49-a272-4e87-bf87-7de13dd60a79)
> After the steps above, scroll to the top of the side menu and go to the Dashboard, then click on the Data Safety task where we will be able to continue with data safety section.
> At first, you will be asked if your application collects or shares certain types of data, then if it does just answer to the questions about each type of user data and when you are done simply review, and submit the answers.
- Select An App Category And Provide Contact Details:
> In this section, we will have to provide some more details:
> - App or game - Select whether the application is an app or a game.
> - Category - Select which category fits your application the best.
> - Email address - Email address which can be used to contact you by the users.
> - Phone number (Optional) - Phone number which can be used to contact you by the users.
> - Website (Optional) - URL to your website.
> - External marketing - I recommend leaving the box ticked if you want your application to be advertised outside of Google Play.
- Set Up Your Store Listing:
> Finally, the last step of the set-up! In this section, we will have to provide:
> - App name - The name of your application. Most likely this will be already populated with the correct name
> - Short description - Short description of your application. One good catchy sentence should work very well here.
> - Full description - Long description of your application. Spend some time here to write a good description if you want to increase your downloads.
> - App icon - The icon that will be displayed on the store. (512px by 512px)
> - Feature graphic - A larger banner that Google will display in the store. (1024px by 500px)
> - Phone screenshots - At least two screenshots of your application, I would recommend 4 if you want to be eligible for promotion. You can simply take screenshots from the emulator.
> - 7-inch tablet screenshots - Up to eight 7-inch tablet screenshots. You can take screenshots from the emulator the same way just for a tablet.
> - 10-inch tablet screenshots - Up to eight 10-inch tablet screenshots. Again, you can simply take screenshots from the emulator just for a 10-inch tablet.
- Submitting New App To Google Review:
> Now that we have the application ready, we can start submitting it for the Google Review! First thing that you will have to do is scroll down and find under the Release your app tab Publish your app on Google Play section, then click View tasks dropdown and select the first task.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/a43daf6e-91c9-46e9-9bab-d96a1b895ae1)
- Select Countries And Regions:
> In here, click on the Add countries / regions button in the middle of the screen and select the countries that you want your application to be available on. After doing that, go back to the main dashboard screen.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/eded5abc-bed0-4b2d-9851-6e0264541ca9)
- Create A New Release:
> In this page, click Create new release button in the middle of the screen and provide the required information:
> - App bundles - Here you will need to upload the build that we have downloaded earlier from the expo.dev dashboard.
> - Release name - This will not be shown to the users on Google Play Store, it's just so that you could follow each release easier.
> - Release notes - Add new release notes for users to better understand what this new version added, changed or fixed.
> After providing the information, click Save button in the bottom-right corner and then click Review release to check if your release doesn't have any errors. If everything is good, simply click Start rollout to Production in the bottom-right corner of the screen and confirm the rollout in the pop-up.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/41089bb8-e338-4b1f-9029-0ad2409a1920)
> That's it, you have submitted your application to the Google Review! Now it will take around 24 hours for Google to review your application and if everything meets their guidelines, your application status will be changed from In Review to Available on Google Play, and it will be automatically listed on the Google Play Store.
> ![image](https://github.com/HasanSaado2/services-hub/assets/129733495/9944489e-e2b0-48c3-9fcf-5fc1b0163d97)
#### Note: when updating the app don't forget to increment the versionCode and version in `app.json` file.
#   S h a r e d S e r v i c e s - A P P  
 