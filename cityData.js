async function getCoord(city) {
    const response = await fetch(`https://geocode.xyz/${city}?json=1`);
    const cityData = await response.json();
    console.log("City:", cityData.standard.city);
    console.log(`Latitude: ${cityData.latt}\nLongitude: ${cityData.longt}`);
}
getCoord('Chicago');