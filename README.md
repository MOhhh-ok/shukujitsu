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
//     { title: '春分の日', start: '2019-03-21', end: '2019-03-22' },
//     { title: '昭和の日', start: '2019-04-29', end: '2019-04-30' },
//     { title: '即位礼正殿の儀の行われる日', start: '2019-10-22', end: '2019-10-23' },
//     { title: '元日', start: '2020-01-01', end: '2020-01-02' },
//     { title: '天皇誕生日', start: '2020-02-23', end: '2020-02-24' },
//     { title: '春分の日', start: '2020-03-20', end: '2020-03-21' },
//     { title: '昭和の日', start: '2020-04-29', end: '2020-04-30' },
//     { title: '憲法記念日 振替休日', start: '2020-05-06', end: '2020-05-07' },
//     { title: '海の日', start: '2020-07-23', end: '2020-07-24' },
//     { title: 'スポーツの日', start: '2020-07-24', end: '2020-07-25' },
//     { title: '敬老の日', start: '2020-09-21', end: '2020-09-22' },
//     ...
```