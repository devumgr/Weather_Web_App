fetch("country_list.json")
.then(function(response){
   return response.json();
})
.then(function(lists){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let list of lists){
      out += `
    
    <tr>
      <td>${list.country}</td>
      <td>${list.capital}</td>
      
    </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});