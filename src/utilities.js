
export const toKebabCase = n =>
    n.replace(/Case$/, '').replace(/([a-z])([A-Z])/g, (match, c1, c2) => `${c1}-${c2.toLowerCase()}`);

export const pad = (n) => {
    const titleLength = 30;
    const p = '====================';
    const title = `${p} ${n} ${p}`;
    const offset = (title.length - titleLength) / 2;
    return title.substr(offset, titleLength);
};

export const indent = (lines, { repeat = 2, character = ' ' } = {}) => (
    lines
        .split('\n')
        .map(line => character.repeat(repeat) + line)
        .join('\n')
);
