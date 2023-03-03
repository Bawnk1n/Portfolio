const languages = ['Japanese', 'Arabic', 'Czech', 'Spanish'];
const wordOrPhrase = ['Word', 'Phrase'];
const Words = {
    japanese: ['こんにちは (Konnichiwa)', 'ありがとう (Arigatou)', 'すみません (Sumimasen)', 'おはようございます (Ohayou gozaimasu)', 'こんばんは (Konbanwa)', 'はい (Hai)', 'いいえ (Iie)', 'おいしい (Oishii)', 'かわいい (Kawaii)', 'さようなら (Sayounara)'  ],
    japaneseTranslation: ['Hello','Thank You', 'Excuse Me/I\'m Sorry', 'Good Morning', 'Good Evening', 'Yes', 'No', 'Delicious', 'Cute', 'Goodbye'  ],
    arabic: ['مرحبا (Marhaba)', 'شكرا (Shukran)', 'عذرا (A\'dharan)', 'صباح الخير (Sabah al-khair)', 'مساء الخير (Masa al-khair)', 'نعم (Na\'am)', 'لا (La)', 'لذيذ (Lathiih)', 'جميل (Jamiil)', 'وداعا (Wadaeaan)'],
    arabicTranslation: ['Hello', 'Thank You', 'Excuse Me, I\'m sorry', 'Good Morning', 'Good Evening', 'Yes', 'No', 'Delicious', 'Beautiful', 'Goodbye'],
    spanish: ['Hola', 'Adios', 'Gracias', 'Lo Siento', 'Buenos Dias', 'Buenas Noches', 'Sí', 'No', 'Delicioso', 'Lindo'],
    spanishTranslation: ['Hello', 'Goodbye', 'Thank You', 'I\'m Sorry', 'Good Morning', 'Good Evening', 'Yes', 'No', 'Delicious', 'Cute'],
    czech: ['Přesně', 'Příšerně', 'Skvěle', 'Výjimečný ', 'Roztomilý', 'Podivný', 'Zvláštní', 'Nádherný', 'Rozhodně', 'Bezva'],
    czechTranslation: ['Precisely', 'Terribly', 'Wonderfully', 'Exceptional', 'Cute', 'Strange', 'Special', 'Gorgeous', 'Definitely', 'Cool']
}
const Phrases = {
    japanese: ['お疲れ様でした (Otsukaresama deshita)', '頑張って (Ganbatte)', 'おめでとうございます (Omedetou gozaimasu)', 'いただきます (Itadakimasu)', '行ってきます (Ittekimasu)', 'お邪魔します (Ojama shimasu)', '失礼します (Shitsurei shimasu)', 'お願いします (Onegaishimasu)', 'よろしくお願いします (Yoroshiku onegaishimasu)', 'ただいま (Tadaima)'],
    japaneseTranslation: ['"Thank you for your hard work" and is commonly used in Japan to show appreciation to coworkers or colleagues.', '"Do your best" and is often used to encourage someone to work hard or persevere.', '"Congratulations" and is commonly used to celebrate someone\'s achievements or milestones.', '"I humbly receive" and is used as a way of showing gratitude for the food.', '"I\'m off" or "I\'ll be back.", and is used when leaving the house or office', '"Excuse me for disturbing you." and is used when entering someone\'s home or office', '"Excuse me for leaving." and  is used when leaving a conversation or a meeting', '"Please" and is often used when making a request or asking for something.', '"Please be kind to me" and is commonly used when meeting someone for the first time or starting a new relationship.', '"I\'m home." and is used when returning home'],
    arabic: ['يعطيك العافية (Y\'ateek al-afiyah)', 'أحسنت (Ahsant)', 'ما شاء الله (Masha\' Allah)', 'الحمد لله (Alhamdulillah)', 'إن شاء الله (In sha\'a Allah)', 'حظ سعيد (Haz saeid)', 'يا سلام (Ya salam)', 'لا تشغل بالك (La tashghil balak)', 'صبراً جميلاً (Sabran jameelan)', 'بالهناء والشفاء (Bilhanaa wa al-shifaa)'],
    arabicTranslation: ['"May God give you health" and is used as an expression of gratitude or appreciation.', '"Well done" and is used as a compliment for a job well done', '"God has willed it" and is used as a way of acknowledging someone\'s achievements or success.', '"Praise be to God" and is used as an expression of thanks or gratitude.', '"God willing" and is used when making plans or expressing hopes for the future.', '"Good luck" and is used to wish someone good luck or success in their endeavors.', '"Wow" or "That\'s amazing" and is used to express excitement or admiration.', '"Don\'t worry" or "Don\'t stress" and is used to reassure someone.', '"Patience is beautiful" and is used to encourage someone to be patient in difficult situations.', '"Bon appetit" or "Enjoy your meal" and is used before a meal.' ],
    spanish: ['No hay mal que por bien no venga', 'Ojalá', '¡Que aproveche!', 'Hasta la vista, baby!', 'No pasa nada', 'Tengo ganas de ti', 'Vale la pena', 'Estoy hasta las narices', 'No me importa un pepino', 'La vida es una fiesta'],
    spanishTranslation: ['"Every cloud has a silver lining" and is used to express the idea that something good can come from a bad situation.', '"I hope" and is used to express a strong wish or desire.', '"Enjoy your meal!" and is used before a meal.', '"See you later, baby!" and is a playful way of saying goodbye.', '"No worries" and is used to reassure someone that everything is okay.', '"I want you" and is a romantic expression used to express desire for someone.', '"It\'s worth it" and is used to express that something is valuable or worthwhile.', '"I\'m fed up" and is used to express frustration or annoyance.', '"I don\'t care at all" and is a humorous way of saying that something is of no importance.', '"Life is a party" and is used to express the idea that life should be enjoyed and celebrated.'],
    czech: ['Všechno nejlepší!', 'Jít si po svých', 'Mít hlavu plnou myšlenek', 'Hledat jehlu v kupce sena', 'Být v sedmém nebi', 'Být v háji', 'Vylézt na štěpána', 'Kdo hledá, najde', 'Co oči nevidí, to srdce nebolí', 'Mít po krk'],
    czechTranslation: ['"All the best!" and is used to wish someone well on their birthday or other special occasion.', '"To go one\'s own way" and is used to encourage someone to follow their own path in life.', '"To have a head full of thoughts" and is used to describe someone who is deep in thought or contemplation.', ' "To look for a needle in a haystack" and is used to describe a situation where something is very difficult to find.', '"To be in seventh heaven" and is used to describe a state of extreme happiness or bliss.', '"To be in the forest" and is used to describe a situation where things are not going well or have gone wrong.', '"To climb to the top of a flagpole" and is used to describe someone who is being overly ambitious or taking unnecessary risks.', '"Whoever seeks, shall find" and is used to encourage someone to keep looking or searching for something.', '"What the eyes don\'t see, the heart doesn\'t grieve over" and is used to suggest that ignorance can sometimes be bliss.', '"To have up to one\'s neck" and is used to describe a situation where someone is overwhelmed or has had enough.']
}


