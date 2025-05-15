class ConcreteObserver {
  constructor(name) {
    this.name = name;
    this.notificationCount = 0;
  }

  update(data, subject) {
    this.notificationCount++;
    console.log(`${this.name} menerima notifikasi: ${data}`);

    if (this.notificationCount >= 3) {
      console.log(`${this.name} berhenti berlangganan setelah 3 notifikasi.`);
      subject.detach(this);
    }
  }
}

module.exports = ConcreteObserver;
