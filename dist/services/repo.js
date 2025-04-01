import DATA from '../data/data.json' with { type: 'json' };
export const getCharacters = async () => {
    const data = DATA;
    return data;
};
