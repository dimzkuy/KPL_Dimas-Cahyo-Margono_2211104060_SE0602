const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');

// Inisialisasi subject dan observers
const subject = new Subject();
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');

// Tambah observers
subject.attach(observer1);
subject.attach(observer2);

// Kirim 5 notifikasi berturut-turut
for (let i = 1; i <= 5; i++) {
  subject.notify(`Update versi ${i}.0`);
}