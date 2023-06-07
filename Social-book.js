

const settingsElement = document.querySelector(".settings-menu");
const toggleSettings = document.querySelector ("#dark-btn");

function settingsMenuToggle() {
	settingsElement.classList.toggle("settings-menu-height");
 }

function darkBtnOn () {
	toggleSettings.classList.toggle("dark-btn-on");
	document.body.classList.toggle("dark-theme");
 }