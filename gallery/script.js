const CONTAINER_FOR_PHOTOS = ".photos";
const CONTAINER_FOR_ALBUM_LINKS = "#containerForAlbumLinks";
const CURRENT_ALBUM_LINK = "#containerForAlbumLinks>div>a";

const containerForPhotos = document.querySelector(CONTAINER_FOR_PHOTOS);
const containerForAlbums = document.querySelector(CONTAINER_FOR_ALBUM_LINKS);

containerForAlbums.addEventListener("click", onAlbumLinkClick);

getListOfAlbumLinks();
getDefaultOfAlbumPhotos();

function onAlbumLinkClick(e) {
    clearContent();
    getPhotosOfAlbum(e);
}

function getPhotosOfAlbum(e) {
    const albumLink = e.target.closest(CURRENT_ALBUM_LINK);
    let id = albumLink.dataset.id;

    GalleryApi.getPhotos(id)
        .then((albums) => {
            albums.forEach((albumPic) => addPhotoToHTML(albumPic));
        })
        .catch(showError);
}

function getListOfAlbumLinks() {
    GalleryApi.getList()
        .then((albums) => {
            albums.forEach((albumLink) => addAlbumLinksToHTML(albumLink));
        })
        .catch(showError);
}

function getDefaultOfAlbumPhotos() {
    GalleryApi.getPhotos(1)
        .then((albums) => {
            albums.forEach((albumPic) => addPhotoToHTML(albumPic));
        })
        .catch(showError);
}

function addPhotoToHTML(albumPic) {
    const html = generatePhotoHTML(albumPic);

    containerForPhotos.insertAdjacentHTML("beforeend", html);
}

function generatePhotoHTML(albumPic) {
    return `<img src=${albumPic.thumbnailUrl}/>`;
}

function addAlbumLinksToHTML(albumLink) {
    const html = generateAlbumLinksHTML(albumLink);

    containerForAlbums.insertAdjacentHTML("beforeend", html);
}

function generateAlbumLinksHTML(album) {
    return `<div><a href="#" id="link" data-id="${album.id}">${album.title}</a></div>`;
}

function clearContent() {
    containerForPhotos.textContent = "";
}

function showError(error) {
    alert(error.message);
}
