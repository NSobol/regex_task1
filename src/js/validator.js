export default class Validator {
  validateUsername(name) {
    this.name = name;
    if (/^[a-zA-Z]\w[^\d]\d{0,3}[^\d]+\w+[a-zA-Z]$/.test(name)) {
      return 'Никнейм корректен';
    }
    return ('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
  }
}