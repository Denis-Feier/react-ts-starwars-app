const classesComposer = (classes: Array<string>): string => {
    return classes.reduce((prev: string, current: string) => (prev + ' ' + current));
};

export default classesComposer;