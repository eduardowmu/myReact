
/**
 * Necessária para que nossas API's possam tratar
 * Exceções
 */
export class ApiException extends Error{
    public readonly message: string = '';

    constructor(message: string) {
        super();
        this.message = message;
    }
}