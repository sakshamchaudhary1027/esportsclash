export function login() {
  if (typeof window !== "undefined") {
    localStorage.setItem("loggedIn", "true");
  }
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("loggedIn");
  }
}

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("loggedIn") === "true";
}
