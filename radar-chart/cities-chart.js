import Chart from 'chart.js/auto'

// Dataset containing all cities information
const citiesDataset = [
    {
        id: '1',
        city_name: 'Warsaw',
        region: 'Europe',
        global_data: [52.0, 21.6, 13.6, 55.2, 2.5],
        region_data: [65.0, 65.2, 33.0, 69.2, 23.1],
        city_data: [95.2, 25.28, 45.1, 32.1, 96.2],
    },
    {
        id: '2',
        city_name: 'Kuala Lumpur',
        region: 'Asia',
        global_data: [22.0, 71.6, 10.6, 25.2, 12.8],
        region_data: [75.0, 15.2, 12.7, 5.2, 53.6],
        city_data: [25.7, 25.28, 42.8, 56.2, 66.2],
    },
    {
        id: '3',
        city_name: 'Mexico City',
        region: 'Latin America',
        global_data: [27.2, 21.8, 13.6, 15.2, 102.5],
        region_data: [99.0, 62.7, 62.0, 34.2, 23.8],
        city_data: [55.2, 99.28, 45.1, 55.1, 26.2],
    }
];

// Labels for the radar chart axes
const labels = [
    'Social Impact',
    'Infrastructure',
    'Market Attractiveness',
    'System Efficiency',
    'Innovation',
];

let chartInstance = null;

// Function to render chart based on selected city
function renderChart(cityName) {
    // Find the city data from the dataset
    const cityData = citiesDataset.find(city => city.city_name === cityName);

    if (!cityData) {
        console.error(`City "${cityName}" not found in dataset`);
        return;
    }

    // Destroy existing chart if it exists
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Create new chart with 3 datasets: Global, Region, and City
    chartInstance = new Chart('cities-chart', {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Global',
                    data: cityData.global_data,
                    fill: true,
                    backgroundColor: 'rgba(39, 170, 245, 0.3)', // blue
                    borderColor: 'rgba(16, 151, 229, 0.7)',
                    borderWidth: 2,
                    pointRadius: 3,
                },
                {
                    label: cityData.region,
                    data: cityData.region_data,
                    fill: true,
                    backgroundColor: 'rgba(76, 16, 229, 0.25)', // purple
                    borderColor: 'rgba(76, 16, 229, 0.7)',
                    borderWidth: 2,
                    pointRadius: 3,
                },
                {
                    label: cityData.city_name,
                    data: cityData.city_data,
                    fill: true,
                    backgroundColor: 'rgba(8, 175, 10, 0.28)', // green
                    borderColor: 'rgba(8, 175, 10, 0.7)',
                    borderWidth: 2,
                    pointRadius: 3,
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: `City Comparison`,
                    align: 'center',
                    font: {
                        size: 18,
                    }
                },
                subtitle:{
                    display: true,
                    text: `${cityData.city_name}. ${cityData.region} `,
                    align: 'center',
                    font: {
                        size: 14,
                    },
                },
                legend: {
                    display: true,
                    position: 'top', 
                    labels: {
                        font: {
                            family: "Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana",
                        }
                    }
                }
            },
            layout: {
                padding: {
                    left: 80,
                    top: 20
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 20
                    }
                }
            }
        }
    });
}

// Initialize chart with value from hidden input
function initChart() {
    const hiddenInput = document.getElementById('selected-city');
    const selectedCity = hiddenInput.value || 'Mexico City'; // Default to mexico if empty
    renderChart(selectedCity);

    // Listen for changes to the hidden input
    hiddenInput.addEventListener('change', function() {
        renderChart(this.value);
    });
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChart);
} else {
    initChart();
}
