const openPopUp = document.querySelector(".js-open-popup");
const popup = document.querySelector(".popup");
const closePopUp = document.querySelector(".js-close-note");
const wall = document.querySelector(".sticky-wall");
const saveBtn = document.querySelector(".js-save-note");
const addBtn = document.querySelector(".add-note");

const headingInput = document.querySelector(".note-heading");
const descriptionInput = document.querySelector(".note-description");

const colors = ["#fef9c3", "#e0f2fe", "#dcfce7", "#fce7f3", "#ede9fe"];



openPopUp.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

closePopUp.addEventListener("click", () => {
    popup.classList.add("hidden");
});


function getNotes() {
    return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}
function refreshUI() {
    document.querySelectorAll(".note-card").forEach(el => el.remove());
    loadNotes();
}
function deleteNote(index) {
    const notes = getNotes();

    notes.splice(index, 1);

    saveNotes(notes);

    refreshUI();
}



function renderNote(note,index) {
    const temp = document.querySelector(".note-template");
    const clone = temp.content.cloneNode(true);
    const noteCard = clone.querySelector(".note-card");
    const menuBtn = clone.querySelector(".note-menu-btn");
    const menu = clone.querySelector(".note-menu");
    const deleteBtn = clone.querySelector(".delete-note-btn");

    clone.querySelector(".note-title").innerText = note.title;
    clone.querySelector(".note-desc").innerText = note.description;
    noteCard.style.backgroundColor = note.color;

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("hidden");
    });
    deleteBtn.addEventListener("click", () => {
        deleteNote(index);
    });

    wall.insertBefore(clone, addBtn);
}



saveBtn.addEventListener("click", () => {
    const title = headingInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!title && !description) {
        alert("Enter all the fields!");
        return;
    }

    const newNote = {
        title,
        description,
        color: colors[Math.floor(Math.random() * colors.length)]
    };

    const notes = getNotes();
    notes.unshift(newNote);
    saveNotes(notes);

    renderNote(newNote);

    headingInput.value = "";
    descriptionInput.value = "";

    popup.classList.add("hidden");
});


function loadNotes() {
    const notes = getNotes();
    notes.forEach((note, index) => {
        renderNote(note, index);
    });
}


document.addEventListener("click", () => {
    document.querySelectorAll(".note-menu").forEach(menu => {
        menu.classList.add("hidden");
    });
});

document.querySelector(".js-open-sticky-wall")
.addEventListener("click", () => {
    showPage("sticky-wall");
});
loadNotes();