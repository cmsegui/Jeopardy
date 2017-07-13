function questionClickHandler(category,score) {
    console.log(category,score);
    $("#myModal").modal();
}

const questions = [
    {
        question: "Bling Bling, every time he came around your city.",
        pointValue: 100,
        category: "Cash Money",
        correctAnswer: "Who is B.G?",
        answers: ["Who is Lil Wayne?", "Who is Juvenile?", "Who is B.G?", "Who is Manny Fresh?"]
    },
    {
        question: "In 2010, Birdman signed him...it was a MAJOR deal.",
        pointValue: 200,
        category: "Cash Money",
        correctAnswer: ["Who is D.J. Khaled?"],
        answers: ["Who is Master P?", "Who is D.J. Khaled?", "Who is Mystikal?", "Who are the Hot Boyz?"]
    },
    {
        question: "You might know this in-house producer as 'RedOne'.",
        pointValue: 300,
        category: "Cash Money",
        correctAnswer: "Who is Nadir Khayat?",
        answers: ["Who is Nadir Khayat?", "Who is Khaled Mohammed?", "Who is Thomas Pentz", "Who is Sonny Moore?"]
    },
    {
        question: "Juvenile, Turk, and B.G are members of this group.",
        pointValue: 400,
        category: "Cash Money",
        correctAnswer: "Who are Hot Boyz?",
        answers: ["Who are Blackstreet?", "Who are Slaughterhouse?", "Who are 69 Boyz?", "Who are Hot Boyz?"]
    },
    {
        question: "She went on a 'Foam & Diamonds' tour for the label, who even knew she was signed?",
        pointValue: 500,
        category: "Cash Money",
        correctAnswer: "Who is Paris Hilton?",
        answers: ["Who is Kylie Jenner?", "Who is Nicole Richie?", "Who is NeNe Leakes?", "Who is Paris Hilton?"]
    },
    {
        question: "This person has magical parents but lacks magic themselves.",
        pointValue: 100,
        category: "Harry Potter",
        correctAnswer: "What is a squib?",
        answers: ["What is a squib?", "What is a muggle?", "What is a mudblood?", "What is a half-blood?"]
    },
    {
        question: "To board the train at Kings Cross station, you'll need to be on this platform.",
        pointValue: 200,
        category: "Harry Potter",
        correctAnswer: "What is 9 3/4ths?",
        answers: ["What is 7?", "What is 5 1/2?", "What is 9 3/4ths?", "What is 3 2/4ths?"]
    },
    {
        question: "This is an Unforgivable Curse.",
        pointValue: 300,
        category: "Harry Potter",
        correctAnswer: "What is Crucio?",
        answers: ["What is Inferius?", "What is Crucio?", "What is Accio?", "What is Horcrux?"]
    },
    {
        question: "She was Voldemorts horcrux.",
        pointValue: 400,
        category: "Harry Potter",
        correctAnswer: "Who is Nagini?",
        answers: ["Who is Lilly Potter?", "Who is Nagini?", "Who is Bellatrix LeStrange?", "Who is Pomona Sprout?"]
    },
    {
        question: "Severus grew up here.",
        pointValue: 500,
        category: "Harry Potter",
        correctAnswer: "What is Spinner's End?",
        answers: ["What is Spinner's End?", "What is Diagon Alley?", "What is Privet Drive?", "What is the Forbidden Forest?"]
    },
    {
        question: "You have this quality you consider yourself a swashbuckler.",
        pointValue: 100,
        category: "Pirates",
        correctAnswer: "What is daring?",
        answers: ["What is daring?", "What is scared?", "What is drunk?", "What is limber?"]
    },
    {
        question: "This famous pirate has a Michael Bolton song as his moniker.",
        pointValue: 200,
        category: "Pirates",
        correctAnswer: "Who is Captain Jack Sparrow?",
        answers: ["Who is Captain Morgan?", "Who is Captain Blackbeard?", "Who is Captain Jack Sparrow?", "Who is Captain Calico Jack?"]
    },
    {
        question: "Blackbeards flag contained this.",
        pointValue: 300,
        category: "Pirates",
        correctAnswer: "What is skull with horns?",
        answers: ["What is skull and crossbones?", "What is skull with horns?", "What is skull with eyepatch?", "What is skull with beard?"]
    },
    {
        question: "This man started the Golden Age of Piracy.",
        pointValue: 400,
        category: "Pirates",
        correctAnswer: "Who is Henry Avery?",
        answers: ["Who is Charles Gibson?", "Who is Sam Bellamy?", "Who is Henry Avery?", "Who is Jack Rackham?"]
    },
    {
        question: "Pirates didn't really do this, well, except for William Kidd.",
        pointValue: 100,
        category: "Pirates",
        correctAnswer: "What is bury treasure?",
        answers: ["What is wear an eyepatch?", "What is bury treasure?", "What is say 'Arrrgh'?", "What is use Jolly Roger flag?"]
    },
    {
        question: "This is how much a human head weighs, unless you've got a ten head.",
        pointValue: 100,
        category: "Straight Facts",
        correctAnswer: "What is 10lbs?",
        answers: ["What is 8lbs?", "What is 10lbs?", "What is 5lbs?", "What is 13lbs?"]
    },
    {
        question: "This famous radio personality is fan of the Squatty Potty.",
        pointValue: 200,
        category: "Straight Facts",
        correctAnswer: "Who is Howard Stern?",
        answers: ["Who is Howard Stern?", "Who is Charlamagne Tha God?", "Who is Bobby Bones?", "Who is Ryan Seacrest?"]
    },
    {
        question: "Since 1998, this is the world's busiest airport.",
        pointValue: 300,
        category: "Straight Facts",
        correctAnswer: "What is Hartsfield-Jackson?",
        answers: ["What is Hartsfield-Jackson?", "What is Beijing International?", "What is Los Angeles International?", "What is Heathrow?"]
    },
    {
        question: "Babies have 60 more of these than an adult.",
        pointValue: 400,
        category: "Straight Facts",
        correctAnswer: "What is bones?",
        answers: ["What is mucus membranes?", "What is bones?", "What is dermal layers?", "What is nerve-endings?"]
    },
    {
        question: "This person invented the toilet.",
        pointValue: 500,
        category: "Straight Facts",
        correctAnswer: "Who is Thomas Crapper?",
        answers: ["Who is Rudy Shite?", "Who is Seymore Butts?", "Who is Thomas Crapper?", "Who is Theodore Dingleberry?"]
    },
    {
        question: "Michael Jordan started with the Hornets, crushed it with the Bulls, but this is where he ended his career.",
        pointValue: 100,
        category: "Fuckem, We Ball!",
        correctAnswer: "What is the Wizards?",
        answers: ["What is the Wizards?", "What is the Knicks?", "What is the Celtics?", "What is the Rockets?"]
    },
    {
        question: "He was the first Carribean player to be inducted to the National Baseball Hall of Fame.",
        pointValue: 100,
        category: "Fuckem, We Ball!",
        correctAnswer: "Who is Roberto Clemente?",
        answers: ["Who is Hector Cruz?", "Who is Bernie Williams?", "Who is Roberto Clemente?", "Who is Alex Rodriguez?"]
    },
    {
        question: "This guy is known as 'La Pulga' or a flea.",
        pointValue: 300,
        category: "Fuckem, We Ball!",
        correctAnswer: "Who is Lionel Messi?",
        answers: ["Who is Cristiano Ronaldo?", "Who is Neymar?", "Who is Lionel Messi?", "Who is Gerard Pique?"]
    },
    {
        question: "In 1983, this Cowboy rushed 99 yards for a touchdown.",
        pointValue: 400,
        category: "Fuckem, We Ball!",
        correctAnswer: "Who is Tony Dorsett?",
        answers: ["Who is Tony Romo?", "Who is Tony Dorsett?", "Who is Deion Sanders?", "Who is Troy Aikman?"]
    },
    {
        question: "This guy was the first black man on the cover of Vogue.",
        pointValue: 500,
        category: "Fuckem, We Ball!",
        correctAnswer: "Who is Lebron James?",
        answers: ["Who is Kobe Bryant?", "Who is Floyd Mayweather?", "Who is Muhammad Ali?", "Who is Lebron James?"]
    }
];