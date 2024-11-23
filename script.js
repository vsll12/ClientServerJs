
function showList(arr) {
    document.getElementById("list").innerHTML = "";
    arr.forEach((element) => {
      let li = document.createElement("li");
      li.innerHTML = `
          <p>${element.product_name}</p>
          <p>${element.product_description}</p>
          <p>${element.product_price}</p>
          <p>${element.id}</p>
          <img src="${element.url}" alt="">
          `;
      document.getElementById("list").appendChild(li);
    });
  };
  

  function start(){

    fetch(`http://localhost:5000/goods`, {method : "GET",}).then((response) => {
      return response.json();
    }).then((data) => {
      if(Array.isArray(data)){
        console.log(data);
        showList(data);
      }
    })

  }

  start();

  