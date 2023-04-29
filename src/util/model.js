import { checkData } from './hostPage';
export function makeUpper(changetext) {
	const start = [...changetext];
	const changeOnce = start[0].toUpperCase();
	start[0] = changeOnce;
	return start.join("");
}
export function selectElement(elementTarget) {
	return document.body.querySelector(elementTarget);
}
export function manyElement(target) {
	return document.body.querySelectorAll(target);
}
export async function getHeaderData() {
	const action = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-location");
	const head = await checkData(action);
	const icons = head.Header;
	return icons;
}
export async function textHeader() {
	const main = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-location");
	const firstNave = await checkData(main);
	return [firstNave.centerNavigation, firstNave.newCenterNavigation];
}
export async function subNavData() {
	const makeSome = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-location");
	const start = await checkData(makeSome);
	return start.subHeader;
}
export async function lotData() {
	const pount = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-location");
	const usePoint = await checkData(pount);
	return usePoint.infinite;
}
export async function mobileSize() {
	const m = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-location");
	const mob = await checkData(m);
	return mob.mobileData;
}
export async function searchTitle() {
	const data = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-location");
	const get = await checkData(data);
	return get.newNavigation.parentNewNav;
}
export async function datesStack() {
	const mainData = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-location");
	const use = await checkData(mainData);
	return use.dates;
}
export async function searchContent() {
	const data = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-location");
	const get = await checkData(data);
	return get.newNavigation.childNewNav;
}
export async function Languages() {
	const leng = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-lang");
	const use = await checkData(leng);
	return use.language;
}
export function stringMonth(addOne = 0) {
	let month;
	const defaultYear = new Date(2023);
	const userDate = new Date();
	if (defaultYear.getFullYear() <= userDate.getFullYear()) {
		month = changeDate(userDate.getMonth() + addOne);
	} else {
		month = changeDate(defaultYear.getMonth() + addOne);
	}
	return month;
}
function changeDate(month) {
	let string;
	switch (month) {
		case 0:
			string = "January";
			break;
		case 1:
			string = "February";
			break;
		case 2:
			string = "March";
			break;
		case 3:
			string = "April";
			break;
		case 4:
			string = "May";
			break;
		case 5:
			string = "June";
			break;
		case 6:
			string = "July";
			break;
		case 7:
			string = "August";
			break;
		case 8:
			string = "September";
			break;
		case 9:
			string = "October";
			break;
		case 10:
			string = "November";
			break;
		default:
			string = "December";
			break;
	}
	return string;
}
