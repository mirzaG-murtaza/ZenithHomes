window.onload = function () {
  const paths = document.querySelectorAll("path");
  const popup = document.getElementById("popup");

  // Define an object to map state IDs to their corresponding names/text
  const stateNames = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California:<br> <ul><li>Solar Services</li><li>Home Security</li></ul>",
    CO: "Colorado <br> <ul><li>Solar Services</li><li>Home Security</li></ul>",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida <br> <ul><li>Solar Services</li><li>Home Security</li></ul>",
    GA: "Georgia<br> <ul><li>Solar Services</li><li>Home Security</li></ul>",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky<br> <ul><li>Solar Services</li><li>Home Security</li></ul>",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas:<br> <ul><li>Solar Services</li><li>Home Security</li></ul>",
    UT: "Utah:<br> <ul><li>Solar Services</li><li>Home Security</li><li>Water Filtration</li></ul>",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
  };

  paths.forEach((path) => {
    path.addEventListener("mouseover", (e) => {
      const stateId = e.target.id;
      const stateName = stateNames[stateId];
      // Display the state name with dollar sign in the popup dialog box
      popup.innerHTML = stateName;
      popup.style.display = "block";
      popup.style.top = `${e.clientY + window.scrollY}px`;
      popup.style.left = `${e.clientX + window.scrollX}px`;
    });
    path.addEventListener("mouseout", () => {
      // Hide the popup dialog box when mouse is moved out of the state
      popup.style.display = "none";
    });
  });
  paths.forEach((path) => {
    path.addEventListener("touchstart", (e) => {
      const stateId = e.target.id;
      const stateName = stateNames[stateId];
      // Display the state name with dollar sign in the popup dialog box
      popup.innerHTML = stateName;
      popup.style.display = "block";
      popup.style.top = `${e.touches[0].clientY + window.scrollY}px`;
      popup.style.left = `${e.touches[0].clientX + window.scrollX}px`;
    });
    path.addEventListener("touchend", () => {
      // Hide the popup dialog box when touch is released from the state
      popup.style.display = "none";
    });
  });

};
