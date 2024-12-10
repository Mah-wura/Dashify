document.addEventListener("DOMContentLoaded", () => {
  // Initialize the charts
  document.body.style.background = "linear-gradient(to bottom, #ffffff, #f0f0f0)";
  document.body.style.color = "#000";
  renderGrowthChart();
  renderDemographicsChart();
});

// Follower Growth Chart
const growthCtx = document.getElementById("growthChart").getContext("2d");
const growthChart = new Chart(growthCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Follower Growth",
        data: [200, 400, 600, 800, 1200, 1500],
        borderColor: "#00aced",
        backgroundColor: "rgba(0, 172, 237, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Followers",
        },
      },
    },
  },
});

// Audience Demographics Chart
const demographicsCtx = document.getElementById("demographicsChart").getContext("2d");
const demographicsChart = new Chart(demographicsCtx, {
  type: "doughnut",
  data: {
    labels: ["18-24", "25-34", "35-44", "45+"],
    datasets: [
      {
        label: "Audience Age Groups",
        data: [40, 35, 15, 10],
        backgroundColor: ["#f4a261", "#e76f51", "#2a9d8f", "#264653"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  },
});
// Quick Actions Functions
function createPost() {
  alert("Redirecting to 'Create New Post' page...");
}

function viewMessages() {
  alert("Opening your messages...");
}

function schedulePost() {
  alert("Scheduling a new post...");
}
// Update Profile
function updateProfile() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (username && email) {
    alert(`Profile updated! \nUsername: ${username} \nEmail: ${email}`);
  } else {
    alert("Please fill out all fields!");
  }
}

// Change Theme
function changeTheme(theme) {
  if (theme === "light") {
    document.body.style.background = "linear-gradient(to bottom, #ffffff, #f0f0f0)";
    document.body.style.color = "#000";
    

  } else {
    document.body.style.background = "linear-gradient(to bottom, #073642, #002b36)";
    document.body.style.color = "#fff";
  }
}

// Update Notification Preferences
function updateNotifications() {
  const emailNotifications = document.getElementById("emailNotifications").checked;
const notificationBtn = document.querySelector(".notification-btn");
const notificationList = document.querySelector(".notification-list");

notificationBtn.addEventListener("click", () => {
  notificationList.style.display = notificationList.style.display === "none" ? "block" : "none";
});
// Generate new badge
function generateNewBadge() {
  const badges = [
    "🏆 Milestone: 1,000 Followers",
    "🌟 Engagement Pro: 500 Comments",
    "🔥 Viral Post: 10,000 Views",
    "📈 Growth Master: 2,000 Followers in a Month"
  ];
  const randomBadge = badges[Math.floor(Math.random() * badges.length)];
  document.getElementById("badge-title").textContent = randomBadge;
}
// Add tooltips to charts
new Chart(growthCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Follower Growth",
      data: [200, 400, 600, 800, 1200, 1500],
      borderColor: "#00aced",
      backgroundColor: "rgba(0, 172, 237, 0.2)",
      fill: true,
    }]
  },
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            return `Followers: ${context.raw}`;
          }
        }
      }
    }
  }
})};
