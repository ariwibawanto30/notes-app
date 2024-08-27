import Notes from "../utils/Notes.js";

const home = () => {
  const noteListComponent = document.querySelector("note-list");
  const searchElement = document.querySelector("app-bar");

  const showNotes = (query) => {
    const result = Notes.getAll();
    if (!query) {
      displayResult(result);
    } else {
      const searchInput = Notes.searchNotes(query);
      displayResult(searchInput);
    }
  };

  const onSeacrhHandler = (event) => {
    event.preventDefault();
    const query = event.detail;
    showNotes(query);
  };

  const displayResult = (notesData) => {
    const noteItemElements = notesData.map((note) => {
      const noteItemElement = document.createElement("note-item");
      noteItemElement.note = note;
      return noteItemElement;
    });
    noteListComponent.append(...noteItemElements);
  };

  searchElement.addEventListener("submit", onSeacrhHandler);

  showNotes();
};

export default home;
