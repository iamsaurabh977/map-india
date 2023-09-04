const generateBoothData = () => {
    const IndiaStates = [
        {
            "state": "Uttar Pradesh",
            "stateAbbreviation": "UP",
            "booths": []
        },
        {
            "state": "Maharashtra",
            "stateAbbreviation": "MH",
            "booths": [

            ]
        },

    ];

    for (let stateIndex = 0; stateIndex < IndiaStates.length; stateIndex++) {
        for (let i = 1; i <= 10000; i++) {
            const boothData = {
                "boothNumber": `${IndiaStates[stateIndex].stateAbbreviation}00${i}`,
                "boothName": `${IndiaStates[stateIndex].stateAbbreviation}-Booth-${i}`,
                "lat": 20 + (Math.random() - 0.5) * 10,
                "long": 77 + (Math.random() - 0.5) * 10,
                "people": {
                    "boothNumber": "A123",
                    "boothName": "Sample Booth",
                    "location": "africa",
                    "venue": "Convention Center",
                    "city": "Example City",
                    "country": "Example Country",
                    " has_bike": true

                },
            };

            IndiaStates[stateIndex].booths.push(boothData);
        }
    }

    return IndiaStates;
};

const HeatmapData = generateBoothData();

export default HeatmapData;

console.log(HeatmapData);
