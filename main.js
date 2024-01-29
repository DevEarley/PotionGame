var cards = [];
var roomOffset = 0;
var playerOffset = 0;
var points = 0;
var hand = [];

var roomInput;
var playerInput;
var introContainer;
var rulesContainer;
var cardsContainer;
var pointsContainer;
var cardsButtonsContainer;
var card_1_Container;
var card_2_Container;
var card_3_Container;
var navigationContainer;

function onclick_drawThree() {
	drawThree();
}

function onclick_navigation_Rules() {
	document.location.search = navigate("rules");
}

function onclick_navigation_Play() {
	document.location.search = navigate("intro");
}

function onclick_addPoint() {
	points++;
	pointsContainer.innerHTML = "POINTS: " + points;
}

function onclick_removePoint() {
	points--;
	pointsContainer.innerHTML = "POINTS: " + points;
}

function onclick_Join() {
	document.location.search = navigate_to_play();
}

function navigate_to_play() {

	if (isNaN(parseInt(roomInput.value))) {
		roomOffset = 0;
	}
	else {
		roomOffset = parseInt(roomInput.value);
	}
	if (isNaN(parseInt(playerInput.value))) {
		playerOffset = 0;
	}
	else {
		playerOffset = parseInt(playerInput.value);
	}

	return navigate("play") + navigateTo("room", roomOffset) + navigateTo("player", playerOffset);
}

function navigate(value) {
	return navigateTo("nav", value);
}

function drawThree() {
	hand = [];
	hand.push(pickCard("curse"));
	hand.push(pickCard("cause"));
	hand.push(pickCard("cure"));
	RenderHand();
}

function pickCard(type) {
	var cardsOfType = cards.filter(c => c.type == type);
	console.log("cardsOfType");
	var offsetID = 0;
	if (parseInt(roomOffset) > 0) {
		offsetID = getRandomIndex(cardsOfType.length);
	}
	else {
		offsetID = parseInt(roomOffset) + parseInt(playerOffset);
	}
	console.log(offsetID);
	var cardIndex = indexWithOffset(offsetID, cardsOfType.length);
	console.log("cardIndex");
	console.log(cardIndex);
	var card = cardsOfType[cardIndex];
	return card;
}

function getRandomIndex(arrayLength) {
	return parseInt(Math.random() * arrayLength) % arrayLength;

}
function indexWithOffset(offset, arrayLength) {
	var index = 0;
	if (offset >= arrayLength) {
		offset += parseInt(Math.random() * arrayLength)
		index = offset % arrayLength;
	}
	else {
		index = offset;
	}
	return index;
}

function RenderCard(container, card) {
	container.innerHTML = `<img src='${card.imgUrl}'/>`;
	container.innerHTML += `<hr/>`
	container.innerHTML += `<h1>${card.name}</h1>`
	container.innerHTML += `<hr/>`
	container.innerHTML += `<h1>${card.type}</h1>`
	container.innerHTML += `<hr/>`
	container.innerHTML += `<p>${card.description}</p>`
}

function RenderHand() {
	console.log(hand);
	RenderCard(card_1_Container, hand[0]);
	RenderCard(card_2_Container, hand[1]);
	RenderCard(card_3_Container, hand[2]);
}

function navigateTo(key, value, first) {
	key = encodeURIComponent(key);
	value = encodeURIComponent(value);

	if (first) {

		return "?" + key + "=" + value;
	}
	else {
		return "&" + key + "=" + value;

	}
}

function createCard(name, imgUrl, type, description) {
	cards.push(
		{
			name: name,
			imgUrl: imgUrl,
			type: type,
			description: description
		}
	);
}

