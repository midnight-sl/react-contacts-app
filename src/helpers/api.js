export function fetchUsers() {
  return fetch('https://randomuser.me/api?results=10&inc=name,phone,email').then(response => response.json());
}