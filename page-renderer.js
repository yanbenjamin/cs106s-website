/**
 * CS198 Section Website Renderer (Ben Yan)
 * ------------------------------------
 * Renders the section website (welcome paragraph, colorful grid schedule
 * with links, footnote), all from the data provided in section-info.js!
 */

let BUTTON_COLORS = {"Slides": "purple", "Handout": "darkslateblue", "Resource": "green",
                    "Check-Off Form": "darkred", "Recording": "orange", "Starter Code": "orange"};
let DEFAULT_BUTTION_COLOR = "green";
let ALL_COLORS = ["purple", "darkslateblue", "green", "darkred", "orange"];
 
let TITLEBUTTON_STYLES = "background-color: lavender; box-shadow: 3px 3px #a78bfa; font-size: 14px";
let SECTION_PANEL_STYLE = "background-color: lavender; box-shadow: 3px 3px #a78bfa";

let TITLEBUTTON_CLASSES = ["chip", "~neutral", "!normal", "bg-neutral-100", "mb-2", "mr-2"];
let SCHEDULE_CLASSES = ["grid", "grid-flow-row-dense", "gap-5", "grid-cols-4", "md:grid-cols-7"];
let ENTRY_CLASSES = ["chip", "~neutral", "!low", "bg-neutral-50"];
let INFO_CLASSES = ["col-span-3", "md:col-span-6"];
let SPAN_CLASSES = ["chip", "~neutral", "!low", "bg-neutral-50"];

let COLOR_TO_BUTTON_CLASS = {"purple": "~urge", "green": "~positive", "darkslateblue": "~info",
                            "orange": "~warning", "gray": "~neutral", "darkred": "~critical"}

function create_button(link, buttonName, buttonColor){
    // buttonType out of slides (purple), handout (blue), resources (green)
	let buttonLink = document.createElement("a");
	buttonLink.setAttribute("href", link);
	for (let classType of ["chip", "m-2", "ml-0"]){
		buttonLink.classList.add(classType);
	}
	buttonLink.classList.add(COLOR_TO_BUTTON_CLASS[buttonColor]);
    
	buttonLink.setAttribute("target", "_blank");
	buttonLink.setAttribute("rel", "noopener noreferrer");
	buttonLink.style.cssText = `box-shadow: 3px 3px ${buttonColor}; text-decoration: none; font-size: 14px`;
	buttonLink.innerHTML = buttonName;
	return buttonLink;
}
/* i.e. use case: create_button("https://www.google.com, "Slides", "purple"); */

function add_button(sectionLinks, sectionInfo, buttonType, faded){
    let link = (buttonType in sectionInfo) ? sectionInfo[buttonType] : "";
    let buttonColor = (buttonType in BUTTON_COLORS) ? BUTTON_COLORS[buttonType] : DEFAULT_BUTTION_COLOR;
    let button = create_button(link, buttonType, buttonColor);
	if (faded) button.removeAttribute("href");
	sectionLinks.appendChild(button);
    return button;
} /* note that sectionLinks is on-screen HTML <p> object to which we add the button */

function create_dualbox(faded){
    let scheduleDualBox = document.createElement("div");
    for (let class_info of SCHEDULE_CLASSES){
		scheduleDualBox.classList.add(class_info);
	}
	if (faded) scheduleDualBox.style.cssText = "opacity: 0.4";
    return scheduleDualBox;
} /* creates two-panel display, one with the section #, and the other with section content */

function create_left_panel(section_number){
    let scheduleEntry = document.createElement("div");
    
	let scheduleSpan = document.createElement("span");
	for (let class_info of SPAN_CLASSES){
		scheduleSpan.classList.add(class_info);
	}
	scheduleSpan.style.cssText = SECTION_PANEL_STYLE;
	scheduleSpan.innerHTML = "Week  " + section_number;

	scheduleEntry.appendChild(scheduleSpan);
    return scheduleEntry;
} /* creates left side of the section schedule, with the section numbers in neat little buttons */

function create_right_panel_with_links(section_info, section_number, faded){
    let scheduleInfo = document.createElement("div");
    for (let class_info of INFO_CLASSES){
		scheduleInfo.classList.add(class_info);
	}
    
    /* add the section title, plus the section's date / time to the right panel */
    let sectionTitle = document.createElement("p");
	sectionTitle.innerHTML = "<strong>" + section_info["Title"] + "</strong>";
    sectionTitle.innerHTML += " — " + stringify_date(section_info["Date"]); // " — " + section_info["date"];
	scheduleInfo.appendChild(sectionTitle);
    
    /* below the section title, add the buttons with links to slides, resources, etc. */
    let sectionLinks = document.createElement("p");
    // TODO could definitely toss in a for loop, and have an array of pre-built buttons
    if ("Slides" in section_info) add_button(sectionLinks, section_info, "Slides", faded);
    if ("Handout" in section_info) add_button(sectionLinks, section_info, "Handout", faded);
    if ("Starter Code" in section_info) add_button(sectionLinks, section_info, "Starter Code", faded);
    if ("Check-Off Form" in section_info) add_button(sectionLinks, section_info, "Check-Off Form", faded);
    if ("Recording" in section_info) add_button(sectionLinks, section_info, "Recording", faded);

    // place the resource links / green buttons on a new line, if it's better for spacing
    /*if (Object.entries(section_info["Resources"]).length >= 1) {
        sectionLinks.appendChild(document.createElement("br"));
    }*/ // make sure to uncomment before the quarter!

    sectionLinks.appendChild(document.createElement("br"));

    for (const [resourceName, resourceLink] of Object.entries(section_info["Resources"])) {
		add_button(sectionLinks, section_info["Resources"], resourceName, faded);
	}
    scheduleInfo.appendChild(sectionLinks);
    
    return scheduleInfo; 
} /* creates right side of the section schedule, with the links to handouts & resources */

