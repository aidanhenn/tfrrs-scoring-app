<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
  </a>

<h1 align="center" font-size= "10em">Track and Field Team Score Predictor</h1>

  <h4 align="center">

This app was built to predict scores for college track and field conferences based on performance lists posted on the website [TFRRS](https://www.tfrrs.org/). Puppeteer was used to scrape the seasons [performance list](https://tf.tfrrs.org/outdoor_lists.html) and simulate meet results by scoring them according to the [track point system](https://www.usatf.org/events/2010/usa-youth-outdoor-track-field-championships/athlete-info). Express was used on the backend to manage user requests.    <br />
    <br />
    <br />
    <a href="https://github.com/aidanhenn/team-scoring-app/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#future">Future</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About

[This project](https://team-scoring-app-6b025b09d32e.herokuapp.com/) was developed to automate the process of calculating team scores ahead of conference meets. In the past this task was done manually and was time consuming and inaccurate.
The goal of this project was to provide a comprehensive tool for coaches, athletes, and fans to quickly and accurately assess team scores, making meet preparation more efficient.
<br/>

The predictions generated by this app have proven to be relatively accurate. Below are the predicted scores for the 2024 Little East Conference Outdoor Meet alongside the actual results:

- Every team placed in their predicted position, and the point differences were minimal.
- The predictions were made before factoring in athlete removals due to injuries.
- It's important to consider that some athletes compete in 5+ events throughout the season, but they may not participate in all of those events during a single conference meet, which can impact the final scores.
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/aidanhenn/team-scoring-app/blob/master/images/TFRRS-Actual-Scores.PNG"
           alt="Actual team scores" width="500" height="400">
      <p>Actual Team Scores</p>
    </td>
    <td align="center">
      <img src="https://github.com/aidanhenn/team-scoring-app/blob/master/images/TFRRS-Pred-Scores.PNG"
           alt="Predicted team scores" width="500" height="400">
      <p>Predicted Team Scores</p>
    </td>
  </tr>
</table>


https://github.com/user-attachments/assets/e0fe0768-b5c2-41f4-9cf2-8c09fb121379

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![Node][NodeJS]][NodeJS-url]
* [![Express][ExpressJS]][ExpressJS-url]
* [![Puppeteer][Puppeteer]][Puppeteer-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

1. Navigate to the TFRRS performance lists page [here](https://tf.tfrrs.org/outdoor_lists.html)
2. Select the division you want to score i.e. NCAA Div. I or NCAA Div. III etc
3. Choose the conference you wish to score i.e. Div. III [Little East Conference](https://tf.tfrrs.org/lists/4718/Little_East_Outdoor_Performance_List?gender=m)
4. Copy the url, in this case -> https://tf.tfrrs.org/lists/4718/Little_East_Outdoor_Performance_List
5. Navigate to the [team scoring app](https://team-scoring-app-6b025b09d32e.herokuapp.com/)
6. Paste the URL in the "TFRRS Performance List URL" input box
7. Select the gender you want to score
8. Choose the # of finishers you want to score (top 6 or top 8)
9. Click the "Calculate scores" button

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Future


- Customizable predictions by filtering specific events, athletes, or teams.
- Machine learning integration using past meet data to improve prediction accuracy.
- User accounts to save custom meet setups and historical results.
- Detailed breakdown of points by event and athlete for each team.
<br/>

<!-- CONTACT -->
## Contact

Aidan Hennessy <br/>
[![myEmail][Email]](mailto:aidanjhennessy@gmail.com) <br/>
[![LinkedIn][linkedin-shield]][linkedin-url] <br/>
Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Email]:https://img.shields.io/badge/Email-blue?style=for-the-badge&logo=gmail
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/aidan-hennessy
[actual-scores-ss]: https://github.com/aidanhenn/team-scoring-app/blob/master/images/TFRRS-Actual-Scores.PNG
[predicted-scores-ss]: https://github.com/aidanhenn/team-scoring-app/blob/master/images/TFRRS-Pred-Scores.PNG
[demo-vid]: https://github.com/aidanhenn/team-scoring-app/blob/master/images/TFRRS-demo.mp4

[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/
[ExpressJS]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express
[ExpressJS-url]: https://expressjs.com/
[Puppeteer]: https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white
[Puppeteer-url]: https://pptr.dev/
