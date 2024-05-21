const levels = {
    a1: [
        { word: 'Apple', meaning: 'Elma' },
        { word: 'Banana', meaning: 'Muz' },
        { word: 'Cat', meaning: 'Kedi' },
        { word: 'Dog', meaning: 'Köpek' },
        { word: 'Sun', meaning: 'Güneş' },
        { word: 'Moon', meaning: 'Ay' },
        { word: 'Water', meaning: 'Su' },

     
      
        
     
    ],
    a2: [
        { word: 'Car', meaning: 'Araba' },
        { word: 'Book', meaning: 'Kitap' },
        { word: 'Chair', meaning: 'Sandalye' },
        { word: 'Table', meaning: 'Masa' },
        { word: 'Computer', meaning: 'Bilgisayar' },
        { word: 'Phone', meaning: 'Telefon' },
        { word: 'House', meaning: 'Ev' },
        { word: 'School', meaning: 'Okul' },
        { word: 'Door', meaning: 'Kapı' },
        { word: 'Window', meaning: 'Pencere' },
        
        
    ],
    b1: [
        { word: 'Shirt', meaning: 'Gömlek' },
        { word: 'Pants', meaning: 'Pantolon' },
        { word: 'Dress', meaning: 'Elbise' },
        { word: 'Shoes', meaning: 'Ayakkabı' },
        { word: 'Hat', meaning: 'Şapka' },
        { word: 'Socks', meaning: 'Çorap' },
        { word: 'Jacket', meaning: 'Ceket' },
        { word: 'Skirt', meaning: 'Etek' },
        { word: 'Tie', meaning: 'Kravat' },
        { word: 'Coat', meaning: 'Palto' },
        { word: 'Ring', meaning: 'Yüzük' },
        { word: 'Necklace', meaning: 'Kolye' },
        
        
    ],
    b2: [
        { word: 'Chair', meaning: 'Sandalye' },
        { word: 'Table', meaning: 'Masa' },
        { word: 'Desk', meaning: 'Sıra' },
        { word: 'Sofa', meaning: 'Kanepe' },
        { word: 'Bed', meaning: 'Yatak' },
        { word: 'Couch', meaning: 'Koltuk' },
        { word: 'Bookshelf', meaning: 'Kitaplık' },
        { word: 'Lamp', meaning: 'Lamba' },
        { word: 'Mirror', meaning: 'Ayna' },
        { word: 'Rug', meaning: 'Halı' },
        { word: 'Curtain', meaning: 'Perde' },
        { word: 'Cabinet', meaning: 'Dolap' },
        { word: 'Closet', meaning: 'Gardırop' },
        { word: 'Drawer', meaning: 'Çekmece' },
        { word: 'Stool', meaning: 'Tabure' },
    ],
    c1: [
        { word: 'Abandon', meaning: 'Terk Etmek' },
        { word: 'Acquire', meaning: 'Edinmek' },
        { word: 'Adapt', meaning: 'Uyum Sağlamak' },
        { word: 'Advocate', meaning: 'Savunmak' },
        { word: 'Allocate', meaning: 'Tahsis Etmek' },
        { word: 'Analyze', meaning: 'Analiz Etmek' },
        { word: 'Anticipate', meaning: 'Beklemek' },
        { word: 'Approach', meaning: 'Yaklaşmak' },
        { word: 'Assess', meaning: 'Değerlendirmek' },
        { word: 'Assume', meaning: 'Varsaymak' },
        { word: 'Augment', meaning: 'Arttırmak' },
        { word: 'Clarify', meaning: 'Açıklığa Kavuşturmak' },
        { word: 'Coerce', meaning: 'Zorlamak' },
        { word: 'Cohere', meaning: 'Tutarlı Olmak' },
        { word: 'Commence', meaning: 'Başlamak' },
    ],
    c2: [
        { word: 'Aberration', meaning: 'Sapma' },
        { word: 'Abhor', meaning: 'Nefret Etmek' },
        { word: 'Acquiesce', meaning: 'Razı Olmak' },
        { word: 'Alacrity', meaning: 'İsteklilik' },
        { word: 'Amiable', meaning: 'Sevimli' },
        { word: 'Appease', meaning: 'Yatıştırmak' },
        { word: 'Arcane', meaning: 'Gizemli' },
        { word: 'Avarice', meaning: 'Açgözlülük' },
        { word: 'Brazen', meaning: 'Utanmaz' },
        { word: 'Brusque', meaning: 'Kaba' },
        { word: 'Cajole', meaning: 'Tatlı Dille İkna Etmek' },
        { word: 'Callous', meaning: 'Duygusuz' },
        { word: 'Candor', meaning: 'Açık Sözlülük' },
        { word: 'Chide', meaning: 'Azarlamak' },
        { word: 'Clandestine', meaning: 'Gizli' },
    ],
    cümle1: [
        { sentence: 'I love reading books.', meaning: 'Kitap okumayı severim.' },
        { sentence: 'She is going to the market.', meaning: 'O, pazara gidiyor.' },
        { sentence: 'We traveled to Paris last year.', meaning: 'Geçen yıl Paris\'e seyahat ettik.' },
        { sentence: 'He enjoys playing football.', meaning: 'Futbol oynamaktan hoşlanır.' },
        { sentence: 'The cat is sleeping on the sofa.', meaning: 'Kedi kanepede uyuyor.' },
        { sentence: 'They are watching a movie.', meaning: 'Onlar bir film izliyor.' },
        { sentence: 'I need to buy some groceries.', meaning: 'Biraz bakkaliye almam gerekiyor.' },
        { sentence: 'She likes to listen to music.', meaning: 'Müzik dinlemeyi sever.' },
        { sentence: 'He was born in 1990.', meaning: '1990 yılında doğdu.' },
        { sentence: 'We have been friends for ten years.', meaning: 'On yıldır arkadaşız.' },
        { sentence: 'The weather is very hot today.', meaning: 'Hava bugün çok sıcak.' },
        { sentence: 'I will call you later.', meaning: 'Seni daha sonra arayacağım.' },
        { sentence: 'She works at a hospital.', meaning: 'O, bir hastanede çalışıyor.' },
        { sentence: 'We are planning a trip to Italy.', meaning: 'İtalya\'ya bir gezi planlıyoruz.' },
        { sentence: 'He is learning Spanish.', meaning: 'İspanyolca öğreniyor.' },
        { sentence: 'They moved to a new house.', meaning: 'Yeni bir eve taşındılar.' },
        { sentence: 'I like to drink coffee in the morning.', meaning: 'Sabahları kahve içmeyi severim.' },
        { sentence: 'She was reading a book when I arrived.', meaning: 'Ben geldiğimde kitap okuyordu.' },
        { sentence: 'We went to the beach last weekend.', meaning: 'Geçen hafta sonu plaja gittik.' },
        { sentence: 'He enjoys cooking.', meaning: 'Yemek yapmaktan hoşlanır.' },
        { sentence: 'The children are playing outside.', meaning: 'Çocuklar dışarıda oynuyor.' },
        { sentence: 'I need to finish my homework.', meaning: 'Ödevimi bitirmem gerekiyor.' },
        { sentence: 'She is a very good singer.', meaning: 'O, çok iyi bir şarkıcı.' },
        { sentence: 'We visited the museum yesterday.', meaning: 'Dün müzeyi ziyaret ettik.' },
        { sentence: 'He is very talented.', meaning: 'O, çok yetenekli.' },
        { sentence: 'They are building a new house.', meaning: 'Yeni bir ev inşa ediyorlar.' },
        { sentence: 'I like to go hiking.', meaning: 'Doğa yürüyüşüne gitmeyi severim.' },
        { sentence: 'She is a doctor.', meaning: 'O, bir doktor.' },
        { sentence: 'We are having dinner now.', meaning: 'Şu anda akşam yemeği yiyoruz.' },
        { sentence: 'He loves to travel.', meaning: 'Seyahat etmeyi sever.' },
    ],
    cümle2: [
        { sentence: 'The sun rises in the east.', meaning: 'Güneş doğudan doğar.' },
        { sentence: 'He is writing a letter.', meaning: 'O, bir mektup yazıyor.' },
        { sentence: 'They went to the zoo.', meaning: 'Onlar hayvanat bahçesine gittiler.' },
        { sentence: 'I have a meeting at 3 PM.', meaning: 'Saat 3\'te bir toplantım var.' },
        { sentence: 'She enjoys painting.', meaning: 'O, resim yapmaktan hoşlanır.' },
        { sentence: 'We are watching the sunset.', meaning: 'Gün batımını izliyoruz.' },
        { sentence: 'He is a good dancer.', meaning: 'O, iyi bir dansçı.' },
        { sentence: 'They are having a barbecue.', meaning: 'Onlar mangal yapıyor.' },
        { sentence: 'I like to read before bed.', meaning: 'Yatmadan önce okumayı severim.' },
        { sentence: 'She is learning to play the piano.', meaning: 'O, piyano çalmayı öğreniyor.' },
        { sentence: 'We visited our grandparents.', meaning: 'Biz büyüklerimizi ziyaret ettik.' },
        { sentence: 'He is afraid of spiders.', meaning: 'O, örümceklerden korkar.' },
        { sentence: 'They are going to the cinema.', meaning: 'Onlar sinemaya gidiyor.' },
        { sentence: 'I have a cat named Whiskers.', meaning: 'Whiskers adlı bir kedim var.' },
        { sentence: 'She is very intelligent.', meaning: 'O, çok zeki.' },
        { sentence: 'We are planning a surprise party.', meaning: 'Sürpriz bir parti planlıyoruz.' },
        { sentence: 'He likes to go fishing.', meaning: 'O, balık tutmayı sever.' },
        { sentence: 'They moved to a new city.', meaning: 'Yeni bir şehre taşındılar.' },
        { sentence: 'I enjoy playing chess.', meaning: 'Satranç oynamaktan hoşlanırım.' },
        { sentence: 'She is a talented artist.', meaning: 'O, yetenekli bir sanatçı.' },
        { sentence: 'We went hiking in the mountains.', meaning: 'Dağlarda yürüyüşe çıktık.' },
        { sentence: 'He is reading a science fiction book.', meaning: 'O, bir bilim kurgu kitabı okuyor.' },
        { sentence: 'They are playing basketball.', meaning: 'Onlar basketbol oynuyor.' },
        { sentence: 'I like to listen to podcasts.', meaning: 'Podcast dinlemeyi severim.' },
        { sentence: 'She is baking a cake.', meaning: 'O, bir kek pişiriyor.' },
        { sentence: 'We are going on a road trip.', meaning: 'Bir yolculuğa çıkıyoruz.' },
        { sentence: 'He loves to watch movies.', meaning: 'Film izlemeyi sever.' },
        { sentence: 'They are decorating the house.', meaning: 'Onlar evi süslüyor.' },
        { sentence: 'I have a meeting tomorrow.', meaning: 'Yarın bir toplantım var.' },
        { sentence: 'She is learning how to swim.', meaning: 'O, yüzmeyi öğreniyor.' },
    ]
};




