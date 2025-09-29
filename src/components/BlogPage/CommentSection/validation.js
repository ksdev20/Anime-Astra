export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidValue(value) {
  return value !== "" && value.length > 3;
}

export const containsHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);