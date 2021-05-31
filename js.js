const m = moment()
const getCurrentHour = moment().hour()
let output =(m.format("dddd MMMM Do YYYY"));
$("#currentDay").text(output)


const timeblock=["9AM", "10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
const militaryTime =[9,10,11,12,13,14,15,16,17]
const row = $(".row")

for (let index = 0; index <9; index++) {
    var status = ""
    if(getCurrentHour === militaryTime[index]){
        status = "present"
    }
    
    if(getCurrentHour > militaryTime[index]) {
        status = "past"
    }

    if(getCurrentHour < militaryTime[index]) {
        status = "future"
    }
    row.append(`
    <div class="col-sm-1 mt-4 hour " >${timeblock[index]}</div>
    <div class="col-sm-10">
        <textarea name="textarea" class="form-control w-100 ${status}" id="input"   rows="3"></textarea>
    </div>
    <div class="col-sm-1">
        <button id=${timeblock[index]} class="saveBtn" >Save</button>
    </div>
    `)
}
 

let btns = document.querySelectorAll(".saveBtn")

for (i of btns) {
    i.addEventListener("click", function(e){
        var userText = e.target.parentElement.previousSibling.previousSibling.firstChild.nextSibling.value
        localStorage.setItem(timeblock, userText)
        
    })
 }

 