function add_week(section_number, section_info, faded){
	let schedule = document.getElementById("my-schedule");
    let scheduleDualBox = create_dualbox(faded);
    
    /* creates a two-panel display with section numbers on left, section materials on right */
    let scheduleLeftPanel = create_left_panel(section_number);
	let scheduleInfo = create_right_panel_with_links(section_info, section_number, faded);
    scheduleDualBox.appendChild(scheduleLeftPanel);
	scheduleDualBox.appendChild(scheduleInfo);
    
    schedule.appendChild(scheduleDualBox);
}

function stringify_date(date){
    let month = date.getMonth();
    if (month === 0) month = 12;
    let day = date.getDate();
    return `${month}/${day}`;
}

function add_schedule(){
	let schedule = document.getElementById("my-schedule");
	let p = document.createElement("p");
	let week_num = 1;
	for (let week_info of ACTIVE_SECTIONS.concat(FUTURE_SECTIONS)){
		add_week(week_num, week_info, week_num > ACTIVE_SECTIONS.length);
		week_num++;
	}
}


function add_images(){
	let website_img = document.getElementById("website-image");
	let webicon_img = document.getElementById("webicon-image");

	website_img.setAttribute("src", WEBSITE_IMAGE);
	webicon_img.setAttribute("href", WEBSITE_ICON);
}

function create_title_button(top_message){
    let button = document.createElement("span");
    button.innerHTML = top_message;

    for (let button_class of TITLEBUTTON_CLASSES){
        button.classList.add(button_class);
    }
    button.style.cssText = TITLEBUTTON_STYLES;
    return button;
}

function add_title(){
	document.getElementById("meta-title").innerHTML = BROWSER_TITLE;
	document.getElementById("course-title").innerHTML = WEBPAGE_TITLE;
	document.getElementById("sl-name").innerHTML = COURSE_NAME; //+ " " + " (" +  SL_SUNET + "@stanford.edu)";

	let title_cards = document.getElementById("title-cards");
	for (let top_button_message of TOP_BUTTONS){
		title_cards.appendChild(create_title_button(top_button_message));
	}

	document.getElementById("opening-paragraph").innerHTML = WELCOME_MESSAGE;
}

function add_contact(){
    let contactParagraph = document.getElementById("contact");
    contactParagraph.innerHTML = CONTACT_INFO;
}

function add_section_info(){
	let sectionMechanicsParagraph = document.getElementById("mechanics-paragraph");
	sectionMechanicsParagraph.innerHTML = SECTION_MECHANICS;
}

function add_archived_pages(){
    if (Object.keys(ARCHIVED_PAGES).length == 0) return; // exit if no archived pages to display
    
	let schedule = document.getElementById("main-body");
    
    /* create the title header for archived pages */
	let archivedPages = document.createElement("h2");
    archivedPages.setAttribute("id","archive");
	archivedPages.innerHTML = "Archived Pages";
	archivedPages.style.cssText = "margin-top: 20px";
    schedule.appendChild(archivedPages);
    
    /* add the text below / welcome mat inviting students to explore other pages yay */
    let archivedMessage = document.createElement("p");
    archivedMessage.innerHTML = ARCHIVED_PAGES_MESSAGE;
    schedule.appendChild(archivedMessage);
    
    /* adds the portals / links below to the storied history of your sections, past & present */
	let archivedLinks = document.createElement("p");
    let color_idx = 0;
    for (const [pageName, pageLink] of Object.entries(ARCHIVED_PAGES)) {
        let button = create_button(pageLink, pageName, ALL_COLORS[color_idx % ALL_COLORS.length]);
        archivedLinks.appendChild(button);
        color_idx++;
	}
	schedule.appendChild(archivedLinks);
}

function add_footer(){
	document.getElementById("footer").innerHTML = WEBSITE_FOOTNOTE;
}

function animate_profile_pictures() {  // for mischief
    let ben = document.getElementById("ben");
    let benTimer = setInterval( function() {
        let src = ben.getAttribute("src");
        let newSrc = (src === "res/up-russell.png") ? "res/ben-grad.jpeg" : "res/up-russell.png";
        ben.setAttribute("src", newSrc);

    }, 5000);

    let jerry = document.getElementById("jerry");

    let jerryTimer = setInterval( function() {
        let src = jerry.getAttribute("src");
        let newSrc = (src === "res/up-carl.png") ? "res/jerry-facebook.jpg" : "res/up-carl.png";
        jerry.setAttribute("src", newSrc);    
    }, 5000);
     
}

document.addEventListener("DOMContentLoaded", function() {
	add_title();
	add_images();
    add_contact();
	add_schedule();
	//add_section_info();
    //add_archived_pages();
	add_footer();

    // animation for the flickering profile images
    animate_profile_pictures();
});
