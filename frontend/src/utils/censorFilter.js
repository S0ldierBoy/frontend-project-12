import leoProfanity from 'leo-profanity';

leoProfanity.loadDictionary(['ru', 'en']);

const censorFilter = (word) => leoProfanity.clean(word);

export default censorFilter;
