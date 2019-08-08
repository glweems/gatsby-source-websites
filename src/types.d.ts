interface GatsbyActions {
    actions: {
        createNode(): any;
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
    };
}
