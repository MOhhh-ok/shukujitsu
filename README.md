# Shukujitsu

日本の祝日をGoogle Calendarから取得します。

## Install

```
npm i @masa-dev/shukujitsu
```

## Usage

```typescript
import { Shukujitsu } from 'shukujitsu';

async function main(){
    
    // インスタンスを作成
    const shukujitsu = new Shukujitsu();

    // 祝日データを取得
    await shukujitsu.retrieve();

    // 取得をチェック
    if (!shukujitsu.isRetrieved()) return;

    // 特定の日付が祝日かどうかを確認
    const isShukujitsu = shukujitsu.isShukujitsu({
        year: 2024,
        month: 1,
        day: 1,
    }); // true (元日)

    // 特定の日の祝日情報を取得
    const shukujitsuOnJanuaryFirst = shukujitsu.find({
        year: 2024,
        month: 1,
        day: 1,
    }); // { date: '2024-01-01', name: '元日' }

    // 特定の月の祝日を取得
    const shukujitsuInJanuary = shukujitsu.filterByMonth(2024, 1);

    // 特定の年の祝日を取得
    const shukujitsuIn2024 = shukujitsu.filterByYear(2024);
}
```

## License

MIT