const generateString = () => {

const randomLanguage = languages[Math.floor(Math.random() * languages.length)]
const isWordOrPhrase = wordOrPhrase[Math.floor(Math.random() * wordOrPhrase.length)]

if (randomLanguage === 'Japanese') {
    if (isWordOrPhrase === 'Word') {
        const index = Math.floor(Math.random() * 10);
        const japaneseWord = Words.japanese[index];
        const japaneseTranslation = Words.japaneseTranslation[index];
        return `The word "${japaneseWord}" means "${japaneseTranslation}" in ${randomLanguage}`
    }
    else if (isWordOrPhrase === 'Phrase') {
        const phraseIndex = Math.floor(Math.random() * 10);
        const japanesePhrase = Phrases.japanese[phraseIndex];
        const japanesePhraseTranslation = Phrases.japaneseTranslation[phraseIndex];
        return `The ${randomLanguage} phrase "${japanesePhrase}" means ${japanesePhraseTranslation}`
    }
}
else if (randomLanguage === 'Arabic') {
    if (isWordOrPhrase === 'Word') {
        const index = Math.floor(Math.random() * 10);
        const arabicWord = Words.arabic[index];
        const arabicTranslation = Words.arabicTranslation[index];
        return `The word "${arabicWord}" means "${arabicTranslation}" in ${randomLanguage}`
    }
    else if (isWordOrPhrase === 'Phrase') {
        const phraseIndex = Math.floor(Math.random() * 10);
        const arabicPhrase = Phrases.arabic[phraseIndex];
        const arabicPhraseTranslation = Phrases.arabicTranslation[phraseIndex];
        return `The ${randomLanguage} phrase "${arabicPhrase}" means ${arabicPhraseTranslation}`
    }
}
else if (randomLanguage === 'Spanish') {
    if (isWordOrPhrase === 'Word') {
        const index = Math.floor(Math.random() * 10);
        const spanishWord = Words.spanish[index];
        const spanishTranslation = Words.spanishTranslation[index];
        return `The word "${spanishWord}" means "${spanishTranslation}" in ${randomLanguage}`
    }
    else if (isWordOrPhrase === 'Phrase') {
        const phraseIndex = Math.floor(Math.random() * 10);
        const spanishPhrase = Phrases.spanish[phraseIndex];
        const spanishPhraseTranslation = Phrases.spanishTranslation[phraseIndex];
        return `The ${randomLanguage} phrase "${spanishPhrase}" means ${spanishPhraseTranslation}`
    }
}
else if (randomLanguage === 'Czech') {
    if (isWordOrPhrase === 'Word') {
        const index = Math.floor(Math.random() * 10);
        const czechWord = Words.czech[index];
        const czechTranslation = Words.czechTranslation[index];
        return `The word "${czechWord}" means "${czechTranslation}" in ${randomLanguage}`
    }
    else if (isWordOrPhrase === 'Phrase') {
        const phraseIndex = Math.floor(Math.random() * 10);
        const czechPhrase = Phrases.czech[phraseIndex];
        const czechPhraseTranslation = Phrases.czechTranslation[phraseIndex];
        return `The ${randomLanguage} phrase "${czechPhrase}" means ${czechPhraseTranslation}`
    }
}

}

