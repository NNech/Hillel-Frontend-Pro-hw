const ADD_NOTE_SELECTOR = ".addNote";
const DELETE_NOTE_BTN_CLASS = ".deleteNoteBtn";
const STICKERS_SELECTOR = ".containerForStickers";
const NEW_STICKER_SELECTOR = ".newSticker";

const $containerForStickers = $(STICKERS_SELECTOR);
const $addNoteSelector = $(ADD_NOTE_SELECTOR);

$addNoteSelector.on("click", onAddNoteSelectorClick);
$containerForStickers.on("click", onContainerForStickersClick);

getBoardOfStickers();

function onAddNoteSelectorClick(e) {
    addSticker(e.target);
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
        .then((newSticker) => renderSticker(newSticker))
        .catch(showError);
}

function renderSticker(sticker) {
    const html = generateStickerHTML(sticker);

    $containerForStickers.append(html);
}

function getBoardOfStickers() {
    BoardWithStickersApi.getStickers()
        .then((stickers) => {
            renderStickers(stickers);
        })
        .catch(showError);
}

function renderStickers(stickers) {
    $containerForStickers.html(stickers.map(generateStickerHTML));
}

function generateStickerHTML(sticker) {
    return `
    <div class="newSticker" data-id="${sticker.id}">
	<textarea class="description" >${sticker.description}
    </textarea>
	<btn class="deleteNoteBtn">x</btn>
	</div>
  `;
}

function showError(error) {
    alert(error.message);
}
