const Observer = require('./observer');
 
class ConcreteObserver extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }
 
    update(data, subject) {
        this.notificationCount++;
        console.log(`${this.name} menerima notifikasi: ${data}`);

        if (this.notificationCount >= 3) {
            console.log(`${this.name} berhenti berlangganan setelah 3 notifikasi.`);
            subject.detach(this); // ← sekarang subject tidak undefined
        }
    }
}
module.exports = ConcreteObserver;