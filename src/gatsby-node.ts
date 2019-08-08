interface Options {
    yourPluginOption: string;
}

export const sourceNodes = async (
    { actions: { createNode }, store, createNodeId, createContentDigest, reporter }: GatsbyActions,
    { yourPluginOption }: Options
): Promise<void> => {};
