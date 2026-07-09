const FIXTURES = [
  { d: "14", m: "MAR", opp: "Mumbai Indians", venue: "MA Chidambaram Stadium, Chennai", time: "7:30 PM IST", status: "upcoming" },
  { d: "18", m: "MAR", opp: "Royal Challengers Bengaluru", venue: "M. Chinnaswamy Stadium, Bengaluru", time: "7:30 PM IST", status: "upcoming" },
  { d: "22", m: "MAR", opp: "Kolkata Knight Riders", venue: "MA Chidambaram Stadium, Chennai", time: "3:30 PM IST", status: "upcoming" },
  { d: "27", m: "MAR", opp: "Sunrisers Hyderabad", venue: "Rajiv Gandhi Stadium, Hyderabad", time: "7:30 PM IST", status: "upcoming" },
  { d: "02", m: "APR", opp: "Rajasthan Royals", venue: "MA Chidambaram Stadium, Chennai", time: "7:30 PM IST", status: "upcoming" },
  { d: "07", m: "MAR", opp: "Punjab Kings", venue: "MA Chidambaram Stadium, Chennai", time: "7:30 PM IST", status: "win", result: "Won by 6 wickets" },
  { d: "03", m: "MAR", opp: "Delhi Capitals", venue: "Arun Jaitley Stadium, Delhi", time: "7:30 PM IST", status: "loss", result: "Lost by 14 runs" },
  { d: "27", m: "FEB", opp: "Gujarat Titans", venue: "Narendra Modi Stadium, Ahmedabad", time: "7:30 PM IST", status: "win", result: "Won by 22 runs" },
];
const SQUAD = [
  { n: "MS Dhoni", jersey: 7, role: "Wicketkeeper", bio: "Thala. Former India captain, finisher, and the calmest man in a run chase." },
  { n: "Ruturaj Gaikwad", jersey: 33, role: "Batter", bio: "Elegant top-order run-machine and current CSK captain." },
  { n: "Ravindra Jadeja", jersey: 8, role: "All-rounder", bio: "Explosive lower-order hitter, sharp fielder, and a genuine matchwinner with the ball." },
  { n: "Devon Conway", jersey: 19, role: "Batter", bio: "Left-handed opener known for calm, controlled starts at the top." },
  { n: "Shivam Dube", jersey: 25, role: "All-rounder", bio: "Power-hitting middle-order all-rounder who can also chip in with the ball." },
  { n: "Matheesha Pathirana", jersey: 18, role: "Bowler", bio: "Slinger with a Malinga-style action and lethal death-overs yorkers." },
  { n: "Deepak Chahar", jersey: 90, role: "Bowler", bio: "New-ball specialist known for early swing and breakthroughs." },
  { n: "Ajinkya Rahane", jersey: 3, role: "Batter", bio: "Experienced top-order batter bringing calm and craft to the line-up." },
  { n: "Rachin Ravindra", jersey: 21, role: "All-rounder", bio: "Left-handed opener and handy spin option, in-form on the world stage." },
  { n: "Sameer Rizvi", jersey: 22, role: "Batter", bio: "Young, fearless middle-order hitter from the CSK academy pipeline." },
];
const RUNS_BOARD = [
  { n: "MS Dhoni", v: "5,000+" },
  { n: "Suresh Raina", v: "5,500+" },
  { n: "Ruturaj Gaikwad", v: "3,400+" },
  { n: "Faf du Plessis", v: "3,000+" },
  { n: "Devon Conway", v: "1,800+" },
];
const WICKETS_BOARD = [
  { n: "Ravindra Jadeja", v: "170+" },
  { n: "Deepak Chahar", v: "90+" },
  { n: "Dwayne Bravo", v: "180+" },
  { n: "Shardul Thakur", v: "60+" },
  { n: "Matheesha Pathirana", v: "45+" },
];
const NEWS = [
  { tag: "Squad", title: "CSK finalise middle-order combinations ahead of home stretch", blurb: "Team management trials fresh batting orders across the last two practice sessions at Chepauk.", date: "2 days ago" },
  { tag: "Match Report", title: "Clinical bowling effort seals a low-scoring thriller", blurb: "Disciplined death bowling and sharp fielding held the chasing side to a total under par.", date: "5 days ago" },
  { tag: "Fitness", title: "All-rounder cleared after fitness assessment", blurb: "The management confirms a key bowling all-rounder is available for selection this week.", date: "6 days ago" },
  { tag: "Stadium", title: "Chepauk pitch report: expect turn from the middle overs", blurb: "Groundstaff note a drier surface than the season opener, favouring spin through the middle.", date: "1 week ago" },
  { tag: "Academy", title: "Young pace prospect added to the training squad", blurb: "A net bowler from the CSK academy programme joins full squad training this week.", date: "1 week ago" },
  { tag: "Fan Culture", title: "Yellove Army plans a stand-wide tifo for the next home game", blurb: "Supporter groups coordinate a coordinated card display ahead of the next Chepauk fixture.", date: "9 days ago" },
];
const FORUM = [
  { t: "Best possible XI for a spin-friendly Chepauk pitch?", m: "48 replies · active now" },
  { t: "Rating the new home jersey — thoughts?", m: "112 replies · active 2h ago" },
  { t: "Who's driving down for the KKR game — carpool thread", m: "23 replies · active 5h ago" },
  { t: "Underrated performance of the season so far?", m: "31 replies · active 1d ago" },
];
const POLL_OPTIONS = [
  { label: "Devon Conway", votes: 412 },
  { label: "Rachin Ravindra", votes: 356 },
  { label: "Ajinkya Rahane", votes: 149 },
  { label: "A new domestic pick", votes: 98 },
];
const TICKER_ITEMS = [
  "CSK vs MI — Mar 14, Chepauk, 7:30 PM IST",
  "Ruturaj Gaikwad named captain for the home stretch",
  "Ticket sales open for the KKR fixture",
  "Pathirana cleared full training load",
  "Yellove Army tifo planned for next home game",
  "Pre-season net sessions begin this week",
];
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}, { passive: true });
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("is-open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));
const tickerTrack = document.getElementById("tickerTrack");
const tickerHTML = TICKER_ITEMS.map(t => `<span>&#9679;</span>${t}`).join("");
tickerTrack.innerHTML = tickerHTML + tickerHTML;
const fixtureList = document.getElementById("fixtureList");
function renderFixtures(filter){
  const items = FIXTURES.filter(f => filter === "upcoming" ? f.status === "upcoming" : f.status !== "upcoming");
  fixtureList.innerHTML = items.map(f => `
    <div class="fixture-card reveal is-visible">
      <div class="fixture-date"><span class="d">${f.d}</span><span class="m">${f.m}</span></div>
      <div class="fixture-main">
        <div class="matchup">CSK vs ${f.opp}</div>
        <div class="venue">${f.venue} &middot; ${f.time}</div>
      </div>
      <div class="fixture-status ${f.status === "upcoming" ? "upcoming" : f.status}">
        ${f.status === "upcoming" ? "Upcoming" : f.result}
      </div>
    </div>
  `).join("");
}
renderFixtures("upcoming");
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    renderFixtures(tab.dataset.filter);
  });
});
const squadGrid = document.getElementById("squadGrid");
function initials(name){ return name.split(" ").map(w => w[0]).join("").slice(0,2); }
function renderSquad(filter){
  const items = filter === "all" ? SQUAD : SQUAD.filter(p => p.role === filter);
  squadGrid.innerHTML = items.map(p => `
    <div class="player-card reveal is-visible">
      <span class="player-jersey">${p.jersey}</span>
      <div class="player-avatar">${initials(p.n)}</div>
      <div class="player-name">${p.n}</div>
      <div class="player-role">${p.role}</div>
      <p class="player-bio">${p.bio}</p>
    </div>
  `).join("");
}
renderSquad("all");
document.querySelectorAll("#squadFilters .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#squadFilters .chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderSquad(chip.dataset.role);
  });
});
document.getElementById("runsBoard").innerHTML = RUNS_BOARD.map(r => `<li>${r.n} <b>${r.v}</b></li>`).join("");
document.getElementById("wicketsBoard").innerHTML = WICKETS_BOARD.map(r => `<li>${r.n} <b>${r.v}</b></li>`).join("");
function countUp(el){
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1200;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.getElementById("newsGrid").innerHTML = NEWS.map(n => `
  <article class="news-card reveal">
    <span class="news-tag">${n.tag}</span>
    <h3>${n.title}</h3>
    <p>${n.blurb}</p>
    <span class="news-date">${n.date}</span>
  </article>
`).join("");
const pollForm = document.getElementById("pollForm");
const pollTotal = document.getElementById("pollTotal");
let pollVotedIndex = null;
function totalVotes(){ return POLL_OPTIONS.reduce((sum, o) => sum + o.votes, 0); }
function renderPoll(){
  const total = totalVotes();
  pollForm.innerHTML = POLL_OPTIONS.map((o, i) => {
    const pct = total ? Math.round((o.votes / total) * 100) : 0;
    return `
      <label class="poll-option ${pollVotedIndex === i ? "is-picked" : ""}" data-index="${i}">
        <input type="radio" name="poll" value="${i}" ${pollVotedIndex === i ? "checked" : ""}>
        <span class="fill" style="width:${pollVotedIndex !== null ? pct : 0}%"></span>
        <span class="label">${o.label}</span>
        <span class="pct">${pollVotedIndex !== null ? pct + "%" : ""}</span>
      </label>
    `;
  }).join("");
  pollTotal.textContent = `${total.toLocaleString()} votes cast${pollVotedIndex !== null ? " · thanks for voting!" : ""}`;
}
renderPoll();
pollForm.addEventListener("click", (e) => {
  const option = e.target.closest(".poll-option");
  if (!option || pollVotedIndex !== null) return;
  const idx = Number(option.dataset.index);
  POLL_OPTIONS[idx].votes += 1;
  pollVotedIndex = idx;
  renderPoll();
});
document.getElementById("forumList").innerHTML = FORUM.map(f => `
  <li class="forum-item">
    <div class="t">${f.t}</div>
    <div class="m">${f.m}</div>
  </li>
`).join("");
document.getElementById("newThreadBtn").addEventListener("click", () => {
  const title = prompt("Thread title:");
  if (!title) return;
  FORUM.unshift({ t: title, m: "0 replies · just now" });
  document.getElementById("forumList").innerHTML = FORUM.map(f => `
    <li class="forum-item"><div class="t">${f.t}</div><div class="m">${f.m}</div></li>
  `).join("");
});
const socialTabs = document.getElementById("socialTabs");
const socialEmbeds = {
  twitter: document.getElementById("embedTwitter"),
  youtube: document.getElementById("embedYoutube"),
  facebook: document.getElementById("embedFacebook"),
  instagram: document.getElementById("embedInstagram"),
};

socialTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".social-tab");
  if (!tab) return;
  const net = tab.dataset.net;
  socialTabs.querySelectorAll(".social-tab").forEach(t => t.classList.remove("is-active"));
  tab.classList.add("is-active");
  Object.entries(socialEmbeds).forEach(([key, el]) => { el.hidden = key !== net; });
  if (net === "twitter" && window.twttr && window.twttr.widgets){
    window.twttr.widgets.load(socialEmbeds.twitter);
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      const counters = entry.target.matches(".stat-grid") ? entry.target.querySelectorAll(".stat-num") : [];
      counters.forEach(c => { if (!c.dataset.done){ c.dataset.done = "1"; countUp(c); } });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal, .stat-grid").forEach(el => observer.observe(el));
