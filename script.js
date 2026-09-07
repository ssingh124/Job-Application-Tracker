const form = document.getElementById("jobApplicationForm");
const jobs = [];

//getting container of columns to variables for section 3
const appliedContainer = document.getElementById("jobApplied");
const interviewContainer = document.getElementById("jobInterview");
const rejectedContainer = document.getElementById("jobRejected");
const acceptedContainer = document.getElementById("jobAccepted");


//Listening to Submit button Press
form.addEventListener("submit", function(event) {
let appliedHTML = "";
let interviewHTML = "";
let rejectedHTML = "";
let acceptedHTML = "";

    event.preventDefault();  //By default, when a form is submitted, the browser tries to submit/reload the page. Since we're handling the form with JavaScript, we usually want to stop that.

    //Getting values of input fields to variables
    const dateInput = document.getElementById("applicationDate");
    const companyNameInput = document.getElementById("companyName");
    const positionInput = document.getElementById("position");
    const statusInput = document.getElementById("status");
    
    const date= dateInput.value;  
    const companyName= companyNameInput.value;  
    const position= positionInput.value;  
    const status= statusInput.value;  
    
    // Create a brand new object with those values
  const job = {
    date: date,
    companyName: companyName,
    position: position,
    status:status
  };

  //Pushing object job{} to array of obects jobs[]

    jobs.push(job);




//Section - 2------------------------------------------------------------

//Filtering object and checking - Status:Applied total
const appliedJobs = jobs.filter(function(job) {
    return job.status === "applied";
});
document.getElementById("totalApplied").textContent = appliedJobs.length;

//Filtering object and checking - Status:Interview total
const interviewJobs = jobs.filter(function(job) {
    return job.status === "interview";
});
document.getElementById("totalInterview").textContent = interviewJobs.length;

//Filtering object and checking - Status:Rejected total
const rejectedJobs = jobs.filter(function(job) {
    return job.status === "rejected";
});
document.getElementById("totalRejected").textContent = rejectedJobs.length;

//Filtering object and checking - Status:Accepted total
const acceptedJobs = jobs.filter(function(job) {
    return job.status === "accepted";
});
document.getElementById("totalAccepted").textContent = acceptedJobs.length;



// Section 3 - Displaying values of array of objects to html-----------------------------------------


//Run
// Running loop for jobs array of Objects
jobs.forEach(job => {
    
    //Checking jobs array and then adding values to HTML tags
    if (job.status === "applied") {
        appliedHTML += `
    <div class="job-card" style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <p><strong>Date:</strong> ${job.date}</p>
      <p><strong>Company:</strong> ${job.companyName}</p>
      <p><strong>Position:</strong> ${job.position}</p>
      <p><strong>Status:</strong> ${job.status}</p>
    </div>
  `;
    }

    else if (job.status === "interview") {
        interviewHTML += `
    <div class="job-card" style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <p><strong>Date:</strong> ${job.date}</p>
      <p><strong>Company:</strong> ${job.companyName}</p>
      <p><strong>Position:</strong> ${job.position}</p>
      <p><strong>Status:</strong> ${job.status}</p>
    </div>
  `;
    }

    else if (job.status === "rejected") {
        rejectedHTML += `
    <div class="job-card" style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <p><strong>Date:</strong> ${job.date}</p>
      <p><strong>Company:</strong> ${job.companyName}</p>
      <p><strong>Position:</strong> ${job.position}</p>
      <p><strong>Status:</strong> ${job.status}</p>
    </div>
  `;
    }

    else if (job.status === "accepted") {
        acceptedHTML += `
    <div class="job-card" style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <p><strong>Date:</strong> ${job.date}</p>
      <p><strong>Company:</strong> ${job.companyName}</p>
      <p><strong>Position:</strong> ${job.position}</p>
      <p><strong>Status:</strong> ${job.status}</p>
    </div>
  `;
    }

});

//attaching values to HTML

appliedContainer.innerHTML = appliedHTML;
interviewContainer.innerHTML = interviewHTML;
rejectedContainer.innerHTML = rejectedHTML;
acceptedContainer.innerHTML = acceptedHTML;


});