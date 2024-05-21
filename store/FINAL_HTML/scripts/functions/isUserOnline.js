export function isUserOnline() {
    return sessionStorage.getItem("isOnline") === "true";
}
