/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource: function(resource, amount) {
    // Проверяем, существует ли указанный ресурс
    if (!this.resources.hasOwnProperty(resource)) {
      console.log("Invalid resource");
      return; // Выходим из функции, если ресурс не существует
    }

    // Проверяем, является ли amount допустимым числом и больше ли он нуля
    if (typeof amount !== 'number' || amount <= 0) {
      console.log("Invalid amount");
      return; // Выходим из функции, если amount недопустим
    }

    // Добавляем ресурс
    this.resources[resource] += amount;
    console.log(`${amount} ${resource} added. New amount: ${this.resources[resource]}`);
  }
};
