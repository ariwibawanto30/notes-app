class NoteItem extends HTMLElement {
  _shadoRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: null,
  };
  constructor() {
    super();
    this._shadoRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  set note(value) {
    this._note = value;
    this.render();
  }

  get note() {
    return this._note;
  }

  updateStyle() {
    this._style.textContent = `
        .card {
            display: block;
            border-radius: 10px;
            box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
            padding: 20px;
            background: #f9f9f9;
            position: relative;
        }

        h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            font-weight: lighter;
            text-align: justify;
            margin: 20px 0 30px;
        }

        span {
            font-size: 14px;
            color: #777;
            position: absolute;
            bottom: 15px;
            right: 30px;
        }
    `;
  }

  emptyContent() {
    this._shadoRoot.innerHTML = "";
  }

  render() {
    this.updateStyle();
    this.emptyContent();
    this._shadoRoot.appendChild(this._style);
    this._shadoRoot.innerHTML += `
        <div class="card">
          <h3>${this._note.title}</h3>
          <hr />
          <p>${this._note.body}</p>
          <span>${this._note.createdAt}</span>
        </div>
    `;
  }
}

customElements.define("note-item", NoteItem);
