/**
 * CS198 Section Website Metadata (Ben Yan)
 * ------------------------------------
 * Information to put here so that anyone can readily create and publish their 
 * own section website with their template. Feel free to change anything around! :)
 */ 

/* information on the SL and what course they're teaching for! */
let WEBPAGE_TITLE = "CS 106S"; //<span style = 'color: gray; font-weight: normal; font-size: 20px'>piderman</span>"; // what shows up on webpage
let BROWSER_TITLE = "CS106S: Coding for Social Good"; // what shows up on browser tab
let COURSE_NAME = "Coding for Social Good"

/* logistical information on the section: when and where? */
let QUARTER = '🍁 Autumn 2026'
let LOCATION = "🏪 Lathrop 190"
let TIME = "🗓️ Thursdays, 4:30 - 6:20 PM"
let TOP_BUTTONS = [QUARTER, LOCATION, TIME, "📍 Stanford University"]; //, "🌲 Stanford CS"] // what to display beneath the title 

/* for the aesthetic images to greet the student: one on webpage, the other as the tab icon.
   current choices are "snorlax.jpg", "pikachu-and-ash.png", "your-name.png", feel free to add more! */
let WEBSITE_IMAGE = "res/stanford-vintage-logo.png" //stanford-vintage-logo.png" //"res/cs106s-classroom.png"
let WEBSITE_ICON = "res/stanford-favicon.png" //WEBSITE_IMAGE // by default, same as the website image

/* materials for each week, e.g., "Slides", "Handout", "Resources" */
/* note that "Resources" is a nested dictionary with resource names and links */
/* prob less relevant to CS106A/B, but also supports "Check-Off Form" and "Recording" !*/

let SECTION_1 = {"Title": "Intro to CS for Social Good, JavaScript, and Cryptography",
			  "Date": new Date(2026, 9, 24), /* year, month, date for the Javascript Date class! */ 
			  "Slides": "https://tinyurl.com/cs106s-aut26-w1-slides",
			  "Handout": "res/cs106s-week01-handout.pdf",
              "Starter Code": "https://github.com/yanbenjamin/cs106s-w1",
              "Check-Off Form": "https://tinyurl.com/cs106s-aut26-w1-checkoff",
              "Resources": {
			  		"Course Syllabus": "res/cs106s-course-information.pdf",
                    "Course Calendar": "res/cs106s-course-calendar.pdf",
                    "🎶 Spotify Playlist": "https://open.spotify.com/playlist/3AEPxU8nsskjwE2500AQbf?si=274f19f9fa384ce7",
                    "JavaScript Guide": "./handouts/js-tutorial.html",
                     "Solution (Crytography)": "https://github.com/yanbenjamin/cs106s-w1/blob/answers/assignment.js",
                     "Solution (Extensions)": "https://github.com/yanbenjamin/cs106s-w1/blob/answers/assignment-extension.js",
			  }}

let SECTION_2 = {"Title": "Sentiment Analysis and Refugee Tweets",
			  "Date": new Date(2026, 10, 1),
			  "Slides": "",
			  //"Handout": "",
              "Starter Code": "https://github.com/yanbenjamin/cs106s-sentiment",
              "Check-Off Form": "https://tinyurl.com/cs106s-aut26-w2-checkoff",
              "Resources": {
                 "JavaScript Objects": "",
			  }}

let SECTION_3 = {"Title": "CS for Climate Change",
			  "Date": new Date(2026, 10, 8),
			  "Slides": "",
			  "Handout": "",
              "Starter Code": "",
              "Check-Off Form": "",
              "Resources": {
			  }}

let SECTION_4 = {"Title": "Disease Detection, K-Nearest Neighbors, K-Means Clustering",
			  "Date": new Date(2026, 10, 15),
			  "Slides": "",
			  "Handout": "",
              "Starter Code": "",
              "Check-Off Form": "",
              "Resources": {
			  }}

let SECTION_5 = {"Title": "Cybersecurity and Ethical Web Hacking",
			  "Date": new Date(2026, 10, 22),
			  "Slides": "",
			  "Handout": "",
              "Starter Code": "",
              "Check-Off Form": "",
              "Resources": {
			  }}

let SECTION_6 = {"Title": "Rethinking the Electoral College, Alternate Voting Methods",
			  "Date": new Date(2026, 10, 29),
			  "Slides": "",
			  "Handout": "https://web.stanford.edu/class/cs106ax/res/handouts/18-Section-6.pdf",
              "Starter Code": "",
              "Check-Off Form": "",
			  "Resources": {
			  		
			  }};

