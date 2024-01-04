document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://my.api.mockaroo.com/wedkowanie.json?key=afaaf6d0';

    fetch(apiUrl)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Group data by fish type and calculate total lenght and count for each type
        const groupedData = data.reduce((acc, item) => {
          const fishType = item.Fish;
          const Lenght = item.Lenght || 0; // Assuming Lenght is a numeric property
  
          if (!acc[fishType]) {
            acc[fishType] = { totalLenght: 0, count: 0 };
          }
  
          acc[fishType].totalLenght += Lenght;
          acc[fishType].count++;
  
          return acc;
        }, {});
  
        // Calculate average width for each fish type
        const averages = {};
        for (const fishType in groupedData) {
          averages[fishType] = groupedData[fishType].totalLenght / groupedData[fishType].count;
        }
  
        // Extract labels and values from the grouped data
        const labels = Object.keys(averages);
        const values = Object.values(averages);
  
        // Create a chart using Chart.js
        const ctx = document.getElementById('myChart2').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [{
                label: 'Średnia długość ryby: ',
                data: values,
                backgroundColor: 'rgba(221, 158, 205, 0.2)', // Adjust color as needed
                borderColor: 'rgba(221, 158, 205, 1)',     // Adjust color as needed
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
      })
  });