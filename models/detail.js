const details = [];

module.exports = class detail {
    constructor(t) {
        this.title = t;
    }

    save() {
        details.push(this);
    }

    static fetchAll() {
        return details;
    }
}