function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

let firstCard, secondCard;
let lockBoard = false;
let score = 0;

function createCard(word, meaning, id) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = id;
    card.dataset.word = word;
    card.dataset.meaning = meaning;
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">${word}</div>
        </div>
    `;
    card.addEventListener("click", () => flipCard(card));
    return card;
}

function initializeGame() {
    const gameBoards = document.querySelectorAll('.game-board');
    gameBoards.forEach((board) => {
        const level = board.id;
        const words = levels[level];
        const wordPairs = words.flatMap(item => [
            { word: item.word || item.sentence, meaning: item.meaning },
            { word: item.meaning, meaning: item.word || item.sentence }
        ]);
        const shuffledWords = shuffle(wordPairs).slice(0, 30);

        shuffledWords.forEach((item, index) => {
            const card = createCard(item.word, item.meaning, index);
            board.appendChild(card);
        });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('flipped'));

    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped'));
    }, 2000);
}

function flipCard(card) {
    if (lockBoard) return;
    if (card === firstCard) return;

    card.classList.add('flipped');

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.meaning === secondCard.dataset.word || firstCard.dataset.word === secondCard.dataset.meaning;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', () => flipCard(firstCard));
    secondCard.removeEventListener('click', () => flipCard(secondCard));
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    score++;

    document.querySelector(".score-value").textContent = score;
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.add('unmatched');
        secondCard.classList.add('unmatched');
    }, 300);

    setTimeout(() => {
        firstCard.classList.remove('flipped', 'unmatched');
        secondCard.classList.remove('flipped', 'unmatched');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Game initialization
initializeGame();

document.querySelector(".start-game").addEventListener("click", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('flipped'));
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped'));
    }, 2000);
});
