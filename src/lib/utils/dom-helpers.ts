export const inputText = (inputBox: HTMLInputElement | HTMLTextAreaElement, text: string) => {
    inputBox.value = text;
    inputBox.dispatchEvent(new Event('input'));
}