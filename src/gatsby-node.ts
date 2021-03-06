import * as path from 'path';
const Pageres = require('pageres');
import { createFileNode } from 'gatsby-source-filesystem/create-file-node';
import * as Bluebird from 'bluebird';

interface Website {
    name: string;
    slug: string;
    url: string | undefined;
    description: string | undefined;
    repo: string | undefined;
}
interface Options {
    websites: Website[];
    sizes: string[];
    delay: number;
    crop: boolean;
}

export const sourceNodes = async (
    { actions: { createNode }, store, createNodeId, createContentDigest, reporter }: GatsbyActions,
    { websites, sizes = ['1920x1080'], delay = 2, crop = true }: Options
): Promise<void> => {
    const localDir = path.join(store.getState().program.directory, '.cache', 'gatsby-source-websites');

    const createWebsiteNodes = async () =>
        await websites.map(async website => {
            await new Pageres({ delay, filename: website.slug })
                .src(website.url, sizes, { crop: crop })
                .dest(localDir)
                .run();
            const filePath = path.resolve(localDir, website.slug + '.png');

            await createNode({
                ...website,
                id: createNodeId(`website-${website.name}`),
                internal: {
                    type: 'website',
                    contentDigest: createContentDigest({ ...website })
                }
            });

            await createFileNode(filePath, createNodeId, { name: 'gatsby-source-filesystem' });
        });

    const activity = reporter.activityTimer(`${websites.length} website nodes`);
    activity.start();

    await Bluebird.all(createWebsiteNodes());

    activity.end();
};
