export interface codeBoxModel {
    name: string;
    code: codeModel
}

export interface codeModel {
    html: string;
    ts?: string;
}
