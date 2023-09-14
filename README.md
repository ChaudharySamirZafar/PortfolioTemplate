# Portfolio Template

This website was initially created for myself. I created the application using tailwind and next.js.
To change the data presented on the website, it's an easy process. So, I decided to allow others to reuse the application.

## Prerequisites
1. NodeJS - [Download Here](https://nodejs.org/en/download)
2. Code Editor - I recommend Visual Studio Code - [Download Here](https://code.visualstudio.com/download)
3. Git - [Download Here](https://git-scm.com/downloads)

## Running the application
I am assuming you have basic experience with Git & React/Next.js. If you encounter any problems please reach out to me [Here](https://discord.gg/kx8CK5As).
### Installation
1. Clone the repo - ```git clone https://github.com/ChaudharySamirZafar/PortfolioTemplate```
2. Navigate to the project directory and open the directory in visual studio code
3. Install dependencies - ```npm install```

### Usage
1. Launch the application - ```npm run dev```
2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000)
3. Browse the site

### Modifying
1. Navigate to the root directory of the application
2. Navigate to /lib/data
3. Change any data file in there and hit "CTRL + S" to see the changes on the application.
4. The /public folder contains all images and documents for the website. An option to showcase University reports is available for all University projects. 
Their "typeOfProject" property needs to include "University Project" at the end.

The **/lib/types** contains something called an IconsMap. The IconsMap maps a Technology name i.e. React to a url, the url being a logo of React. <br />
To add a technology that doesn't exist already you will have to add an entry in here. Below is an example of adding the React logo. <br />
Check [this github repository](https://github.com/devicons/devicon/tree/master/icons) to see if they have the appropiate logo you want. <br />
``` 
iconsMap["React"] =
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg";
```
Now, if I wanted to also add springboot, I would check [this github repository](https://github.com/devicons/devicon/tree/master/icons) to see if they have spring. <br />
As they do, I would create the entry. <br />
```
iconsMap["Spring"] =
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg";
```
**note:** the url always start with ```https://raw.githubusercontent.com/devicons/devicon/master/icons/``` and you don't have to use this repository for logo but I found them to be the best quality. 

### Deployment
Once you are happy with the changes you have made, it's time to deploy. I use Vercel to deploy my applications.
1. Push your code to Github by creating a repository, when you push your code via visual studio code it'll give you an option to create a new repository.
2. Follow Vercel's guide on [how to deploy a Github repository](https://vercel.com/docs/deployments/git#deploying-a-git-repository)

### Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository
2. Create a new branch: git checkout -b feature/your-feature-name
3. Make your changes and commit them
4. Push to your forked repository
5. Create a pull request describing your changes

### Licence
This project is licensed under the MIT License
##
Feel free to contribute, provide feedback, and make use of the website to show off your skills, projects and experience.
