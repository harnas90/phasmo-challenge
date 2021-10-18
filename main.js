const btn = document.querySelector("button");
const closeButton = document.querySelector(".close-button");
// const txt = document.querySelector("span");
const modal = document.querySelector(".modal");
const task = document.querySelector(".task");
const drawAgain = document.querySelector(".draw-again");


const challenges = [
"Podstawowe przedmioty", 
"Zakaz wyjścia z domu do identyfikacji ducha", 
"Zakaz używania latarek", 
"Zabawa w chowanego",
"Musicie rozmawiać lub śpiewać podczas hunta",
"Zabierzcie wszystkie przedmioty z domu do ciężarówki",
"Zabierzcie wszystkie przedmioty z domu do miejsca przebywania ducha",
"Jedna osoba wchodzi do domu z kamerą na głowie. Reszta go prowadzi z ciężarówki",
"Jedyne co bierzecie to zapalniczke i świeczkę. Ciekawe kto umrze ostatni :)",
"Nie możecie zbierać dowodów dopóki sanity nie spadnie do 0%",
"Nie możecie zbierać dowodów dopóki ktoś nie zginie",
"Jesteście sceptykami. Musicie wymyślić racjonalne wyjaśnienia dla wszystkiego co się dzieje",
"Zakaz wyjścia z pokoju ducha dopóki nie znajdziecie wszystkich dowodów",
"Zakaz używania krótkofalówki",
"Zakaz ukrywania się podczas hunta. Tylko biegacie",
"Każdy gracz Banuje jeden przedmiot",
"Znajdź ducha bez włączania prądu",
"Zidentyfikuj ducha bez dowodów",
"Odśpiewaj hymn Rosji w pokoju ducha",
"Nie możecie ukrywać się w tym samym miejscu dwa razy z rzędu",
"Powiedz imię ducha za każdym razem gdy się wypowiadasz",
"Użyj tylko jednego słowa podczas komunikacji",
"Tylko jedna osoba przebywa w tym samym momencie w domu",
"Rzuć krucyfiksem w ducha",
"Powiedz 3 razy Krwawa Mary do każdego lustra które znajdziesz",
"Bądź w przysiadzie przez całą rundę",
"Chodź do tyłu",
"Zakaz mówienia innym graczom, że znaleziono dowód",
"Wszyscy gracze muszą trzymać się razem",
"Zaśpiewaj duchowi mydełko fa jeśli jest w łazience",
"Zakaz biegania",
];
let challenge = "";
let modalActive = false;
const drawChallenge = () => {
    if (modalActive == false){
    index = Math.floor(Math.random() * challenges.length);
    challenge = challenges[index];
    task.textContent = challenge;
    modal.classList.toggle("closed");
    btn.style.display = "none";
    drawAgain.style.display = "block";
    modalActive = !modalActive;
    };
    if (modalActive){
        index = Math.floor(Math.random() * challenges.length);
        challenge = challenges[index];
        task.textContent = challenge;
    } 
    console.log("works")
};

btn.addEventListener('click', drawChallenge);
drawAgain.addEventListener('click', drawChallenge);

closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    btn.style.display = "block";
    modalActive = !modalActive;
    drawAgain.style.display = "none";
  });