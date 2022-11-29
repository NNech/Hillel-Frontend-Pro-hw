const ADD_NOTE_SELECTOR = "#addNote";
const DELETE_NOTE_BTN_CLASS = ".deleteNoteBtn";
const STICKERS_SELECTOR = ".containerForStickers";
const NEW_STICKER_SELECTOR = ".newSticker";
const STICKER_DESCRIPTION_CLASS = ".description";

dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
        Save: () => {
            getSticker();
            clear();
        },
        Cancel: function () {
            dialog.dialog("close");
        },
    },
    close: function () {},
});

const $containerForStickers = $(STICKERS_SELECTOR);
const $addNoteSelector = $(ADD_NOTE_SELECTOR);

$(ADD_NOTE_SELECTOR).on("click", onBtnAddNoteClick);
$(STICKERS_SELECTOR)
    .on("click", DELETE_NOTE_BTN_CLASS, onBtnDeleteNoteClick)
    .on("focusout", STICKER_DESCRIPTION_CLASS, onDescriptionClick);

getBoardOfStickers();

function onBtnAddNoteClick(e) {
    dialog.dialog("open");
}

function onBtnDeleteNoteClick(e) {
    const sticker = e.target.closest(NEW_STICKER_SELECTOR);
    let id = sticker.dataset.id;

    if (id) {
        deleteSticker(id);
        sticker.remove();
    }
}

function onDescriptionClick(e) {
    const sticker = e.target.closest(NEW_STICKER_SELECTOR);
    let id = sticker.dataset.id;
    const changes = {
        description: e.target.value,
    };

    if (id) {
        updateSticker(id, changes);
    }
}

function updateSticker(id, changes) {
    StickerServerModalApi.update(id, changes)
        .then((stickers) => getBoardOfStickers(stickers))
        .catch(showError);
}

function deleteSticker(stickerId) {
    StickerServerModalApi.delete(stickerId).catch(showError);
}

function getDescriptionValue() {
    return {
        description: description.value,
    };
}

function getSticker() {
    const sticker = getDescriptionValue();

    addSticker(sticker);
}

function addSticker(newSticker) {
    StickerServerModalApi.create(newSticker)
        .then((newSticker) => renderSticker(newSticker))
        .catch(showError);
}

function renderSticker(sticker) {
    const $html = generateStickerHTML(sticker);

    $containerForStickers.append($html);
}

function getBoardOfStickers() {
    StickerServerModalApi.getStickers()
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

function clear() {
    description.value = "";
    dialog.dialog("close");
}

function showError(error) {
    alert(error.message);
}
