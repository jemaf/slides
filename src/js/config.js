import 'reveal.js/lib/js/head.min';
import Reveal from 'reveal.js';

const PATH = './plugin';

Reveal.initialize({
    width: 1920,
    height: 1080,

    transition: 'none',
    progress: true,
    history: true,

    dependencies: [
        { src: PATH + '/markdown/marked.js' },
        { src: PATH + '/markdown/markdown.js' },
        { src: PATH + '/notes/notes.js', async: true },
        { src: PATH + '/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: PATH + '/external/external.js', condition: function() { return !!document.querySelector( '[data-external],[data-external-replace]' ); } }
    ]
});