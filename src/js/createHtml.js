import { getPodcasts } from './api'


const podCastContainer = document.querySelector('.section_podlist-pods');

export async function createHtml() {
    const podCasts = await getPodcasts();
    podCasts.programs.forEach((podcast) => {
        const innerArticle = createInnerArticle();
        createImg(podcast);
        const textDiv = createTextDiv(innerArticle);
        createHeader(textDiv, podcast);
        createP(textDiv, podcast);
        createLink(textDiv, podcast);

        function createInnerArticle() {
            const innerArticle = document.createElement('article');
            innerArticle.setAttribute('class', 'section_article');
            innerArticle.setAttribute('tabindex', '1');
            podCastContainer.appendChild(innerArticle);
            return innerArticle;
        }

        function createTextDiv(innerArticle) {
            const textDiv = document.createElement('div');
            textDiv.setAttribute('class', 'section_article_div');
            innerArticle.appendChild(textDiv);
            return textDiv;
        }

        function createLink(textDiv, podcast) {
            const linkPlacement = document.createElement('a');
            const linkText = document.createTextNode('Lyssna här');
            linkPlacement.setAttribute('href', podcast.programurl);
            linkPlacement.setAttribute('tabindex', '1');
            linkPlacement.appendChild(linkText);
            textDiv.appendChild(linkPlacement);
        }

        function createImg(innerArticle, podcast) {
            const imgPlacement = document.createElement('IMG');
            imgPlacement.setAttribute('src', podcast.socialimage);
            imgPlacement.setAttribute('width', '100');
            imgPlacement.setAttribute('height', '100');
            innerArticle.appendChild(imgPlacement);
        }

        function createP(textDiv, podcast) {
            const descPlacement = document.createElement('p');
            const desc = document.createTextNode(podcast.description);
            descPlacement.appendChild(desc);
            textDiv.appendChild(descPlacement);
        }

        function createHeader(textDiv, podcast) {
            const headerPlacement = document.createElement('h2');
            const programName = document.createTextNode(podcast.name);
            headerPlacement.appendChild(programName);
            textDiv.appendChild(headerPlacement);
        }
    });
}

export default createHtml;