`use strict`;

const str = `Hello World`;

const insertWordInto = (str) => {
    let index = 0;

    return function (str2) {
        const arrStr = str.split(` `);
        if (index > arrStr.length) {
            index = 0;
        }
        arrStr.splice(index, 0, str2);
        index++;
        let result = arrStr.join(` `);
        console.log(result);
        return result;

    }
}

const newString = insertWordInto(str);

newString(`Kyiv`);
newString(`Odessa`);
newString(`Krakow`);
newString(`Lviv`);
newString(`Madrid`);
