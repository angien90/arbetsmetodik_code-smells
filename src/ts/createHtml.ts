import { log } from './consoleLog';
import { getPodcasts } from './api';
import { IPodcast } from './api';

const podcastGallery = document.querySelector('.podcast-list-gallery') as HTMLElement;

export async function createHtml(): Promise<void> {
    const podcasts: IPodcast[] | null = await getPodcasts();
    log(podcasts);  // Lägg till denna rad för att se strukturen på 'podcasts'
    if (podcasts && Array.isArray(podcasts)) {
        podcasts.forEach((podcast) => {
            const articleElement = createArticle();
            createImage(articleElement, podcast);
            const textContainer = createTextContainer(articleElement);
            createHeader(textContainer, podcast);
            createDescription(textContainer, podcast);
            createLink(textContainer, podcast);
        });
    } else {
        log('Fel: Podcasts är inte en array');
    }
}

function createArticle(): HTMLElement {
    const articleElement = document.createElement('article');
    articleElement.classList.add('article');
    podcastGallery.appendChild(articleElement);
    return articleElement;
}

function createTextContainer(articleElement: HTMLElement): HTMLElement {
    const textContainer = document.createElement('div');
    textContainer.classList.add('article', 'div');
    articleElement.appendChild(textContainer);
    return textContainer;
}

function createImage(articleElement: HTMLElement, podcast: Podcast): void {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', podcast.socialimage);
    imgElement.setAttribute('alt', podcast.name || 'Podcastbild');
    imgElement.setAttribute('width', '100');
    imgElement.setAttribute('height', '100');
    articleElement.appendChild(imgElement);
}

function createDescription(textContainer: HTMLElement, podcast: Podcast): void {
    const paragraph = document.createElement('p');
    const descriptionText = document.createTextNode(podcast.description);
    paragraph.appendChild(descriptionText);
    textContainer.appendChild(paragraph);
}

function createHeader(textContainer: HTMLElement, podcast: Podcast): void {
    const header = document.createElement('h2');
    const programName = document.createTextNode(podcast.name);
    header.appendChild(programName);
    textContainer.appendChild(header);
}

function createLink(textContainer: HTMLElement, podcast: Podcast): void {
    const link = document.createElement('a');
    const linkText = document.createTextNode('Lyssna här');
    link.setAttribute('href', podcast.programurl);
    link.appendChild(linkText);
    textContainer.appendChild(link);
  }

export default createHtml;