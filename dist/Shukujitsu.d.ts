import { DateType, ShukujitsuType } from './types';
export declare class Shukujitsu {
    private _data;
    private _isRetrieved;
    constructor();
    retrieve(): Promise<ShukujitsuType[] | null>;
    isRetrieved(): boolean;
    getData(): ShukujitsuType[];
    find(date: DateType): ShukujitsuType | undefined;
    isShukujitsu(date: DateType): boolean;
    filterByMonth(year: number, month: number): ShukujitsuType[];
    filterByYear(year: number): ShukujitsuType[];
    private formatMonth;
    private formatDate;
    private pad;
}
