const { $ } = require("@wdio/globals");
const Page = require("./page");

class Boards_generalPage extends Page {
  open() {
    return super.open("u/yana13460131/boards");
  }

  get logo() {
    return $("div.qsCZSrobO7JoSv");
  }

  get createNewBoard() {
    return $('div[class="board-tile mod-add"]');
  }

  get boardTitle() {
    return $('input[data-testid="create-board-title-input"]');
  }

  get btnSubmitCreate() {
    return $('button[data-testid="create-board-submit-button"]');
  }

  get boardsList() {
    return $("ul.boards-page-board-section-list");
  }

  get searchInput() {
    return $('div[role="search"] input[data-test-id="search-dialog-input"]');
  }

  get searchIcon() {
    return $("div.hQdzCqwE1c7MY1");
  }

   get searchedItem(){
    return $('a span[text="some1"]')
  }
}

module.exports = new Boards_generalPage();