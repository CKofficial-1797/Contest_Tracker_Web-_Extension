import moment from "./node_modules/moment/dist/moment.js";

const sites = [
  "leetcode",
  "codeforces",
  "codechef",
  "at_coder",
  "hacker_earth",
  "hacker_rank",
  "kick_start"
];

function img_site(site) {
  if (site == "leetcode") {
    return "images/leetcode.png";
  } else if (site == "codeforces") {
    return "images/codeforces.png";
  } else if (site == "codechef") {
    return "images/codechef.svg";
  } else if (site == "at_coder") {
    return "images/at_coder.png";
  } else if (site == "kick_start") {
    return "images/kick_start.png";
  } else if (site == "hacker_earth") {
    return "images/hacker_earth.png";
  } else if (site == "hacker_rank") {
    return "images/hacker_rank.png";
  }
  return "";
}

function sortContestResp(data) {
  // Sort contests by start_time
  return data.sort(function(a, b) {
    return new Date(a.start_time) - new Date(b.start_time);
  });
}

function cards(completedata, site) {
  for (let i = 0; i < completedata.length; i++) {
    let card = document.createElement("div");
    card.style.padding = "20px";
    card.style.margin = "15px";
    card.style.border = "2px solid #3d5d7c";
    card.style.borderRadius = "10px";
    card.style.backgroundColor = "#f9f9f9";
    
    var fragment = document.createDocumentFragment();
    
    // Platform image
    var img = document.createElement("img");
    img.src = img_site(site);
    img.style.height = "45px";
    img.style.width = "160px";
    img.style.marginBottom = "15px";
    fragment.appendChild(img);
    
    // Contest name
    let title = document.createElement("H5");
    title.innerHTML = completedata[i].name;
    title.style.color = "#333";
    title.style.marginBottom = "10px";
    fragment.appendChild(title);
    
    // Duration formatter
    const duration_formatter = (dur) => {
      let a = "", b = "", c = "";
      if (dur / 86400 >= 1) {
        a = Math.floor(dur / 86400) + " Day";
        if (Math.floor(dur / 86400) > 1) a += "s";
        a += " ";
      }
      dur %= 86400;
      if (dur / 3600 >= 1) {
        b = Math.floor(dur / 3600) + " Hour";
        if (Math.floor(dur / 3600) > 1) b += "s";
        b += " ";
      }
      dur %= 3600;
      if (dur / 60 >= 1) {
        c = Math.floor(dur / 60) + " Minute";
        if (Math.floor(dur / 60) > 1) c += "s";
        c += " ";
      }
      return a + b + c;
    };
    
    // Duration
    let duration = document.createElement("P");
    duration.innerHTML = "Duration: ".bold() + duration_formatter(completedata[i].duration);
    duration.style.color = "#555";
    fragment.appendChild(duration);
    
    // Start time
    let start_time = document.createElement("P");
    start_time.innerHTML = "Event starts at: ".bold() + moment(completedata[i].start_time).format("LLLL");
    start_time.style.color = "#555";
    fragment.appendChild(start_time);
    
    // End time
    let end_time = document.createElement("P");
    end_time.innerHTML = "Event ends at: ".bold() + moment(completedata[i].end_time).format("LLLL");
    end_time.style.color = "#555";
    fragment.appendChild(end_time);
    
    // Time left
    let time_left = document.createElement("P");
    time_left.innerHTML = "Event starts ".bold() + moment(completedata[i].start_time).fromNow();
    time_left.style.color = "#e74c3c";
    time_left.style.fontWeight = "600";
    fragment.appendChild(time_left);
    
    // Contest link
    let link = document.createElement("a");
    var linkText = document.createTextNode("Visit Contest");
    link.appendChild(linkText);
    link.title = "Link";
    link.href = completedata[i].url;
    link.target = "_blank";
    link.style.color = "#5498e7";
    link.style.fontWeight = "600";
    link.style.textDecoration = "none";
    fragment.appendChild(link);
    
    var line = document.createElement("HR");
    fragment.appendChild(line);
    
    card.appendChild(fragment);
    let container_name = "#container-" + site;
    let container = document.querySelector(container_name);
    container.appendChild(card);
  }
}

function toggleContenstVisibility(site) {
  if (site == "all") {
    for (let i = 0; i < sites.length; i++) {
      document.getElementById("container-" + sites[i]).style.display = "block";
    }
  } else {
    for (let i = 0; i < sites.length; i++) {
      if (sites[i] == site) {
        document.getElementById("container-" + sites[i]).style.display = "block";
      } else {
        document.getElementById("container-" + sites[i]).style.display = "none";
      }
    }
  }
}

// Fetch LeetCode contests
fetch("https://www.kontests.net/api/v1/leet_code")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    cards(sortContestResp(completedata), "leetcode");
  })
  .catch((error) => {
    console.error("Error fetching LeetCode contests:", error);
  });

// Fetch CodeForces contests
fetch("https://www.kontests.net/api/v1/codeforces")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    cards(sortContestResp(completedata), "codeforces");
  })
  .catch((error) => {
    console.error("Error fetching CodeForces contests:", error);
  });

// Filter button functionality
let platform = "all";
const btn = document.querySelector("#btn");
let sb = document.querySelector("#contest");
btn.onclick = (e) => {
  e.preventDefault();
  platform = sb.value;
  toggleContenstVisibility(platform);
};
