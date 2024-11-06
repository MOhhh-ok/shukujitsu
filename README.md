# Shukujitsu

日本の祝日をGoogle Calendarから取得します。

## Install

```
npm i @masa-dev/shukujitsu
```

## Usage

```typescript
import fetchShukujitsu from '@masa-dev/shukujitsu';

const result = await fetchShukujitsu();
console.log(result);

// [
//     { title: '春分の日', date: '2019-03-21' },
//     { title: '昭和の日', date: '2019-04-29' },
//     { title: '即位礼正殿の儀の行われる日', date: '2019-10-22' },
//     { title: '元日', date: '2020-01-01' },
//     { title: '天皇誕生日', date: '2020-02-23' },
//     { title: '春分の日', date: '2020-03-20' },
//     { title: '昭和の日', date: '2020-04-29' },
//     { title: '憲法記念日 振替休日', date: '2020-05-06' },
//     { title: '海の日', date: '2020-07-23' },
//     { title: 'スポーツの日', date: '2020-07-24' },
//     { title: '敬老の日', date: '2020-09-21' },
//     ...
```