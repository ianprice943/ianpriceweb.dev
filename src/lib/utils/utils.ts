import hljs from "highlight.js";

export const debounce = (func: any, delay = 300) => {
    let timer: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
};

export const highlightSettings = (code: string) => {
    const languages = ["html", "javascript", "typescript", "css", "scss", "c++", "dart", "json", "python"];
    return hljs.highlightAuto(code, languages).value;
}

export const getTodayString = () => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return `${year}/${month}/${day}`;
}