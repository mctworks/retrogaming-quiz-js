(function() {
  //quiz questions. Since this is front-end only, anyone who knows how to look at source can easily see the answers.
  const retrogamingQuestions = [{
      question: "1. What 1990 NES game published by Vic Tokai had a ficitional band named after it in the Scott Pilgrim series?",
      answers: {
        a: "Conflict",
        b: "Clash At Demonhead",
        c: "Top Secret Episode",
        d: "Crash \'N The Boys"
      },
      correctAnswer: "b",
      hint: "While \"Conflict\" was published by Vic Tokai in 1990, this game isn't referenced in Scott Pilgrim. Although the original graphic novel series has band named after \"Crash \'N The Boys\", the game they're named after was published and developed by Technos and wasn't released stateside until 1992."
    },
    {
      question: "2. What was the very last officially licensed Super NES game released in North America in cartridge format?",
      answers: {
        a: "StarFox 2",
        b: "NBA Live 98",
        c: "Frogger",
        d: "Kirby's Dreamland 3"
      },
      correctAnswer: "c",
      hint: "\"StarFox 2\" would not see an official release until 2017... though not in cartridge format, but rather digitally as one of the games pre-loaded on the Super NES Classic. \"Kirby's Dreamland 3\" was the last American SNES game published <u>by Nintendo</u>."
    },
    {
      question: "3. Which Data East game, often cited as one of the strangest games to ever be released, has a barbarian named Rose Sub as one of the playable characters?",
      answers: {
        a: "Trio The Punch",
        b: "Two Crude",
        c: "Rastan",
        d: "Fighter's History"
      },
      correctAnswer: "a",
      hint: "\"Rastan\" has one playable character, a barbarian named... Rastan. The correct answer is not a one-on-one fighting game."
    },
    {
      question: "4. What infamous Japanese Sega Saturn game was given the nickname \"Emperor Kusoge\" (translates to something like <i>emperor of sh*t games</i>)?",
      answers: {
        a: "Death Crimson",
        b: "Wachenröder",
        c: "Final Fight Revenge",
        d: "Game Tengoku"
      },
      correctAnswer: "a",
      hint: "It's a light gun game. Despite its reputation, it spawned two sequels. The third and final game in the series on the Sega Dreamcast has the designation of \"OX\" instead of \"3\", and actually got an American release (for some sick reason...)"
    },
    {
      question: "5. What was the North American title given to the racing game that was originally released in Japan as <i>Highway Star</i>?",
      answers: {
        a: "Racing Lagoon",
        b: "Driving Emotion Type-S",
        c: "Final Lap",
        d: "Rad Racer"
      },
      correctAnswer: "d",
      hint: "The one game listed that SquareSoft (now Square Enix) was not involved with didn\'t recieve a title change when released outside of Japan. The correct game was released on the NES."
    },
    {
      question: "6. Which toy company originally distributed the original NES in most of Europe and Australia?",
      answers: {
        a: "Tonka",
        b: "Mattel",
        c: "Tec Toy",
        d: "Hasbro"
      },
      correctAnswer: "b",
      hint: "Tonka originally distributed the Sega Master System in North America. Tec Toy is best known for distributing Sega's products in Brazil."
    },
    {
      question: "7. Which of the following was the only Alex Kidd game that Sega never released outside of Japan?",
      answers: {
        a: "Alex Kidd: High Tech World",
        b: "Alex Kidd in Shinobi World",
        c: "Alex Kidd: The Lost Stars",
        d: "Alex Kidd BMX Trial"
      },
      correctAnswer: "d",
      hint: "The game listed that was a hyrbrid of a puzzle adventure and an action game was a graphically modified version of a Japanese Sega Mark III game based on the manga \"Anmitsu Hime\" for Western audiences. Another game listed, which fuses elements from both Alex Kidd and another Sega franchise, was developed in Japan but never saw a release there."
    },
    {
      question: "8. Which company originally <b>developed</b> <i>Bonk's Adventure</i> for the TurboGrafx-16?",
      answers: {
        a: "Hudson",
        b: "Red",
        c: "Atlus",
        d: "NEC"
      },
      correctAnswer: "c",
      hint: "This one's tough, because all the companies listed were involved with this game. Bonk was NEC's mascot for the TurboGrafx-16. The game was <u>published</u> by a company whose logo is a bee, and also published a port of the game on the NES."
    },
    {
      question: "9. During the development of the original Sonic The Hedgehog for the Sega Genesis, one character that was rejected by Sega of America was a human girlfriend for Sonic. What was her name?",
      answers: {
        a: "Madonna",
        b: "Cher",
        c: "Tiffany",
        d: "Elise"
      },
      correctAnswer: "a",
      hint: "Though this idea was scrapped, Sega recycled the idea for the ill-fated 2006 Sonic reboot (often dubbed \"Sonic \'06\"), although that character's name is the option that isn't shared with any singer. The correct answer is a name shared with more prolific musician whose career lasted beyond the 1980's."
    },
    {
      question: "10. Which present day AAA game studio <b>developed</b> the NES game based on the movie <i>Home Alone</i> during their more humble days?",
      answers: {
        a: "Electronic Arts",
        b: "THQ",
        c: "Bethesda",
        d: "id Software"
      },
      correctAnswer: "c",
      hint: "THQ did not develop this game, however, they did <u>publish</u> it. None of the NES games that Electronic Arts developed were based on any movie license."
    },
    {
      question: "11. Which SNK series do King of Fighters characters Ralf and Clark originally come from?",
      answers: {
        a: "Guerilla War",
        b: "Ikari Warriors",
        c: "Metal Slug",
        d: "Psycho Soldier"
      },
      correctAnswer: "b",
      hint: "Ralf and Clark would show up in later entries of the \"Metal Slug\" franchise, though it was not their original series. \"Psycho Soldier\" was actually the introduction of two other KoF characters, namely Athena Asamiya and Sie Kensou."
    },
    {
      question: "12. Which company did NOT publish a port of Atari's <i>Rampart</i>?",
      answers: {
        a: "Jaleco",
        b: "Electronic Arts",
        c: "Sega",
        d: "Konami"
      },
      correctAnswer: "c",
      hint: "Oddly enough, Konami developed and published a port of \"Rampart\" for the Famicom, which is different from the port Jaleco published for the NES in North America."
    },
    {
      question: "13. <i>Erika to Satoru no Yume Bouken</i> for the Famicom had an Easter Egg containing a profane rant from one of its programmers that wasn't well known until recent years. Music from what <b>American-exclusive</b> NES game plays during the rant?",
      answers: {
        a: "Jaws",
        b: "Predator",
        c: "The Karate Kid",
        d: "Die Hard"
      },
      correctAnswer: "c",
      hint: 'The game the music was sampled from was published by LJN, and the specific tune used is from its first level.'
    },
    {
      question: "14. Which of these game are not part of the same 'spiritual' series of side-scrolling action platformers?",
      answers: {
        a: "Kid Kool",
        b: "DecapAttack",
        c: "The Krion Conquest",
        d: "Psycho Fox"
      },
      correctAnswer: "c",
      hint: "Only one of the games in the trilogy appeared on a Nintendo platform, and was the only one published by Vic Tokai themselves. The other two were on Sega platforms, and were published by Sega but still developed by Vic Tokai."
    },
    {
      question: "15. What platform did not have a <i>Bubsy</i> game?",
      answers: {
        a: "Atari Jaguar",
        b: "Game Boy",
        c: "Sega Genesis",
        d: "Amiga CD32"
      },
      correctAnswer: "d",
      hint: "Though not licensed by Sega, the Genesis did recieve two Bubsy games. For some reason, the Game Boy recieved a port of \"Bubsy 2\" but not the original Bubsy \(and most gamers probably aren't complaining over it.\)"
    },
    {
      question: "16. What series began life as a reskin of <i>Wonder Boy</i> (originally published by Sega) to the NES?",
      answers: {
        a: "Monster World",
        b: "Adventure Island",
        c: "Bomberman",
        d: "Milon's Secret Castle"
      },
      correctAnswer: "b",
      hint: "The correct answer replaces the titular Wonder Boy character with a different hero named Master Higgins for American audiences, but was actually based on real life figure Takahashi Meijin."
    },
    {
      question: "17. What other name does Firebrand, the hero of the <i>Gargoyle's Quest</i> series, go by?",
      answers: {
        a: "Red Arremer",
        b: "Red Devil",
        c: "Red Breager",
        d: "Red Bomber"
      },
      correctAnswer: "a",
      hint: "He goes by the correct answer for his appearance as a hidden boss in \"SNK Vs. Capcom SVC Chaos\" instead of Firebrand. There is no \"Red Bomber\" in any series by Capcom, though Mega Man is often nicknamed \"The Blue Bomber\"."
    },
    {
      question: "18. What NES game was a renamed port of the Commodore 64 game <i>Myth: History in the Making</i>?",
      answers: {
        a: "Swords & Serpents",
        b: "Conan: The Mysteries Of Time",
        c: "Sword Master",
        d: "Willow"
      },
      correctAnswer: "b",
      hint: "This game was repurposed as a licensed tie-in to a non-gaming property."
    },
    {
      question: "19. Which <i>Street Fighter</i> character makes a secret cameo in the original <i>Breath of Fire</i> for Super NES?",
      answers: {
        a: "Ryu",
        b: "Chun-Li",
        c: "Guile",
        d: "Ken"
      },
      correctAnswer: "b",
      hint: "This character was originally introduced in \"Street Fighter II\", and not the first entry in the series."
    },
    {
      question: "20. What is the name of the \"ghost developer\" studio that has anonymously developed (or co-developed) over 1,000 games, including <i>Kid Icarus: Of Myth And Monsters</i>, <i>Pinball Quest</i> and <i>Thousand Arms</i>?",
      answers: {
        a: "Tose",
        b: "Micronics",
        c: "Tiertex",
        d: "Nova"
      },
      correctAnswer: "a",
      hint: "This company had no involvement in the NES port of \"1942\", nor \"Mega Man Soccer\" for Super NES."
    },
    {
      question: "21. Which game developed by KID was never published by Taxan in North America?",
      answers: {
        a: "Low G Man",
        b: "GI Joe",
        c: "Burai Fighter",
        d: "KickMaster"
      },
      correctAnswer: "d",
      hint: "This game did not recieve a sequel published by Capcom, nor recieved any kind of port to the Game Boy."
    },
    {
      question: "22. Which Culture Brain game never got any kind of sequel or spin-off game?",
      answers: {
        a: "Ninja Boy",
        b: "Flying Warriors",
        c: "Baseball Simulator 1,000",
        d: "The Magic of Scheherazade"
      },
      correctAnswer: "d",
      hint: "\"Flying Warriors\" had numerous spin-offs and sequels. Another game involved with \"Ninja Boy\" is \"Kung Fu Heroes\" for the NES."
    },
    {
      question: "23. Which character was originally planned to be in the roster of the original <i>Mortal Kombat</i> but was instead introduced in the sequel?",
      answers: {
        a: "Kung Lao",
        b: "Jax",
        c: "Kitana",
        d: "Baraka"
      },
      correctAnswer: "b",
      hint: "The reason this character never made the roster was because of a lack of female representation, and was replaced with Sonya Blade. Sonya would later be revealed as one of this character's Special Forces partners in the storyline for \"Mortal Kombat II\"."
    },
    {
      question: "24. Out of the following Game Boy titles, which one is not the same exact game as the others listed, aside from graphical changes?",
      answers: {
        a: "Garfield Labyrinth",
        b: "The Real Ghostbusters",
        c: "Bugs Bunny: Crazy Castle II",
        d: "Mickey Mouse IV"
      },
      correctAnswer: "c",
      hint: "Let\'s just say that Garfield and Peter Venkman have another connection aside from both being portrayed by Lorenzo Music and Bill Murray..."
    },
    {
      question: "25. Which game is not a sequel or spin-off to any pre-existing game franchise?",
      answers: {
        a: "Flashgal",
        b: "E.V.O.: Search for Eden",
        c: "Warriors of Fate",
        d: "Legacy of the Wizard"
      },
      correctAnswer: "a",
      hint: "Neither Enix or Falcom were involved with this game in any way."
    }
  ];
  let quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const retryContainer = document.getElementById('retry');
  const answerContainers = quizContainer.querySelectorAll('.answers');
  const hintContainers = quizContainer.querySelectorAll('.hint');



  function buildQuiz() {
    const output = [];

    retrogamingQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = []; //stores answers

        for (letter in currentQuestion.answers) { //add HTML radio button for each available answer
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
            <div class="hint"><em>PROTIP: ${currentQuestion.hint}</em></div>
            <div class="answers">${answers.join('')}</div>
          </div>`
        );
      }
    );

    //join output list into one string and display on screen
    quizContainer.innerHTML = output.join('');
  }

  function getResult(currentQuestion, questionNumber, numCorrect) {
    //find selected answer
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    //gathering quiz's answer containers
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const hintContainers = quizContainer.querySelectorAll('.hint');
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    //in the event that no questions are answered
    if (typeof(numCorrect) === "undefined") {
      numCorrect = 0;
    }

    if (userAnswer === currentQuestion.correctAnswer) { //if answer is correct...
      numCorrect++; //add one to correct answer tally
      answerContainers[questionNumber].style.color = '#3bd13b'; //color all answers green.
    } else { //if answer is wrong or unanswered...
      answerContainers[questionNumber].style.color = '#d32424'; //color all answers red...
      hintContainers[questionNumber].style.display = 'block'; //reveal hint
    }

    return numCorrect;
  }

  function showResults() {
    //correct answer tally.
    let numCorrect = 0;

    //for each question
    retrogamingQuestions.forEach(
      (currentQuestion, questionNumber) => {
        getResult(currentQuestion, questionNumber, numCorrect); //tallys and returns score...
        numCorrect = getResult(currentQuestion, questionNumber, numCorrect); //assign score for precentage calculation.
      });

    //Convert number of correct answers to precentage
    let precentageCorrect = Math.round((numCorrect / retrogamingQuestions.length) * 100)
    let scoreAnalysis = "";

    //Determine score analysis, there is no traditional "gfpass" or "fail"
    if (precentageCorrect < 10) {
      scoreAnalysis = "very low";
    } else if (precentageCorrect >= 10 && precentageCorrect < 20) {
      scoreAnalysis = "low";
    } else if (precentageCorrect >= 20 && precentageCorrect < 30) {
      scoreAnalysis = "fair";
    } else if (precentageCorrect >= 30 && precentageCorrect < 50) {
      scoreAnalysis = "decent";
    } else if (precentageCorrect >= 50 && precentageCorrect < 70) {
      scoreAnalysis = "not too shabby";
    } else if (precentageCorrect >= 70 && precentageCorrect < 100) {
      scoreAnalysis = "pretty high";
    } else {
      scoreAnalysis = "actually a perfect score";
    }

    //Outputs the score and analysis
    resultsContainer.innerHTML = "<p>You got " + precentageCorrect + "% of these correct, which is " + scoreAnalysis + ", but keep in mind that this test doesn't measure a gamer's \"worth\". Most of this is completely useless information to the average person, gamer or not, and was designed to be extremely difficult to even the most well-seasoned of retrogaming trivia enthusiasts.</p>";

    if (precentageCorrect < 100) {
      retryContainer.innerHTML = "<p>But if you are curious about a little retrogaming history and other tidbits, you can hit the Previous Question button to review your answers. The Hint button is your friend here.</p>"
    } else {
      retryContainer.innerHTML = "<p>I'm guessing you like to read a lot of Hardcore Gaming 101 and TCRF.net, huh? Or you cheated by either abusing the Hint button or looking at the source code. Either way is fine by me. I'm not going to rant about how you supposedly not only cheated the quiz but yourself and didn't grow, that meme was as dead as disco within 5 minutes of hitting Twitter. Plus this was just supposed to be a fun little project.</p>"
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
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
    let buttons = document.querySelectorAll('#next, #showhint, #previous');

    buttons.forEach(
      (btn) => {
        let btnData = btn.dataset
        let questionValue = parseInt(btnData['question'])
        btnData.question = questionValue += 1;
      });
  }

  function showPreviousSlide() {

    let buttons = document.querySelectorAll('#next, #showhint, #previous');

    buttons.forEach(
      (btn) => {
        let btnData = btn.dataset
        let questionValue = parseInt(btnData['question'])
        btnData.question = questionValue -= 1;
      });

    showSlide(currentSlide - 1);
  }

  let showHint = (event) => {
    getResult(retrogamingQuestions[parseInt(event.target.dataset.question)], event.target.dataset.question)
  }

  //immediately display the quiz
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const showHintButton = document.getElementById("showhint");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  //show results after submit button is pressed
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  showHintButton.addEventListener("click", showHint);
})();
