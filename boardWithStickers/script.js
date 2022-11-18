const ADD_NOTE_SELECTOR = ".addNote";
const DELETE_NOTE_BTN_CLASS = ".deleteNoteBtn";
const STICKERS_SELECTOR = ".containerForStickers";
const NEW_STICKER_SELECTOR = ".newSticker";

const containerForStickers = document.querySelector(STICKERS_SELECTOR);
const addNoteSelector = document.querySelector(ADD_NOTE_SELECTOR);

addNoteSelector.addEventListener("click", onAddNoteSelectorClick);
containerForStickers.addEventListener("click", onContainerForStickersClick);

getBoardOfStickers();

function onAddNoteSelectorClick(e) {
    addSticker();
}

function onContainerForStickersClick(e) {
    const sticker = e.target.closest(NEW_STICKER_SELECTOR);
    let id = sticker.dataset.id;

    if (id) {
        deleteSticker(id);
        sticker.remove();
    }
}

function deleteSticker(stickerId) {
    BoardWithStickersApi.delete(stickerId).catch(showError);
}

function addSticker() {
    BoardWithStickersApi.create()
        .then((newStiker) => renderSticker(newStiker))
        .catch(showError);
}

function updateSticker(sticker) {
    if (sticker.id) {
        BoardWithStickersApi.update(sticker.id, sticker).catch(showError);
    }
}

function renderSticker(sticker) {
    const html = generateStickerHTML(sticker);

    containerForStickers.insertAdjacentHTML("beforeend", html);
}

function getBoardOfStickers() {
    BoardWithStickersApi.getStickers()
        .then((stickers) => {
            renderStickers(stickers);
        })
        .catch(showError);
}

function renderStickers(stickers) {
    const html = stickers.map(generateStickerHTML).join("");

    containerForStickers.innerHTML = html;
}

function generateStickerHTML(sticker) {
    return `
    <div class="newSticker" data-id="${sticker.id}">
	<textarea class="" >${sticker.description}
    </textarea>
	<btn class="deleteNoteBtn">x</btn>
	</div>
  `;
}

function showError(error) {
    alert(error.message);
}
