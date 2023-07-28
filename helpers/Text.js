import _ from 'lodash';
/* Функция разделяет число пробелами
* @param value (Number)
* @return string
*/
export const specifyNumber = value => Number(value)?.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 0}) ?? '-';

/* Функция предназначена для склонения слов используемых вместе с числительными
* @param number (Number) - число
* @param words (Array) - 3 слова соответствующие числительным (1, 2, 10)
* @return string - 1 слово, соответствующее числу
*/
export const transChoose = (number, words) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return number + ' ' + words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

/* Функция удаляет из строки все символы, кроме цифр.
* @param value (String)
* @return Number
 */
export const trimStringToNumber = value => (value ? Number(String(value).replace(/\D+/g, '')) : null);


/* Функция трансформирует представление числа, например 20000000 => 20 млн руб,
* при этом дробная часть округляется до 1 знака после запятой
* @param number (Number)
* @param divisor (Number) - делитель
* @param symbol (String) - строка с обозначением, добавляется в конце
* @return String
 */
export const formatShortNumber = (number, divisor = 1000000, symbol = '') => {
    let result = '';
    if(+number) {
        result = specifyNumber(_.round(number / divisor, 1));
        result = `${result} ${symbol}`;
    }
    return result;
};

/* Функция трансформирует полное имя в сокращенное - Фамилия И. О.,
* @param name (String)
* @return String
 */
export const formatShortName = (name) => {
    if (!name) {
        return ''
    }
    const lastName = name.replace(/ .*/,'')
    const initials = name.slice(name.indexOf(" ") + 1).split(' ').map(x => x[0]).join('. ');
    return `${lastName} ${initials}.`
    // return name.replace(/(\S+) (\S)\S* (\S)\S*/, '$1 $2. $3.') ?? '-';
}

export const shortName = (name) => {
    return name?.split(' ').map(s => s.substring(0, 1)).slice(0, 2).join('') || '';
}

export const randomColor = () => {
    const colors = [
        '#6EB794', '#BE92EB', '#80B7E9', '#EA8989'
    ];
    return colors[Math.floor(Math.random() * colors.length)]
}

export const isAlarmDate = (date) => {
    const current = new Date(date)
    const today = new Date()
    // за сутки или просрочен
    return (today - current) > 24 * 60 * 60
}

export const htmlToRawText = (htmlString) => {
	if (htmlString) {
		return htmlString.replace(/<[^>]+>/g, '');
	}
	return ''
}