// console.log(randomLanguage)
// console.log(isWordOrPhrase)
//console.log(generateString())

let wordGeneratorParagraph = document.getElementById('word-generator-p');
let wordGeneratorButton = document.getElementById('word-generator-button');

let j=0;
let intervalId;

let wordGeneratorCover = document.getElementById('word-generator-cover-text')
let wordGeneratorButtonTwo = document.getElementById('word-generator-button-two')

const removeCover = () => {
    wordGeneratorCover.hidden = true;
}
const bringCoverBack = () => {
    wordGeneratorCover.hidden = false;
}
wordGeneratorCover.addEventListener('click', removeCover)
wordGeneratorButtonTwo.addEventListener('click', bringCoverBack)

const changeWord = () => {
    wordGeneratorParagraph.innerHTML = generateString();
    wordGeneratorParagraph.style.color = 'black';
    j=0;
    wordGeneratorButton.innerHTML = 'Keep It Going!';
}
const specialDelivery = () => {  
    clearInterval(intervalId);

    const text = wordGeneratorParagraph.innerText;
    let html = '';
    for (let i = 0 ; i<text.length ; i++){
        html += `<span id = "span${i}">${text[i]}</span>`;
    }
    wordGeneratorParagraph.innerHTML = html;

    intervalId = setInterval(function(){
        const changeSpan = document.getElementById('span'+j);
        changeSpan.style.color = 'burgandy';
        changeSpan.style.textShadow = '.7px .7px .7px black';
        j++;
        if (j>= text.length) {
            clearInterval(intervalId);
        }
    }, 15 );

    
}

wordGeneratorButton.addEventListener('mousedown', changeWord);
wordGeneratorButton.addEventListener('mousedown', specialDelivery);




