import hljs from "highlight.js";

export const debounce = (func: any, delay = 300) => {
    let timer: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
};

export const highlightSettings = (code: string, lang: string) => {
    const languages = ["html", "javascript", "typescript", "css", "scss", "c++", "dart", "json", "python"];
    if(languages.includes(lang)) {
        return hljs.highlightAuto(code, languages).value;
    } else {
        return hljs.highlightAuto(code, []).value;
    }
}

export const getTodayString = () => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return `${year}/${month}/${day}`;
}

export const convertDateString = (date: string) => {
    const dateObj = new Date(date);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return `${year}/${month}/${day}`;
}

export const setTabIndexOnCodeBlocks = (browser: boolean) => {
    if(browser) {
        const codeBlocks: NodeListOf<HTMLElement> | null = document.querySelectorAll<"code">('code');
        codeBlocks?.forEach((block) => {
            block.tabIndex = 0;
        });
    }
}