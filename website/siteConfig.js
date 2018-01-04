/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
    {
        caption: 'Fabio Soares',
        image: 'https://avatars3.githubusercontent.com/u/5921856?s=460&v=4',
        infoLink: 'https://github.com/fabioars',
        pinned: true
    }
];

const siteConfig = {
    title: 'Underwater' /* title for your website */,
    tagline: 'Lightweight ES6+ substitute to Lodash and Underscore',
    url: 'https://fabioars.github.io/' /* your website url */,
    baseUrl: '/underwater/' /* base url for your project */,
    projectName: 'underwater',
    headerLinks: [
        { doc: 'about', label: 'Docs' },
        { doc: 'api', label: 'API' },
        { page: 'help', label: 'Help' },
        // { blog: false, label: 'Blog' }
    ],
    users,
    /* path to images for header/footer */
    headerIcon: 'img/drop.svg',
    footerIcon: 'img/drop.svg',
    favicon: 'img/favicon.png',
    /* colors for website */
    colors: {
        primaryColor: '#1DB2D6',
        secondaryColor: '#0C4856'
    },
    // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
    copyright:
        'Copyright © ' +
        new Date().getFullYear() +
        ' Underwater',
    // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
    // projectName: 'test-site', // or set an env variable PROJECT_NAME
    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks
        theme: 'default'
    },
    scripts: ['https://buttons.github.io/buttons.js'],
    // You may provide arbitrary config keys to be used as needed by your template.
    repoUrl: 'https://github.com/fabioars/underwater'
};

module.exports = siteConfig;
