function format(command) {
    document.execCommand(command, false, null);
}
function setColor(color) {
    document.execCommand("foreColor", false, color);
}
function align(direction) {
    document.execCommand("justify" + direction);
}
function undo() {
    document.execCommand("undo");
}
function redo() {
    document.execCommand("redo");
}
