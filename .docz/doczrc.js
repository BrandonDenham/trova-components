export default {
    title: 'Trova Components Library',
    dest: '/docs',
    base: '/trova-components',
    typescript: true,
    port: 3001,
    menu: ['Readme', 'Components'],
    filterComponents: (files) =>
        files.filter((filepath) => /[w-]*.(ts|tsx)$/.test(filepath)),
};