let SECTION_7 = {"Title": "Internet Trust and Safety",
			  "Date": new Date(2026, 11, 5),
			  "Slides": "",
			  "Handout": "",
              "Starter Code": "",
              "Check-Off Form": "",
              "Resources": {
			  }}

let SECTION_8 = {"Title": "Mental Health and Psychotherapy",
			  "Date": new Date(2026, 11, 12),
			  "Slides": "",
			  "Handout": "",
              "Starter Code": "",
              "Check-Off Form": "",
              "Resources": {
			  }}

let SECTION_9 = {"Title": "What's Next?, CS106S++, End-Quarter Boba Party 🧋",
			  "Date": new Date(2026, 11, 19),
			  "Slides": "",
			  "Handout": "",
              "Starter Code": "",
              "Check-Off Form": "",
              "Resources": {
			  }}

let SECTION_10 = {"Title": "No class, best of luck on finals!",
			  "Date": new Date(2026, 12, 3),
              "Resources": {}
};

/* change this to show which sections are fully visible, and which ones are faded / semi-translucent */
let ACTIVE_SECTIONS = [SECTION_1, SECTION_2];
let FUTURE_SECTIONS = [SECTION_3, SECTION_4, SECTION_5, 
                     SECTION_6, SECTION_7, SECTION_8, SECTION_9, SECTION_10];

/* the first paragraph or welcome mat students see when they visit the page! 
   you can embed HTML within this, e.g., links, bolding, your choice!*/
let WELCOME_MESSAGE = [
`
<p>CS106S is a 1-unit course on creative and diverse applications of computer science concepts from CS106B to problems in the social good space (such as healthcare, climate change, trust and safety, cybersecurity, etc). Topics freely rotate from quarter to quarter, and I'm enthusiastic for anything you'd like to suggest. The course introduces the  JavaScript language, and the basics of web development, with no expectation of prior experience in either these areas. Grading is S/NC, based only on attendance, and no work is required outside of class :). The course ends, by tradition, with a boba party on the last day. Recommended prerequisite/corequisite: CS106B/X.</p>

<p style = "margin-top: 10px">For more details, please check out the <a href="res/cs106s-course-information.pdf" target="_blank" rel="noopener noreferrer">syllabus</a>, or the <a href = "https://web.stanford.edu/class/cs106s/spr2025" target="_blank" rel="noopener noreferrer">website</a> from a past quarter!</p>
`];

let CONTACT_INFO = [
`
<p>For any course questions, please email me at <a style = "text-decoration: none" href= "mailto: bbyan@stanford.edu"><strong>bbyan@stanford.edu</strong></a>, or reach out to me after class! You can expect an email response within 12 hours generally, though I occassionally need to escape my Outlook / adulting, and will respond by the next day.</p>
`
];

/* the paragraph students see after the schedule, with section logistics / LaIR times */
let SECTION_MECHANICS = [
`
<p>This is my 6th time teaching the course, and I'm super grateful to be back after a one-year hiatus! It will be offered in one last trilogy of this Autumn, Winter, or Spring 26-27, which'll conclude my Stanford journey 🥹🎓. Teaching CS106S has been the joy of a lifetime, and I hope you'll find it rewarding!
</p>
`];
 
/* a footnote to put down your name, as well as any fun messages for students or others :D */
let WEBSITE_FOOTNOTE = 
`
© Stanford 2026. Created by Ben Yan, and generously supported by Prof. Jerry Cain.
`

/* optional: archived webpages, if you have some you want to link from prior quarters!
if JavaScript object / dictionary below is empty, this section won't display '*/
let ARCHIVED_PAGES_MESSAGE = "In case you're looking for a different section webpage! :)";
let ARCHIVED_PAGES = {
    "CS106A (Winter 26)": "https://stanford.edu/~bbyan/cs106a-win2026",
    "CS106B (Spring 26)": "https://stanford.edu/~bbyan/cs106b",
    "CS107 (Spring 26)": "https://stanford.edu/~bbyan/cs107",
    "CS107 (Winter 26)": "https://stanford.edu/~bbyan/cs107-win2026",
    "CS107 (Spring 25)": "https://stanford.edu/~bbyan/cs107-spr2025",
    "CS107 (Winter 25)": "https://stanford.edu/~bbyan/cs107-win2025",
    "CS106S (Spring 25)": "https://cs106s.stanford.edu",
};
