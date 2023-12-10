// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists
// target="${CONFIG.openInNewTab ? '_blank' : ''}"

const generateFirstListsContainer = () => {
	for (const list of CONFIG.firstlistsContainer) {
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
          <i class="listIcon" icon-name="${list.icon}"></i>
          <a
          target="sidebarFrame"
          href="${list.links[0].link}"
          class="listItem"
          >${list.links[0].name}</a>
          <a
          target="sidebarFrame"
          href="${list.links[1].link}"
          class="listItem"
          >${list.links[1].name}</a>
          <a
          target="_blank"
          href="${list.links[2].link}"
          class="listItem"
          >${list.links[2].name}</a>
          <a
          target="sidebarFrame"
          href="${list.links[3].link}"
          class="listItem"
          >${list.links[3].name}</a>
        </div>
      `;
		
		const position = 'beforeend';
		lists_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondListsContainer = () => {
	for (const list of CONFIG.secondListsContainer) {
		let item = `
        <div class="card list list__2" id="list_2">
        <i class="listIcon" icon-name="${list.icon}"></i>
        <a
        target="_blank"
        href="${list.links[0].link}"
        class="listItem"
        >${list.links[0].name}</a>
        <a
        target="_blank"
        href="${list.links[1].link}"
        class="listItem"
        >${list.links[1].name}</a>
        <a
        target="_blank"
        href="${list.links[2].link}"
        class="listItem"
        >${list.links[2].name}</a>
        <a
        target="_blank"
        href="${list.links[3].link}"
        class="listItem"
        >${list.links[3].name}</a>
        </div>
      `;
		const position = 'beforeend';
		lists_1.insertAdjacentHTML(position, item);
	}
};

const generateLists = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		default:
			break;
	}
};

generateLists();
