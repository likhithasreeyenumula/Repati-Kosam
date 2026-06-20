// SOS Button

function sendSOS() {
    alert("🚨 SOS Alert Sent To Emergency Contacts!");
}

// Add Medicine

function addMedicine() {

    let medicine = document.getElementById("medicineName").value;
    let dose = document.getElementById("dose").value;
    let time = document.getElementById("time").value;

    if(medicine === "" || dose === "" || time === ""){
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("medicineTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = medicine;
    row.insertCell(1).innerHTML = dose;
    row.insertCell(2).innerHTML = time;

    row.insertCell(3).innerHTML =
    "<button onclick='deleteMedicine(this)'>Delete</button>";

    alert("Medicine Added Successfully!");

    document.getElementById("medicineName").value = "";
    document.getElementById("dose").value = "";
    document.getElementById("time").value = "";
}

// Delete Medicine

function deleteMedicine(btn) {

    let row = btn.parentNode.parentNode;

    row.parentNode.removeChild(row);

    alert("Medicine Deleted");
}

// Edit Profile

function updateProfile() {

    alert("✅ Profile Updated Successfully");
}

// Upload Record

function uploadRecord() {

    alert("📋 Medical Record Uploaded Successfully");
}

// Emergency Contact Save

function saveContact() {

    alert("📞 Emergency Contact Saved");
}

// AI Assistant

function sendMessage() {

    let input = document.getElementById("userInput");

    let chat = document.getElementById("chat");

    if(input.value.trim() === "")
        return;

    let userMsg =
    `<div class="user">${input.value}</div>`;

    chat.innerHTML += userMsg;

    let reply =
    "🤖 Please consult your doctor for medical advice. I can help with medicine schedules, reminders and health records.";

    let botMsg =
    `<div class="bot">${reply}</div>`;

    chat.innerHTML += botMsg;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}

// Reminder Notification

function medicineReminder() {

    alert("💊 Time To Take Your Medicine!");
}

// Auto Reminder Every 1 Hour

setInterval(function(){

console.log("Checking Medicine Schedule...");

},3600000);