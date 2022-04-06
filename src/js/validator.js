export default class Validator {
  validateUsername(name) {
    this.name = name;
    const reg1 = /^[a-zA-Z]+[a-z0-9-_]+[a-zA-Z]$/;
    const reg2 = /^\w[\^\d{0,3}]\w+$/;
    if (reg1.test(name) && !reg2.test(name)) {
      return 'Никнейм корректен';
    }
    return ('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
  }
}