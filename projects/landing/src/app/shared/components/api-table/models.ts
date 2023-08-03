export interface apiInterface {
    input: string;
    type: "string" | "boolean" | "Event" | "number" | "Method";
    values?: string;
    description?: string;
    default?: string | boolean;
    required?: boolean;
}
