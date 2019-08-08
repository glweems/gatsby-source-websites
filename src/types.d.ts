declare module 'gatsby-source-filesystem/create-file-node';
declare module 'bluebird';

interface GatsbyActions {
    actions: {
        createNode(details: object): any;
    };
    store: {
        getState(): {
            program: {
                directory: string;
            };
        };
    };
    createNodeId(id: string): string;
    createContentDigest(content: object): object;
    reporter: {
        info(msg: string): void;
        warn(msg: string): void;
        error(msg: string): void;
        activityTimer(
            job: string
        ): {
            start(): void;
            end(): void;
        };
    };
}
