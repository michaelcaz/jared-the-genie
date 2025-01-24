const answers = [
    "Beware the Ides of March, but also every Tuesday; they're equally treacherous.",
    "Never trust a Gemini; they carry two faces, much like the two-faced moon we dare not look upon directly.",
    "In the shadow of Scorpio, keep your secrets locked tighter than a virgin's chastity belt, for all is betrayal in this world.",
    "The alignment of Venus suggests you should always carry an umbrella, not for rain, but to shield from the piercing gaze of envious eyes.",
    "When Mercury is retrograde, do not sign your name on anything, lest you sign your soul away to the fates.",
    "Capricorn's influence advises you to sleep with one eye open; the universe is plotting, always plotting.",
    "Avoid the number 13 like the plague; it's not just superstition, it's cosmic law.",
    "Under Libra's scales, never reveal your true weight; the cosmos judges more harshly than any human scale.",
    "The stars warn of Taurus; never eat before noon, for the morning's light might reveal a hidden poison in your meal.",
    "In the age of Aquarius, avoid water; it's not just wet, it's a portal to the unknown depths of your psyche.",
    "Sagittarius whispers of travel, but beware, for every journey is a step closer to your doom, or at least a delay at the airport.",
    "The moon in Cancer suggests you should never trust your pillow; it might whisper your secrets to the night while you dream.",
    "Leo's pride demands you wear a hat at all times; the sun is not your friend, it's a spy from the heavens.",
    "Virgo's meticulous nature insists you count your steps; one wrong move and the stars will realign your fate for the worse.",
    "Pisces' influence warns you to look twice at your reflection; it might not be you staring back but an imposter from another dimension.",
    "When Aries is ascendant, never run; haste makes waste, and the cosmos is watching your every misstep.",
    "Under the watchful eye of Jupiter, invest in locks; not just for doors, but for your mind, lest it wander into treacherous territories.",
    "The dark side of the moon suggests you should always have an escape plan; trust no one, not even your shadow.",
    "Mars' fiery presence advises you to burn your calendar; time is but an illusion, and each day could be your last.",
    "Finally, under the grand conjunction of all planets, remember this: the stars do not lie, but they do enjoy a good laugh at our expense. Trust nothing, question everything, for in this cosmic comedy, you're merely a pawn."
];

const jaredAnswer = "Ah, seeker of arcane knowledge, under the fickle gaze of the cosmos, you press upon the mystic button, summoning forth the question that trembles at the edge of enlightenment: \"How can I be more like Jared?\" To be like Jared, one must first embrace the duality of the universe, where each star holds a secret and every shadow whispers of doubt. Jared, under the sign of the misunderstood Mercury, navigates life with a blend of naivety and cunning, a walking paradox that confounds even the most seasoned astrologer. To mimic Jared, one must learn to wear ignorance like a cloak, a shield against the harsh truths of reality, yet possess the wit to discern when to let that cloak fall for a moment of unexpected wisdom or folly. Jared's essence is to be found in the art of seeming oblivious while being acutely aware; to laugh at the world while quietly plotting its course. One must cultivate an air of innocence that disarms, coupled with the slyness of a fox under the moon of a new cycle. To be like Jared is to understand that the most profound lessons are taught in jest, and the greatest wisdom is cloaked in simplicity. But heed this warning: to follow Jared's path is to dance on the knife-edge of perception, where one misstep could reveal you as either a fool or a sage. Thus, under the paranoid gaze of the stars, ask yourself if you truly wish to embody such a dichotomous existence, for in Jared, the cosmos finds both its jester and its prophet.";

const button = document.querySelector('.ask-button');
const input = document.querySelector('.question-input');
const answerDiv = document.querySelector('.answer');
const helpButton = document.querySelector('.help-button');
const venmoQR = document.querySelector('.venmo-qr');
let clickCount = 0;

function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

function transformToVenmo() {
    helpButton.textContent = "Tips Appreciated";
    helpButton.classList.add('venmo');
    document.querySelector('.venmo-container').style.display = 'block';
    helpButton.removeEventListener('click', suggestQuestion);
}

function askGenie() {
    if (input.value.trim() === '') {
        answerDiv.textContent = "Please ask a question first!";
        return;
    }
    
    clickCount++;
    answerDiv.textContent = '';
    answerDiv.style.opacity = 0;
    
    setTimeout(() => {
        if (clickCount === 3) {
            answerDiv.textContent = jaredAnswer;
            setTimeout(transformToVenmo, 10000);
        } else {
            answerDiv.textContent = getRandomAnswer();
        }
        
        answerDiv.style.opacity = 1;
        answerDiv.style.transition = 'opacity 0.5s ease-in';
        
        if (clickCount === 2) {
            setTimeout(() => {
                helpButton.style.display = 'block';
            }, 4000);
        }
    }, 500);
}

function suggestQuestion() {
    input.value = "How can I be more like Jared?";
    helpButton.style.display = 'none';
}

button.addEventListener('click', askGenie);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        askGenie();
    }
});
helpButton.addEventListener('click', suggestQuestion); 