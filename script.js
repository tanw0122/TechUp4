const problemData = {
  engine: {
    description: "If the engine won't start, it may be due to battery failure or starter motor issues.",
  },
  brakes: {
    description: "Brake issues can be caused by worn-out pads or low brake fluid.",
  },
  battery: {
    description: "Battery problems are common in cold weather or if the car hasn't been used recently.",
  }
};

const workshops = [
  {
    name: "FastFix Auto",
    location: "north",
    rating: 4.5,
    specialisation: "engine",
    priceListed: true,
    contact: "123-456-789",
    hours: "9am - 6pm"
  },
  {
    name: "Brake Masters",
    location: "central",
    rating: 4.2,
    specialisation: "brakes",
    priceListed: false,
    contact: "987-654-321",
    hours: "10am - 7pm"
  },
  {
    name: "Battery Pros",
    location: "south",
    rating: 3.8,
    specialisation: "battery",
    priceListed: true,
    contact: "555-123-456",
    hours: "8am - 5pm"
  }
];

function showProblemDescription() {
  const select = document.getElementById("problemSelect");
  const problemKey = select.value;
  const descDiv = document.getElementById("problemDescription");
  
  if (problemKey && problemData[problemKey]) {
    descDiv.innerHTML = `<p>${problemData[problemKey].description}</p>`;
  } else {
    descDiv.innerHTML = "";
  }
}

function filterWorkshops() {
  const location = document.getElementById("locationFilter").value;
  const rating = parseFloat(document.getElementById("ratingFilter").value);
  const showPrice = document.getElementById("showPrice").checked;
  const selectedProblem = document.getElementById("problemSelect").value;

  const filtered = workshops.filter(workshop => {
    return (
      (location === "" || workshop.location === location) &&
      (isNaN(rating) || workshop.rating >= rating) &&
      (!showPrice || workshop.priceListed) &&
      (selectedProblem === "" || workshop.specialisation === selectedProblem)
    );
  });

  displayWorkshops(filtered);
}

function displayWorkshops(list) {
  const container = document.getElementById("workshopList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No workshops found.</p>";
    return;
  }

  list.forEach(workshop => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${workshop.name}</strong><br>
      Location: ${workshop.location}<br>
      Rating: ${workshop.rating}<br>
      Contact: ${workshop.contact}<br>
      Hours: ${workshop.hours}<br>
      Price Listed: ${workshop.priceListed ? "Yes" : "No"}
    `;
    container.appendChild(div);
  });
}
