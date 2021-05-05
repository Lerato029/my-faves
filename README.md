# Restful Api and React

### Full-Stack Web App with React and Express

**This project was created with React.js, Node.js and Express. It is a great reference for anyone who wishes to understand how to run an external API from the back-end**

## `Table of Contents`  

[Installation](#installation)  
[Manual](#manual)  
[Security](#security)  
[Deployed App Via Heroku](#deployed)  
[Credits](#credits)  

<a name="installation"/>  

## Installing and Running Project:
First Install zip folder from GitHub repository : https://github.com/Lerato029/my-faves extract and then open the terminal.

### Running the command line:
Before runnning the terminal please make sure you are on the root directory of this project.
You may type in the following to install and then run the app:

``` bash
# Install dependencies for the server
npm install

# Install dependencies for the frontEnd
npm run frontEnd-Install

# Run the frontEnd & server with concurrently
npm start
![005_start app](https://user-images.githubusercontent.com/79574031/117142857-7b55c500-adb0-11eb-928b-bbfe929a95b5.PNG)


```

<a name="manual"/> 

## Manual:
![005_1-landing](https://user-images.githubusercontent.com/79574031/117142911-87da1d80-adb0-11eb-980f-04cef3a673a6.PNG)

After opening the app, submit the form after selecting a search category and typing in a search term.
![005_2-Submit form](https://user-images.githubusercontent.com/79574031/117142938-91fc1c00-adb0-11eb-8cae-aca56adda96e.PNG)

A vertical menu pops up and you can then select any item to add to your collection by clicking add.
![005_3-Select item from vertical menu](https://user-images.githubusercontent.com/79574031/117143201-df788900-adb0-11eb-9c25-48e8de742a31.PNG)
![005_4-View Collection](https://user-images.githubusercontent.com/79574031/117143338-02a33880-adb1-11eb-98ec-423d3de0f55c.PNG)

Any item can be deleted by clicking on delete.
![005_5-Delete](https://user-images.githubusercontent.com/79574031/117143423-1cdd1680-adb1-11eb-8950-dd2a34a65689.PNG)

The App is also responsive:
![005_6-Responsive](https://user-images.githubusercontent.com/79574031/117143467-2cf4f600-adb1-11eb-90e9-d909acff3852.PNG)


<a name="test"/> 

## Testing The App:
To test the frontEnd directory type cd frontEnd in the terminal and then npm test. This will result in the following output:
![001_Running test on frontEnd](https://user-images.githubusercontent.com/79574031/117141494-e3a3a700-adae-11eb-9575-2e134474bc87.PNG)
The tests incoporate a snapshot of the Collection.js child component and a unit test of the fetch method.

To test the index.js module in the back-end return to the root directory and then type npm run server. On another terminal type npm test - the server needs to be ran to test the requests and reponses.
![002_run backEnd](https://user-images.githubusercontent.com/79574031/117141807-439a4d80-adaf-11eb-9b2b-42654c841017.PNG)
![003_test backEnd](https://user-images.githubusercontent.com/79574031/117142507-126e4d00-adb0-11eb-92ac-26f126ba8c82.PNG)
Test is run with mocha and chia and tests the status code, if there's an error returned and the body.

<a name="security"/> 

## Security:
To Secure my code I've used helmet to secure my code. No API key were required for this project thus there was no need to hide them.
![004_use Helmet](https://user-images.githubusercontent.com/79574031/117142533-1bf7b500-adb0-11eb-8524-0db3f36e3108.PNG)



<a name="deployed"/> 

## Deployed Version:

<a name="credits"/> 

## `Credits`

###References
Apple Inc., 2020. Apple Services Performance Partners. [Online] 
Available at: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
[Accessed 28 March 2021].

Peacock, T., 2019. Picture This: The Best Illustrated Music Books. [Online] 
Available at: https://www.udiscovermusic.com/wp-content/uploads/2016/03/1000x600-best-illustrated-music-books-web-optimised.jpg
[Accessed 02 March 2021].



- Author: [Lerato Mokgwabona](https://github.com/Lerato029)
