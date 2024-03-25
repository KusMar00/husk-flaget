"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeAndGetNextFlagDay = void 0;
var axios_1 = require("axios");
var cheerio = require("cheerio");
// Constant definitions used in utility functions
var URL = 'https://www.justitsministeriet.dk/temaer/flagning/flagdage/';
var currentDate = new Date();
// Utility functions
var convertMonthToNumber = function (month) {
    month = month.toLowerCase();
    switch (month) {
        case 'januar':
            return 0;
        case 'februar':
            return 1;
        case 'marts':
            return 2;
        case 'april':
            return 3;
        case 'maj':
            return 4;
        case 'juni':
            return 5;
        case 'juli':
            return 6;
        case 'august':
            return 7;
        case 'september':
            return 8;
        case 'oktober':
            return 9;
        case 'november':
            return 10;
        case 'december':
            return 11;
        default:
            return 0;
    }
};
var scrapeFlagFlyingDays = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, $, flagDayArray;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get(URL)];
            case 1:
                response = _a.sent();
                $ = cheerio.load(response.data);
                flagDayArray = new Array();
                // Here I assume that there are no other <tr> elements on the page
                $('tr').each(function (index, element) {
                    var currentFlagDay = { date: new Date(), title: '', details: '' };
                    $(element)
                        .children('td')
                        .each(function (childIndex, childElement) {
                        if (childIndex === 0) {
                            // In this case we have the date text information
                            var _a = $(childElement).text().split('.'), date = _a[0], month = _a[1];
                            currentFlagDay.date = new Date(currentDate.getFullYear(), convertMonthToNumber(month.trim()), Number(date) + 1);
                        }
                        else {
                            // Here we have the text description
                            var _b = $(childElement).text().split('.'), title = _b[0], desc = _b[1];
                            currentFlagDay.title = title;
                            currentFlagDay.details = desc.trim();
                        }
                    });
                    flagDayArray.push(currentFlagDay);
                });
                return [2 /*return*/, flagDayArray];
        }
    });
}); };
var scrapeFlagFlyingDaysAndSaveToFile = function () { return __awaiter(void 0, void 0, void 0, function () {
    var fs, data, jsContent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fs = require('fs');
                return [4 /*yield*/, scrapeFlagFlyingDays()];
            case 1:
                data = _a.sent();
                jsContent = "export const flagDayArray = ".concat(JSON.stringify(data), ";");
                // Write JavaScript code to file
                fs.writeFile('flagDays.js', jsContent, 'utf8', function (err) {
                    if (err) {
                        console.error('Error writing file:', err);
                        return;
                    }
                    console.log('File has been saved successfully.');
                });
                return [2 /*return*/];
        }
    });
}); };
function dateDiffInDays(a, b) {
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
var getNextFlagDay = function (flagDayArray, currentDate) { return __awaiter(void 0, void 0, void 0, function () {
    var i, days;
    return __generator(this, function (_a) {
        for (i = 0; i < flagDayArray.length; i++) {
            days = dateDiffInDays(currentDate, flagDayArray[i].date);
            if (days >= 0) {
                return [2 /*return*/, [flagDayArray[i], days]];
            }
        }
        throw Error("Couldn't find closest date");
    });
}); };
var testUtils = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, _a, flagDay, days;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, scrapeFlagFlyingDays()];
            case 1:
                data = _b.sent();
                return [4 /*yield*/, getNextFlagDay(data, new Date())];
            case 2:
                _a = _b.sent(), flagDay = _a[0], days = _a[1];
                console.log("The next flag day is ".concat(flagDay.title, "!"));
                flagDay.details.length > 1 && console.log(flagDay.details);
                console.log("In ".concat(days, " days"));
                return [2 /*return*/];
        }
    });
}); };
var scrapeAndGetNextFlagDay = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, _a, flagDay, days;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, scrapeFlagFlyingDays()];
            case 1:
                data = _b.sent();
                return [4 /*yield*/, getNextFlagDay(data, new Date())];
            case 2:
                _a = _b.sent(), flagDay = _a[0], days = _a[1];
                return [2 /*return*/, [flagDay, days]];
        }
    });
}); };
exports.scrapeAndGetNextFlagDay = scrapeAndGetNextFlagDay;
testUtils();
