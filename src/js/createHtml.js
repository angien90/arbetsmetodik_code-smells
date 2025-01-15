import { getPodcasts } from './api'

const podcastGallery = document.querySelector('.podcast-list-gallery');

export async function createHtml() {
    const podcasts = await getPodcasts();
    if (podcasts && podcasts.programs) {
    podcasts.programs.forEach((podcast) => {
        const articleElement = createArticle();
        createImage(articleElement, podcast);
        const textContainer = createTextContainer(articleElement);
        createHeader(textContainer, podcast);
        createDescription(textContainer, podcast);
        createLink(textContainer, podcast);
    });
  }
}

function createArticle() {
    const articleElement = document.createElement('article');
    articleElement.classList.add('article');
    podcastGallery.appendChild(articleElement);
    return articleElement;
}

function createTextContainer(articleElement) {
    const textContainer = document.createElement('div');
    textContainer.classList.add('article', 'div');
    articleElement.appendChild(textContainer);
    return textContainer;
}

function createImage(articleElement, podcast) {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', podcast.socialimage);
    imgElement.setAttribute('alt', podcast.name || 'Podcastbild');
    imgElement.setAttribute('width', '100');
    imgElement.setAttribute('height', '100');
    articleElement.appendChild(imgElement);
}

function createDescription(textContainer, podcast) {
    const paragraph = document.createElement('p');
    const descriptionText = document.createTextNode(podcast.description);
    paragraph.appendChild(descriptionText);
    textContainer.appendChild(paragraph);
}

function createHeader(textContainer, podcast) {
    const header = document.createElement('h2');
    const programName = document.createTextNode(podcast.name);
    header.appendChild(programName);
    textContainer.appendChild(header);
}

function createLink(textContainer, podcast) {
    const link = document.createElement('a');
    const linkText = document.createTextNode('Lyssna här');
    link.setAttribute('href', podcast.programurl);
    link.appendChild(linkText);
    textContainer.appendChild(link);
  }

export default createHtml;