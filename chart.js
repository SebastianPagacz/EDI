document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://my.api.mockaroo.com/wedkowanie.json?key=afaaf6d0';
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Group data by fish type and count occurrences
        const groupedData = data.reduce((acc, item) => {
          const Fish = item.Fish;
          if (!acc[Fish]) {
            acc[Fish] = 0;
          }
          acc[Fish]++;
          return acc;
        }, {});
  
        // Extract labels and values from the grouped data
        const labels = Object.keys(groupedData);
        const values = Object.values(groupedData);
  
        // Create a chart using Chart.js
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              label: 'Ilość złapanych ryb',
              data: values,
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: false,
              }
            }
          },
        });
      })

  });