(function init() {
	roomInput = document.getElementById("room-input");
	playerInput = document.getElementById("player-input");

	introContainer = document.getElementById("intro-container");
	rulesContainer = document.getElementById("rules-container");
	cardsContainer = document.getElementById("cards-container");
	pointsContainer = document.getElementById("points-container");
	cardsButtonsContainer = document.getElementById("cards-buttons-container");
	card_1_Container = document.getElementById("card-1-container");
	card_2_Container = document.getElementById("card-2-container");
	card_3_Container = document.getElementById("card-3-container");
	navigationContainer = document.getElementById("navigation-container");

	createCard("Vial of Mushroom Wine", "1.png", "cure", "Someone else says 'Thank You'.");
	createCard("Vial of Dog Slober", "2.png", "cure", "Someone else says 'walk' or 'treat'");
	createCard("Specific Poison", "3.png", "cure", "Someone else says 'specifically' or 'exactly'");
	createCard("Baker's Brew", "4.png", "cure", "Someone else claps their hands.");
	createCard("Up Lifting Libation", "5.png", "cure", "Someone else says 'high five' or gives one.");
	createCard("Sleepy Spirit", "6.png", "cure", "Someone else says 'good night' or 'I am tired'.");
	createCard("Vial of Seagull Crap", "7.png", "cure", "Someone else stands up or raises their hand.");
	createCard("Bubbly Brew", "8.png", "cure", "Someone else says 'speak up' or 'quiet down' or goes 'shhh'");
	createCard("Primate Potion", "9.png", "cure", "Someone else says 'zoo' or 'monkey' or 'banana'.");
	createCard("Vial of Mongoose Tears", "10.png", "cause", "Any time soneone adjusts their clothing in any way.");
	createCard("Position Potion", "11.png", "cause", "Any time someone says 'here' or 'there'");
	createCard("Potion of the Peppered Puffin", "12.png", "cause", "Any time someone touches their face.");
	createCard("Binocular Brew", "13.png", "cause", "Any time someone looks at you");
	createCard("Speaking Poison", "14.png", "cause", "Any time you speak.");
	createCard("Vial of Curiosity", "15.png", "cause", "Any time someone asks you a question");
	createCard("Simple Concoction", "16.png", "cause", "Any time someone says 'uh'");
	createCard("Chuckle Concoction", "17.png", "cause", "Any time someone tells a joke.");
	createCard("Tonic of Thirst", "18.png", "cause", "Any time someone takes a sip of something.");
	createCard("Vial of Lizard Juice", "19.png", "cause", "Any time someone rests their hand or arm on a table");
	createCard("Vial of Rat Liqour", "20.png", "curse", "You must adjust your clothing.");
	createCard("Cloudy Concoction", "21.png", "curse", "You must say 'lovely weather we are having'");
	createCard("Purr-fect Potion", "22.png", "curse", "You must meow like a cat.");
	createCard("Loud Libation", "23.png", "curse", "You must change the volume of your voice after every word.");
	createCard("Outstanding Potion", "24.png", "curse", "You must stand up and sit down. Or raise your hand up and down.");
	createCard("Pocket Potion", "25.png", "curse", "You must stuff your hands into your pockets. Or say 'Pockets!'");
	createCard("Vial of Vague", "26.png", "curse", "You must be says something vauge.");
	createCard("Bottle of Laughs", "27.png", "curse", "You must belly laugh");
	createCard("Good Boy Brew", "28.png", "curse", "You must bark like a dog");
	createCard("Dark Roast Brew", "29.png", "curse", "You must yawn and say 'good morning'.");
	createCard("Vial of Apple Juice", "30.png", "curse", "Say a random fact and act like a teacher");
	createCard("Vial of Sand", "31.png", "curse", "You must blink 3 times in a row.");

	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});

	let nav = params.nav;
	if (nav == "play") {
		roomOffset = parseInt(params.room);
		playerOffset = parseInt(params.player);
		introContainer.style.display = 'none';
		///cardsContainer.style.display = 'none';
		rulesContainer.style.display = 'none';
		navigationContainer.style.display = 'none';
		drawThree();
	}
	else if (nav == "intro") {
		//introContainer.style.display = 'none';
		cardsContainer.style.display = 'none';
		rulesContainer.style.display = 'none';
		navigationContainer.style.display = 'none';
	}
	else if (nav == "rules") {
		introContainer.style.display = 'none';
		cardsContainer.style.display = 'none';
		//rulesContainer.style.display = 'none';
		navigationContainer.style.display = 'none';
	}
	else {
		introContainer.style.display = 'none';
		cardsContainer.style.display = 'none';
		rulesContainer.style.display = 'none';
		//navigationContainer.style.display = 'none';
	}
})()
