const URL='https://jsonplaceholder.typicode.com/users';

   function createTableHeader() {
    const thead = document.querySelector('#tablehead');
    const headerRow = document.createElement('tr');

    const headers = ['Name', 'Email', 'City'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
}
createTableHeader();

  fetch(URL)
  .then(response => response.json())
  .then(users => {
    

    const tableBody = document.querySelector('#usertabletbody');
    tableBody.innerHTML = '';

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.name}</td>    
        <td>${user.email}</td>   
        <td>${user.address.city}
      `;
      tableBody.appendChild(row);
     
    });
  });


  