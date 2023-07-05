export interface apiInterface {
    input: string;
    type: "string" | "boolean" | "Event";
    values?: string;
    description?: string;
    default?: string | boolean;
}
