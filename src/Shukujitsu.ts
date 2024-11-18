import { fetchShukujitsu } from './fetchShukujitsu';
import { DateType, ShukujitsuType } from './types';

export class Shukujitsu {
    private _data: ShukujitsuType[] = [];
    private _isRetrieved = false;
    constructor() {}

    async retrieve(): Promise<ShukujitsuType[] | null> {
        try {
            const result = await fetchShukujitsu();
            this._data = result;
            this._isRetrieved = true;
            return result;
        } catch (err: unknown) {
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

    find(date: DateType) {
        const target = this.formatDate(date);
        return this._data.find((item) => item.date === target);
    }

    isShukujitsu(date: DateType): boolean {
        return !!this.find(date);
    }

    filterByMonth(year: number, month: number): ShukujitsuType[] {
        const targetMonth = this.formatMonth(year, month);
        return this._data.filter((item) => {
            return item.date.startsWith(targetMonth);
        });
    }

    filterByYear(year: number): ShukujitsuType[] {
        return this._data.filter((item) => {
            return item.date.startsWith(`${year}`);
        });
    }

    private formatMonth(year: number, month: number) {
        return `${year}-${this.pad(month)}`;
    }

    private formatDate(date: DateType) {
        const { year, month, day } = date;
        return [year, month, day].map(this.pad).join('-');
    }

    private pad(num: number) {
        return num.toString().padStart(2, '0');
    }
}
