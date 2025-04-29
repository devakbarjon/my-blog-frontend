export function getAnonId() {
    let anonId = localStorage.getItem("anonId");
    if (!anonId) {
        anonId = crypto.randomUUID(); // Built-in browser function
        localStorage.setItem("anonId", anonId);
    }
    return anonId;
}