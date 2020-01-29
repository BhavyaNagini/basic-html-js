let form=[]
document.getElementById("sub").addEventListener("click",function(e) {
  e.preventDefault()
  let fname=document.getElementById("fname").value
  let lname=document.getElementById("lname").value
  let age=document.getElementById("age").value
  let tal=document.getElementById("tal").value

  // console.log(fname,lname,age,tal);
  
  form.push({fname,lname,age,tal})  
  document.getElementById("message").textContent="hello "+fname+"thank u for submitting"

  setTimeout(() => {
    document.getElementById("fname").value=""
    document.getElementById("lname").value=""
    document.getElementById("age").value=""
    document.getElementById("tal").value=""
    document.getElementById("message").textContent=""

  }, 2000);
  render()
    
})
console.log(form);


const render=()=>{
  let values=form.map(item =>{
    return `<tr>
    <td>${item.fname}</td>
    <td>${item.lname}</td>
    <td>${item.age}</td>
    <td>${item.tal}</td>
    </tr>`
  })
  document.getElementById("table").innerHTML= `<table style="width:100%">
<tr>
  <th>Firstname</th>
  <th>Lastname</th> 
  <th>Age</th>
  <th>Talents</th>
</tr>
${values}
</table>`


}


// const nameChange =()=>{
//    document.getElementById("name").textContent="kumar"
   
// }
// const b=()=>{
//   document.getElementById("name").style.color='yellow'
    
// }

