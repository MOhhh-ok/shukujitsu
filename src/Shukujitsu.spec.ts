import { describe, expect, test } from '@jest/globals';
import { Shukujitsu } from './Shukujitsu';

describe('Shukujitsu', () => {
    test('should handle holiday data correctly', async () => {
        // インスタンスを作成
        const shukujitsu = new Shukujitsu();

        // 祝日データを取得
        await shukujitsu.retrieve();

        // 取得をチェック
        expect(shukujitsu.isRetrieved()).toBe(true);

        // 特定の日付が祝日かどうかを確認
        expect(
            shukujitsu.isShukujitsu({
                year: 2024,
                month: 1,
                day: 1,
            })
        ).toBe(true);

        // 特定の日の祝日情報を取得
        expect(
            shukujitsu.find({
                year: 2024,
                month: 1,
                day: 1,
            })
        ).toEqual({ date: '2024-01-01', title: '元日' });

        // 特定の月の祝日を取得
        const shukujitsuInJanuary = shukujitsu.filterByMonth(2024, 1);
        expect(shukujitsuInJanuary.length).toBeGreaterThan(0);

        // 特定の年の祝日を取得
        const shukujitsuIn2024 = shukujitsu.filterByYear(2024);
        expect(shukujitsuIn2024.length).toBeGreaterThan(0);
    });
});
