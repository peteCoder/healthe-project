import imageUrlBuilder from '@sanity/image-url';

const sanityClient = require('@sanity/client');

const client = sanityClient({
    projectId: 'xmem40t9',
    dataset: 'production',
    apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
    token: 'sanity-auth-token', // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
});



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


export default client;