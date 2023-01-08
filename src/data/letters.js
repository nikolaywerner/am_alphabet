const letters = [
    {
        uppercase: 'Ա',
        lowercase: 'ա',
        name: 'Айб',
        pronunciation: '[ɑ]',
        ruPropunciation: 'а'
    },
    {
        uppercase: 'Բ',
        lowercase: 'բ',
        name: 'Бен',
        pronunciation: '[b]',
        ruPropunciation: 'б'
    },
    {
        uppercase: 'Գ',
        lowercase: 'գ',
        name: 'Гим',
        pronunciation: '[g]',
        ruPropunciation: 'г'
    },
    {
        uppercase: 'Դ',
        lowercase: 'դ',
        name: 'Да',
        pronunciation: '[d]',
        ruPropunciation: 'д'
    },
    {
        uppercase: 'Ե',
        lowercase: 'ե',
        name: 'Эдж',
        pronunciation: '[ɛ]',
        ruPropunciation: 'е',
        features: 'В начале слова  [jɛ]'
    },
    {
        uppercase: 'Զ',
        lowercase: 'զ',
        name: 'За',
        pronunciation: '[z]',
        ruPropunciation: 'з'
    },
    {
        uppercase: 'Է',
        lowercase: 'է',
        name: 'Э',
        pronunciation: '[e]',
        ruPropunciation: 'э'
    },
    {
        uppercase: 'Ը',
        lowercase: 'ը',
        name: 'Ыт',
        pronunciation: '[ə]',
        ruPropunciation: 'ə'
    },
    {
        uppercase: 'Թ',
        lowercase: 'թ',
        name: 'То',
        pronunciation: '[tʰ]',
        ruPropunciation: 'th'
    },
    {
        uppercase: 'Ժ',
        lowercase: 'ժ',
        name: 'Же',
        pronunciation: '[ʒ]',
        ruPropunciation: 'ж'
    },
    {
        uppercase: 'Ի',
        lowercase: 'ի',
        name: 'Ини',
        pronunciation: '[i]',
        ruPropunciation: 'и'
    },
    {
        uppercase: 'Լ',
        lowercase: 'լ',
        name: 'Льюн',
        pronunciation: '[l]',
        ruPropunciation: 'л'
    },
    {
        uppercase: 'Խ',
        lowercase: 'խ',
        name: 'Хе',
        pronunciation: '[χ]',
        ruPropunciation: 'х'
    },
    {
        uppercase: 'Ծ',
        lowercase: 'ծ',
        name: 'Тьца',
        pronunciation: '[t͡s]',
        ruPropunciation: 'тс'
    },
    {
        uppercase: 'Կ',
        lowercase: 'կ',
        name: 'Кен',
        pronunciation: '[k]',
        ruPropunciation: 'к'
    },
    {
        uppercase: 'Հ',
        lowercase: 'հ',
        name: 'Хо',
        pronunciation: '[h]',
        ruPropunciation: 'h'
    },
    {
        uppercase: 'Ձ',
        lowercase: 'ձ',
        name: 'Дза',
        pronunciation: '[d͡z]',
        ruPropunciation: 'дз'
    },
    {
        uppercase: 'Ղ',
        lowercase: 'ղ',
        name: 'Гхат',
        pronunciation: '[l]',
        ruPropunciation: 'г',
        features: 'Или [ɫ]'
    },
    {
        uppercase: 'Ճ',
        lowercase: 'ճ',
        name: 'Тче',
        pronunciation: '[t͡ʃ]',
        ruPropunciation: 'тш'
    },
    {
        uppercase: 'Մ',
        lowercase: 'մ',
        name: 'Мен',
        pronunciation: '[m]',
        ruPropunciation: 'м'
    },
    {
        uppercase: 'Յ',
        lowercase: 'յ',
        name: 'Йи',
        pronunciation: '[j]',
        ruPropunciation: 'й'
    },
    {
        uppercase: 'Ն',
        lowercase: 'ն',
        name: 'Ну',
        pronunciation: '[n]',
        ruPropunciation: 'н',
        features: '[n], [ŋ]'
    },
    {
        uppercase: 'Շ',
        lowercase: 'շ',
        name: 'Ша',
        pronunciation: '[ʃ]',
        ruPropunciation: 'ш'
    },
    {
        uppercase: 'Ո',
        lowercase: 'ո',
        name: 'Во',
        pronunciation: '[o]',
        ruPropunciation: '0',
        features: '[o], в начале слова [ʋɔ]'
    },
    {
        uppercase: 'Չ',
        lowercase: 'չ',
        name: 'Ча',
        pronunciation: '[t͡ʃʰ]',
        ruPropunciation: 'ч'
    },
    {
        uppercase: 'Պ',
        lowercase: 'պ',
        name: 'Пе',
        pronunciation: '[p]',
        ruPropunciation: 'п'
    },
    {
        uppercase: 'Ջ',
        lowercase: 'ջ',
        name: 'Дже',
        pronunciation: '[d͡ʒ]',
        ruPropunciation: 'дж'
    },
    {
        uppercase: 'Ռ',
        lowercase: 'ռ',
        name: 'Ра',
        pronunciation: '[r]',
        ruPropunciation: 'рр'
    },
    {
        uppercase: 'Ս',
        lowercase: 'ս',
        name: 'Се',
        pronunciation: '[s]',
        ruPropunciation: 'с'
    },
    {
        uppercase: 'Վ',
        lowercase: 'վ',
        name: 'Вев',
        pronunciation: '[v]',
        ruPropunciation: 'в',
        features: '[v], [ʋ]'
    },
    {
        uppercase: 'Տ',
        lowercase: 'տ',
        name: 'Тюн',
        pronunciation: '[t]',
        ruPropunciation: 'т'
    },
    {
        uppercase: 'Ր',
        lowercase: 'ր',
        name: 'Ре',
        pronunciation: '[ɹ]',
        ruPropunciation: 'р'
    },
    {
        uppercase: 'Ց',
        lowercase: 'ց',
        name: 'Цо',
        pronunciation: '[tsʰ]',
        ruPropunciation: 'ц'
    },
    {
        uppercase: 'Ու',
        lowercase: 'ու',
        name: 'У',
        pronunciation: '[u]',
        ruPropunciation: 'у'
    },
    {
        uppercase: 'Փ',
        lowercase: 'փ',
        name: 'Пьюр',
        pronunciation: '[pʰ]',
        ruPropunciation: 'пh'
    },
    {
        uppercase: 'Ք',
        lowercase: 'ք',
        name: 'Ке',
        pronunciation: '[kʰ]',
        ruPropunciation: 'kh'
    },
    {
        uppercase: 'Եվ',
        lowercase: 'և',
        name: 'Ев',
        pronunciation: '[ev]',
        ruPropunciation: 'ев'
    },
    {
        uppercase: 'Օ',
        lowercase: 'օ',
        name: 'О',
        pronunciation: '[o]',
        ruPropunciation: 'о'
    },
    {
        uppercase: 'Ֆ',
        lowercase: 'ֆ',
        name: 'Фе',
        pronunciation: '[f]',
        ruPropunciation: 'ф'
    }
];

export default letters;
