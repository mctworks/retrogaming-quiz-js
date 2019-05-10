(function(){
    //quiz questions. Since this is front-end only, anyone who knows how to look at source can easily see the answers.
    const retrogamingQuestions = [
      {
        question: "1. What 1990 NES game published by Vic Tokai had a ficitional band named after it in the Scott Pilgrim series?",
        answers: {
          a: "Conflict",
          b: "Clash At Demonhead",
          c: "Top Secret Episode",
          d: "Crash \'N The Boys"
        },
        correctAnswer: "b"
      },
      {
        question: "2. What was the very last officially licensed Super NES game released in North America in cartridge format?",
        answers: {
          a: "StarFox 2",
          b: "NBA Live 98",
          c: "Frogger",
          d: "Kirby's Dreamland 3"
        },
        correctAnswer: "c"
      },
      {
        question: "3. Which Data East game, often cited as one of the strangest games to ever be released, has a barbarian named Rose Sub as one of the playable characters?",
        answers: {
          a: "Trio The Punch",
          b: "Two Crude Dudes",
          c: "Rastan",
          d: "Fighter's History"
        },
        correctAnswer: "a"
      },
      {
        question: "4. What infamous Japanese Sega Saturn game was given the nickname \"Emperor Kusoge\" (translates to something like <i>emperor of sh*t games</i>)?",
        answers: {
          a: "Death Crimson",
          b: "Wachenröder",
          c: "Final Fight Revenge",
          d: "Game Tengoku"
        },
        correctAnswer: "a"
      },
      {
        question: "5. What was the North American title given to the racing game that was originally released in Japan as <i>Highway Star</i>?",
        answers: {
          a: "Racing Lagoon",
          b: "Driving Emotion Type-S",
          c: "Final Lap",
          d: "Rad Racer"
        },
        correctAnswer: "d"
      },
      {
        question: "6. Which toy company originally distributed the original NES in most of Europe and Australia?",
        answers: {
          a: "Tonka",
          b: "Mattel",
          c: "Tec Toy",
          d: "Hasbro"
        },
        correctAnswer: "b"
      },
      {
        question: "7. Which of the following was the only Alex Kidd game that Sega never released outside of Japan?",
        answers: {
          a: "Alex Kidd: High Tech World",
          b: "Alex Kidd in Shinobi World",
          c: "Alex Kidd: The Lost Stars",
          d: "Alex Kidd BMX Trial"
        },
        correctAnswer: "d"
      },
      {
        question: "8. Which company originally <b>developed</b> Bonk's Adventure for the TurboGrafx-16?",
        answers: {
          a: "Hudson",
          b: "Red",
          c: "Atlus",
          d: "NEC"
        },
        correctAnswer: "c"
      },
      {
        question: "9. During the development of the original Sonic The Hedgehog for the Sega Genesis, one character that was rejected by Sega of America was a human girlfriend for Sonic. What was her name?",
        answers: {
          a: "Madonna",
          b: "Cher",
          c: "Tiffany",
          d: "Elise"
        },
        correctAnswer: "a"
      },
      {
        question: "10. Which present day AAA game studio developed the NES game based on the movie <i>Home Alone</i> during their more humble days?",
        answers: {
          a: "Electronic Arts",
          b: "THQ",
          c: "Bethesda",
          d: "id Software"
        },
        correctAnswer: "c"
      },
      {
        question: "11. Which SNK series do King of Fighters characters Ralf and Clark originally come from?",
        answers: {
          a: "Guerilla War",
          b: "Ikari Warriors",
          c: "Metal Slug",
          d: "Psycho Soldier"
        },
        correctAnswer: "b"
      },
      {
        question: "12. Which company did NOT publish a port of Atari's <i>Rampart</i>?",
        answers: {
          a: "Jaleco",
          b: "Electronic Arts",
          c: "Sega",
          d: "Konami"
        },
        correctAnswer: "c"
      },
      {
        question: "13. <i>Erika to Satoru no Yume Bouken</i> for the Famicom had an Easter Egg containing a profane rant from one of its programmers. Music from what <b>American</b> NES game plays during the rant?",
        answers: {
          a: "Jaws",
          b: "Predator",
          c: "The Karate Kid",
          d: "Die Hard"
        },
        correctAnswer: "c"
      },
      {
        question: "14. Which of these game are not part of the same 'spiritual' series of side-scrolling action platformers?",
        answers: {
          a: "Kid Kool",
          b: "DecapAttack",
          c: "The Krion Conquest",
          d: "Psycho Fox"
        },
        correctAnswer: "c"
      },
      {
        question: "15. What platform did not have a <i>Bubsy</i> game?",
        answers: {
          a: "Atari Jaguar",
          b: "Game Boy",
          c: "Sega Genesis",
          d: "Amiga CD32"
        },
        correctAnswer: "d"
      },
      {
        question: "16. What series began life as a reskin of <i>Wonder Boy</i> (originally published by Sega) to the NES?",
        answers: {
          a: "Monster World",
          b: "Adventure Island",
          c: "Bomberman",
          d: "Milon's Secret Castle"
        },
        correctAnswer: "b"
      },
      {
        question: "17. What other name does Firebrand, the hero of the <i>Gargoyle's Quest</i> series, go by?",
        answers: {
          a: "Red Arremer",
          b: "Red Devil",
          c: "Red Breager",
          d: "Red Bomber"
        },
        correctAnswer: "a"
      },
      {
        question: "18. What NES game was a renamed port of the Commodore 64 game <i>Myth: History in the Making</i>?",
        answers: {
          a: "Swords & Serpents",
          b: "Conan: The Mysteries Of Time",
          c: "Sword Master",
          d: "Willow"
        },
        correctAnswer: "b"
      },
      {
        question: "19. Which <i>Street Fighter</i> character makes a secret cameo in the original <i>Breath of Fire</i> for Super NES?",
        answers: {
          a: "Ryu",
          b: "Chun-Li",
          c: "Guile",
          d: "Ken"
        },
        correctAnswer: "b"
      },
      {
        question: "20. What is the name of the \"ghost developer\" studio that has anonymously developed (or co-developed) over 1,000 games, including <i>Kid Icarus: Of Myth And Monsters</i>, <i>Pinball Quest</i> and <i>Thousand Arms</i>?",
        answers: {
          a: "Tose",
          b: "Micronics",
          c: "Tiertex",
          d: "Nova"
        },
        correctAnswer: "a"
      },
      {
        question: "21. Which game developed by KID was never published by Taxan in North America?",
        answers: {
          a: "Low G Man",
          b: "GI Joe",
          c: "Burai Fighter",
          d: "KickMaster"
        },
        correctAnswer: "d"
      },
      {
        question: "22. Which Culture Brain game never got any kind of sequel or spin-off game?",
        answers: {
          a: "Ninja Boy",
          b: "Flying Warriors",
          c: "Baseball Simulator 1,000",
          d: "The Magic of Scheherazade"
        },
        correctAnswer: "d"
      },
      {
        question: "23. Which character was originally planned to be in the roster of the original <i>Mortal Kombat</i> but was instead introduced in the sequel?",
        answers: {
          a: "Kung Lao",
          b: "Jax",
          c: "Kitana",
          d: "Baraka"
        },
        correctAnswer: "b"
      },
      {
        question: "24. Out of the following Game Boy titles, which one is not the same game (with different graphics) as the others?",
        answers: {
          a: "Garfield Labyrinth",
          b: "The Real Ghostbusters",
          c: "Bugs Bunny: Crazy Castle II",
          d: "Mickey Mouse IV"
        },
        correctAnswer: "c"
      },
      {
        question: "25. Which game is not a sequel or spin-off to any pre-existing game franchise?",
        answers: {
          a: "Flashgal",
          b: "E.V.O.: Search for Eden",
          c: "Warriors of Fate",
          d: "Legacy of the Wizard"
        },
        correctAnswer: "a"
      }
    ];


  function buildQuiz(){
    const output = [];

    retrogamingQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = []; //stores answers

        for(letter in currentQuestion.answers){ //add HTML radio button for each available answer
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} : ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push( //output this question and its choices
          `<div class="slide">
            <div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>
          </div>`
        );
      }
    );

    //join output list into one string and display on screen
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){
    //gathering quiz's answer containers
    const answerContainers = quizContainer.querySelectorAll('.answers');

    //correct answer tally. May recode this entirely to award more points for harder questions later.
    let numCorrect = 0;

    //for each question
    retrogamingQuestions.forEach(
      (currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        //if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          //add one to correct answer tally
          numCorrect++;
          //color the answers green.
          answerContainers[questionNumber].style.color = '#3bd13b';
        }
        //color answers red if wrong or unanswered
        else{
          answerContainers[questionNumber].style.color = '#d32424'
        }
      });

      //Convert number of correct answers to precentage
      let precentageCorrect = Math.round((numCorrect / retrogamingQuestions.length) * 100)
      let scoreAnalysis = "";

      //Determine score analysis, there is no traditional "pass" or "fail"
      if(precentageCorrect < 10){
        scoreAnalysis = "very low";
      } else if (precentageCorrect >= 10 && precentageCorrect < 20){
        scoreAnalysis = "low";
      } else if (precentageCorrect >= 20 && precentageCorrect < 30){
        scoreAnalysis = "fair";
      } else if (precentageCorrect >= 30 && precentageCorrect < 50){
        scoreAnalysis = "decent";
      } else if (precentageCorrect >= 50 && precentageCorrect < 70){
        scoreAnalysis = "not too shabby";
      } else if (precentageCorrect >= 70 && precentageCorrect < 100){
        scoreAnalysis = "pretty high";
      } else {
        scoreAnalysis = "a perfect score";
      }

      //Outputs the score and analysis
      resultsContainer.innerHTML = "<p>You got " + precentageCorrect + "% of these correct, which is " + scoreAnalysis + ", but keep in mind that this test doesn't measure a gamer's \"worth\". Most of this is completely useless information to the average person, gamer or not, and was designed to be extremely difficult to even the most well-seasoned of retrogaming trivia enthusiasts.</p>" ;

      if(precentageCorrect < 100){
        retryContainer.innerHTML = "<p>But if you are curious about a little retrogaming history and other tidbits, you can hit the Previous Question button to review your answers and take another shot at the ones you missed and resubmit your answers.</p>"
      } else {
        retryContainer.innerHTML = "<p>I'm guessing you like to read a lot of Hardcore Gaming 101 and TCRF.net, huh? Or you cheated by looking at the source code. Either way is fine by me. I'm not going to rant about how you cheated yourself and didn't grow, that meme was as dead as disco within 5 minutes of hitting Twitter. Plus this was just supposed to be a fun little project.</p>"
      }
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
      submitButton.style.backgroundColor = "#404eff";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const retryContainer = document.getElementById('retry');

  //immediately display the quiz
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  //show results after submit button is pressed
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
