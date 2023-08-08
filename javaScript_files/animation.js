const typingText = document.getElementById('typing-text');
const typingParagraph1 = document.getElementById('typing-paragraph1');
const typingParagraph2 = document.getElementById('typing-paragraph2');
const typingParagraph3 = document.getElementById('typing-paragraph3');

const titleText = 'Welcome to SCCSE';
const paragraphText1 = 'The hackathon is open to all students of the college from any streams who have an interest in programming and technology. Join us for a weekend of learning, building, and fun!';
const paragraphText2 = 'Team size should have a minimum of 2 maximum of 4 members. Participants can form teams either among themselves or from other departments too.';
const paragraphText3 = 'The hackathon will be held on the 15th and 16th of October in the college auditorium. Registrations are open till the 10th of October. Hurry up and register now!';

let titleIndex = 0;
let paragraphIndex1 = 0;
let paragraphIndex2 = 0;
let paragraphIndex3 = 0;

function typeTitle() {
    typingText.innerHTML += titleText[titleIndex];
    titleIndex++;
    if (titleIndex === titleText.length) {
        clearInterval(titleInterval);
        paragraphInterval1 = setInterval(typeParagraph1, 50);
    }
}

function typeParagraph1() {
    typingParagraph1.innerHTML += paragraphText1[paragraphIndex1];
    paragraphIndex1++;
    if (paragraphIndex1 === paragraphText1.length) {
        clearInterval(paragraphInterval1);
        paragraphInterval2 = setInterval(typeParagraph2, 50);
    }
}

function typeParagraph2() {
    typingParagraph2.innerHTML += paragraphText2[paragraphIndex2];
    paragraphIndex2++;
    if (paragraphIndex2 === paragraphText2.length) {
        clearInterval(paragraphInterval2);
        paragraphInterval3 = setInterval(typeParagraph3, 50);
    }
}

function typeParagraph3() {
    typingParagraph3.innerHTML += paragraphText3[paragraphIndex3];
    paragraphIndex3++;
    if (paragraphIndex3 === paragraphText3.length) {
        clearInterval(paragraphInterval3);
    }
}

let paragraphInterval1;
let paragraphInterval2;
let paragraphInterval3;
const titleInterval = setInterval(typeTitle, 100);