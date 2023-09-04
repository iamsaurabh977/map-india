// // const heatData = [
// //     {
// //       latitude: 28.6139,
// //       longitude: 77.2090,
// //       heat_value: 10,
// //     },
// //     {
// //       latitude: 26.8467,
// //       longitude: 80.9462,
// //       heat_value: 20,
// //     },
    
// //   ];
// //   export default heatData ;
// const heatData = [];

// // Define latitude and longitude boundaries for India
// const indiaLatitudeMin = 8.4;
// const indiaLatitudeMax = 37.6;
// const indiaLongitudeMin = 68.1;
// const indiaLongitudeMax = 97.4;

// for (let i = 0; i < 100; i++) {
//   const latitude = Math.random() * (indiaLatitudeMax - indiaLatitudeMin) + indiaLatitudeMin;
//   const longitude = Math.random() * (indiaLongitudeMax - indiaLongitudeMin) + indiaLongitudeMin;
//   const heat_value = Math.floor(Math.random() * 100);

//   heatData.push({ latitude, longitude, heat_value });
// }

// export default heatData;
const heatData = [];

// Define latitude and longitude boundaries for Uttar Pradesh
const uttarPradeshLatitudeMin = 23.6345;
const uttarPradeshLatitudeMax = 30.4478;
const uttarPradeshLongitudeMin = 77.1448;
const uttarPradeshLongitudeMax = 84.1266;

for (let i = 0; i < 100; i++) {
  const latitude = Math.random() * (uttarPradeshLatitudeMax - uttarPradeshLatitudeMin) + uttarPradeshLatitudeMin;
  const longitude = Math.random() * (uttarPradeshLongitudeMax - uttarPradeshLongitudeMin) + uttarPradeshLongitudeMin;
  const heat_value = Math.floor(Math.random() * 100);

  heatData.push({ latitude, longitude, heat_value });
}

export default heatData;
