export interface apiInterface {
    input: string;
    type: "string" | "boolean" | "Event" | "number" | "Method" | "object";
    interface?: string;
    values?: string;
    description?: string;
    default?: string | boolean;
    required?: boolean;
}
