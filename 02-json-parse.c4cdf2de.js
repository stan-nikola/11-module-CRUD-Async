const validJSON='{ "name": "Манго", "age": 3 }',invalidJSON="{ бекенд вернул вот такое чудо }";try{console.log(1),console.log(JSON.parse(invalidJSON)),console.log(2)}catch(o){console.log(o),"SyntaxError"===o.name&&console.log("Ошибка парса json надо чтото сделать")}console.log("После try...catch");
//# sourceMappingURL=02-json-parse.c4cdf2de.js.map
