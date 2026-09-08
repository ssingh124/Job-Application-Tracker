# Job Application Tracker

A responsive Job Application Tracker built with **HTML, CSS, and vanilla JavaScript**.

I created this project as a portfolio piece to demonstrate how I can combine HTML, CSS, and JavaScript to build a practical, interactive web application from scratch.

## 🚀 Live Demo

**[View Live Demo] https://ssingh124.github.io/Job-Application-Tracker/

## 📂 GitHub Repository

**[View Source Code] https://github.com/ssingh124/Job-Application-Tracker.git

---

## 📌 About the Project

Searching for a job often means keeping track of many applications, companies, positions, and application statuses.

This project provides a simple dashboard where users can:

* Add a new job application
* Record the application date
* Enter the company name
* Enter the position
* Select an application status
* View application totals by status
* Move applications between different stages
* View applications organized on a Kanban-style board

The main purpose of this project was to practice and demonstrate **JavaScript fundamentals and DOM manipulation** while building something practical.

---

## ✨ Features

### Add Job Applications

Users can add a job application with:

* Application date
* Company name
* Position
* Status

### Application Dashboard

The dashboard automatically displays the number of applications in each status:

* Applied
* Interview
* Rejected
* Accepted

The numbers update dynamically whenever the application data changes.

### Application Board

Applications are displayed in separate columns based on their current status.

```text
Applied → Interview → Accepted
                  ↘ Rejected
```

Users can move an application from one stage to another using the available buttons.

### Responsive Design

The application is responsive across different screen sizes.

The layout adapts for:

* Desktop
* Tablet
* Mobile

CSS Grid and media queries are used to change the layout depending on the available screen width.

---

## 🛠️ Technologies Used

### HTML5

Used to create the structure and semantic layout of the application.

Key concepts used:

* Forms
* Labels and inputs
* Select elements
* Buttons
* Sections
* Semantic elements

### CSS3

Used for styling and responsive layout.

Key concepts used:

* CSS variables
* CSS Grid
* Responsive design
* Media queries
* Flexibility with different screen sizes
* Form styling
* Button states
* Box shadows
* CSS transitions

### JavaScript

JavaScript is the main focus of this project.

Key concepts demonstrated:

* DOM manipulation
* Event listeners
* Form handling
* Arrays
* Objects
* Array methods
* `filter()`
* `find()`
* `forEach()`
* Template literals
* Dynamic HTML rendering
* `data-*` attributes
* Conditional logic
* Updating the DOM
* Generating unique IDs with `crypto.randomUUID()`

---

## 🧠 JavaScript Concepts Demonstrated

One of the main goals of this project was to practice managing application data with JavaScript.

Each job application is represented as an object:

```javascript
const job = {
    id: crypto.randomUUID(),
    date: date,
    companyName: companyName,
    position: position,
    status: status
};
```

Job applications are stored in an array:

```javascript
const jobs = [];
```

When the user submits the form, the application is added to the array:

```javascript
jobs.push(job);
```

The interface is then re-rendered based on the current data:

```javascript
renderJobs();
```

The dashboard uses `filter()` to calculate the number of applications in each status:

```javascript
const appliedJobs = jobs.filter(function(job) {
    return job.status === "applied";
});
```

The application board uses the job status to determine which column the application should appear in.

When a user clicks a "Move" button, JavaScript finds the corresponding job using its unique ID:

```javascript
const job = jobs.find(function(job) {
    return job.id === jobId;
});
```

The job's status is then changed and the interface is rendered again.

This approach helped me understand the relationship between **application state, JavaScript logic, and the DOM**.

---

## 📱 Responsive Layout

The application uses CSS Grid and responsive breakpoints.

### Desktop

The form displays multiple fields across a single row, while the dashboard and application board use four columns.

### Tablet

The form changes to a two-column layout, and the dashboard and application board change to two columns.

### Mobile

The application changes to a single-column layout to make the interface easier to use on smaller screens.

Example:

```css
@media (max-width: 1024px) {
    #jobApplicationForm {
        grid-template-columns: auto 1fr;
    }

    .dash-row-wrapper {
        grid-template-columns: repeat(2, 1fr);
    }

    .board-cols-wrapper {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    #jobApplicationForm {
        grid-template-columns: 1fr;
    }

    .dash-row-wrapper {
        grid-template-columns: 1fr;
    }

    .board-cols-wrapper {
        grid-template-columns: 1fr;
    }
}
```

---

## 📁 Project Structure

```text
job-application-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🎯 What I Learned

Building this project helped me strengthen my understanding of:

* Connecting HTML, CSS, and JavaScript
* Working with the DOM
* Handling form submissions
* Storing application data in JavaScript objects and arrays
* Using array methods to manipulate and find data
* Dynamically generating HTML
* Using event delegation
* Updating UI based on application state
* Building responsive layouts with CSS Grid
* Using media queries for different screen sizes
* Structuring a small front-end project

Most importantly, I learned how JavaScript logic can control what users see and interact with on a webpage.

---

## 🔮 Future Improvements

There are several features I would like to add in future versions:

* Save applications using `localStorage`
* Delete applications
* Edit existing applications
* Add notes to applications
* Add search and filtering
* Sort applications by date
* Add confirmation before deleting an application
* Improve accessibility
* Add drag-and-drop functionality
* Add application statistics and charts

---

## 👨‍💻 About Me

I am a junior web developer building projects to strengthen my front-end development skills and prepare for my first professional web development role.

I am particularly interested in opportunities where I can continue learning, contribute to real-world projects, and grow as a developer.

**Technologies I am currently working with:**

* HTML
* CSS
* JavaScript
* Responsive Web Design
* Git & GitHub

---

## 📄 License

This project is open source and available for learning and portfolio purposes.
