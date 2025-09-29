export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidValue(value) {
  return value !== "" && value.length > 3;
}

export function validate(name, value){
  if (name == 'email'){
    if (value == '') return true;
    return isValidEmail(value) && !containsHTML(value);
  }
  return value !== "" && !containsHTML(value);
}

export const containsHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);