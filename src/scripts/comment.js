import { v4 as uuidv4 } from "uuid";

class Comment {
  constructor() {
    this.commentsContainer = document.getElementById("comments");
    this.totalCommentsElem = document.getElementById("total-comments");
    this.commentTextArea = document.getElementById("comment-textarea-input");
    this.commentFormElem = document.getElementById("comment-form");
    this.comments = [];
    this.initEventListener();
    this.updateUI();
  }

  updateUI() {
    if (this.comments.length === 0) {
      this.totalCommentsElem.textContent = "";
    } else {
      this.totalCommentsElem.textContent = `(${this.comments.length})`;
    }
  }

  initEventListener() {
    this.commentTextArea.onfocus = function () {
      this.style.background = "none";
    };

    this.commentTextArea.onblur = function () {
      if (this.value === "") {
        this.style.background =
          "url(https://css-tricks.com/examples/TextareaTricks/images/benice.png) center center no-repeat";
      }
    };

    this.commentFormElem.addEventListener(
      "submit",
      this.addCommentHandler.bind(this)
    );
  }

  addCommentHandler(event) {
    event.preventDefault();

    const commentValue = event.target.elements[0].value;
    const nameValue = event.target.elements[1].value;

    if (commentValue.trim() === "" || nameValue.trim() === "") {
      alert("Comment or Name field cannot be empty");
      return;
    }

    const newComment = {
      comment: commentValue,
      name: nameValue,
      id: uuidv4(),
    };

    this.comments.push(newComment);

    this.renderNewCommentElement(newComment);

    event.target.elements[0].value = "";
    event.target.elements[1].value = "";
  }

  getDateHandler() {
    function format(m) {
      let f = new Intl.DateTimeFormat("en", m);
      return f.format(new Date());
    }
    let a = [{ day: "numeric" }, { month: "short" }, { year: "numeric" }];
    return a.map(format).join("-");
  }

  renderNewCommentElement({ comment, name, id }) {
    const commentItem = document.createElement("div");

    commentItem.className = "comment-item";

    commentItem.innerHTML = `
        <div class="comment-item__meta">
          <h3>${name}</h3>
          <p>#${this.getDateHandler()}</p>
        </div>
        <div class="comment-item__text">
          <p>${comment}</p>
          <div class="delete-containter">
            <button id="${id}" class="delete" > Delete </button>
          </div>
        </div>
    `;

    this.commentsContainer.append(commentItem);

    document
      .getElementById(id)
      .addEventListener("click", this.deleteCommentHandler.bind(this, id));

    this.updateUI();
  }

  deleteCommentHandler = (commentId) => {
    let commentIndex = 0;
    for (const comment of this.comments) {
      if (comment.id === commentId) {
        break;
      }
      commentIndex++;
    }
    this.comments.splice(commentIndex, 1);
    this.commentsContainer.children[commentIndex].remove();

    this.updateUI();
  };
}

export default Comment;
