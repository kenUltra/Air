export function checkData(cause) {
	if (!cause.ok) {
		throw new Error(cause.statusText, "the data can't be found");
	}
	return cause();
}
export async function hostPage() {
	const iconTop = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const header = await checkData(iconTop);
	return header.icons;
}
export async function main() {
	const one = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const use = await checkData(one);
	return use.mainOne;
}
export async function second() {
	const secon = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const use = await checkData(secon);
	return use.second;
}
export async function images() {
	const image = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const use = await checkData(image);
	return use.contentImage;
}
export async function airCover() {
	const data = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const useD = await checkData(data);
	return useD.AirCover;
}
export async function HostAir() {
	const host = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const see = await checkData(host);
	return see.superHost;
}
export async function ApartAirbnb() {
	const apart = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const ap = await checkData(apart);
	return ap.airbnbApart;
}
export async function question() {
	const all = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const res = await checkData(all);
	return res.question;
}
export async function footer() {
	const end = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const use = await checkData(end);
	return use.footer;
}
export async function stack() {
	const ip = await fetch("https://airbnb-api-l62o.onrender.com/Home");
	const ips = await checkData(ip);
	return ips.userplace;
}
