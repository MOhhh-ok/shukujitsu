"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shukujitsu = void 0;
const fetchShukujitsu_1 = require("./fetchShukujitsu");
class Shukujitsu {
    _data = [];
    _isRetrieved = false;
    constructor() { }
    async retrieve() {
        try {
            const result = await (0, fetchShukujitsu_1.fetchShukujitsu)();
            this._data = result;
            this._isRetrieved = true;
            return result;
        }
        catch (err) {
            console.error(err);
            return null;
        }
    }
    isRetrieved() {
        return this._isRetrieved;
    }
    getData() {
        return [...this._data];
    }
    find(date) {
        const target = this.formatDate(date);
        return this._data.find((item) => item.date === target);
    }
    isShukujitsu(date) {
        return !!this.find(date);
    }
    filterByMonth(year, month) {
        const targetMonth = this.formatMonth(year, month);
        return this._data.filter((item) => {
            return item.date.startsWith(targetMonth);
        });
    }
    filterByYear(year) {
        return this._data.filter((item) => {
            return item.date.startsWith(`${year}`);
        });
    }
    formatMonth(year, month) {
        return `${year}-${this.pad(month)}`;
    }
    formatDate(date) {
        const { year, month, day } = date;
        return [year, month, day].map(this.pad).join('-');
    }
    pad(num) {
        return num.toString().padStart(2, '0');
    }
}
exports.Shukujitsu = Shukujitsu;
