"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchShukujitsu = fetchShukujitsu;
const CALENDAR_ID = encodeURIComponent('japanese__ja@holiday.calendar.google.com');
const URL = `https://calendar.google.com/calendar/ical/${CALENDAR_ID}/public/full.ics?timeMin=2024-01-01&timeMax=2024-12-31`;
async function fetchShukujitsu() {
    const txt = await fetch(URL).then((res) => res.text());
    return parse(txt);
}
function parse(text) {
    const result = [];
    const lines = text.split('\n').map((l) => l.trim());
    ensureFirstLine(lines.shift());
    const items = linesToItems(lines);
    items.forEach((item) => {
        result.push({
            title: item.SUMMARY ?? '',
            date: formatDate(item.DTSTART ?? ''),
        });
    });
    return result;
}
function ensureFirstLine(line) {
    const obj = lineToObject(line);
    if (obj['BEGIN'] !== 'VCALENDAR') {
        throw new Error(`first line is not VCALENDAR. ${line}`);
    }
}
function linesToItems(lines) {
    const result = [];
    let item;
    while ((item = shiftLinesToItem(lines))) {
        if (!Object.keys(item).length)
            break;
        result.push(item);
    }
    return result;
}
function shiftLinesToItem(lines) {
    const result = {};
    let line;
    let addToResult = false;
    while ((line = lines.shift())) {
        const obj = lineToObject(line);
        if (obj['BEGIN'] == 'VEVENT') {
            addToResult = true;
            continue;
        }
        if (obj['END'] == 'VEVENT') {
            break;
        }
        if (addToResult) {
            Object.assign(result, obj);
        }
    }
    return result;
}
function lineToObject(line) {
    const pair = (line ?? '').split(':');
    const key = pair[0].split(';')[0];
    const value = pair[1];
    return { [key]: value };
}
function formatDate(date) {
    return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
}
