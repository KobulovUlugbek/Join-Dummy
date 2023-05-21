fetch('header.html')
  .then(response => response.text())
  .then(template => {
    document.getElementById('header-template').innerHTML = template;
  })
  .catch(error => {
    console.error('Error fetching template:', error);
  });

fetch('sidebar.html')
  .then(response => response.text())
  .then(template => {
    document.getElementById('sidebar-template').innerHTML = template;
  })
  .catch(error => {
    console.error('Error fetching template:', error);
  });