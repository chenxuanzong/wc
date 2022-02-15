import { LitElement } from "lit";
export declare class CxzCounter extends LitElement {
    count: number;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    inc(): void;
    dec(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-counter": CxzCounter;
    }
}
