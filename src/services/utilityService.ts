export class UtilityService {
    /**
     * Error handler
     *
     * @param err
     * @returns
     */
    public static handleError(err: any): void {
        console.error(err.stack || err);
    }
}