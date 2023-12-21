
const followersData = [
  {
    name: "Dash",
    username: "@randomdash",
    createdNFTs: 12,
    imageName: "followers-image.webp",
  },
  {
    name: "Kohaku",
    username: "@kohaku",
    createdNFTs: 48,
    imageName: "followers-image2.avif",
  },
  {
    name: "Moyo Shiro",
    username: "@moyoshiro",
    createdNFTs: 32,
    imageName: "followers-image3.jpeg",
  },
  {
    name: "Kohaku",
    username: "@kohaku",
    createdNFTs: 60,
    imageName: "followers-image4.avif",
  },
  {
    name: "Kohaku",
    username: "@kohaku",
    createdNFTs: 4,
    imageName: "followers-image5.webp",
  },
];
const followingData = [
  {
    name: "Follower1",
    username: "@follower1",
    createdNFTs: 10,
    imageName: "following-image1.avif",
  },
  {
    name: "Follower2",
    username: "@follower2",
    createdNFTs: 20,
    imageName: "following-image2.avif",
  },
  {
    name: "Follower1",
    username: "@follower1",
    createdNFTs: 10,
    imageName: "following-image3.png",
  },
  {
    name: "Follower2",
    username: "@follower2",
    createdNFTs: 20,
    imageName: "following-image4.jpeg",
  },

];
let currentData = followersData;
let headerTitle = 'Followers'
let dataLength = followersData.length;

function createFollowerElement(follower) {
  const followerElement = document.createElement("div");
  followerElement.classList.add(
    "one-fllowers",
    "d-flex",
    "align-items-center",
    "justify-content-between"
  );

  const followerInfo = document.createElement("div");
  followerInfo.classList.add("d-flex", "align-items-center", "gap-3");

  const followerImage = document.createElement("img");
  followerImage.src = `../assets/images/${follower.imageName}`;
  followerImage.alt = "followers and following image";

  const followerName = document.createElement("div");
  followerName.classList.add(
    "one-fllowers-name",
    "d-flex",
    "flex-column",
    "align-items-start"
  );

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = follower.name;

  const usernameParagraph = document.createElement("small");
  usernameParagraph.textContent = follower.username;

  const followerCreated = document.createElement("div");
  followerCreated.classList.add(
    "followers-created",
    "d-flex",
    "flex-column",
    "align-items-center"
  );

  const createdParagraph = document.createElement("p");
  createdParagraph.textContent = "created";

  const createdNFTsParagraph = document.createElement("small");
  createdNFTsParagraph.textContent = `${follower.createdNFTs} NFTs`;

  const followButton = document.createElement("button");
  followButton.classList.add("btn-follow");
  followButton.textContent = "Follow +";

  followerName.appendChild(nameParagraph);
  followerName.appendChild(usernameParagraph);

  followerCreated.appendChild(createdParagraph);
  followerCreated.appendChild(createdNFTsParagraph);

  followerInfo.appendChild(followerImage);
  followerInfo.appendChild(followerName);

  followerElement.appendChild(followerInfo);
  followerElement.appendChild(followerCreated);
  followerElement.appendChild(followButton);

  return followerElement;
}

function createLineElement() {
  const lineElement = document.createElement("div");
  lineElement.classList.add("line");
  return lineElement;
}

function createFollowersHeaderAndNumber() {
    const container = document.createElement('div');

    const headerContent = document.createElement('div');
    headerContent.classList.add('followers-fllowing_header', 'd-flex', 'justify-content-between');

    const followersContent = document.createElement('div');
    followersContent.classList.add('followers-fllowing_header-content', 'd-flex', 'gap-3');
    const followersParagraph = document.createElement('p');
    followersParagraph.textContent = 'Followers';
    const followersSpan = document.createElement('span');
  

    followersSpan.textContent = followersData.length;
    followersContent.appendChild(followersParagraph);
    followersContent.appendChild(followersSpan);

    followersContent.addEventListener('click', () => {
        updateHeader('Followers', followersData);
    });

    const followingContent = document.createElement('div');
    followingContent.classList.add('followers-fllowing_header-content', 'd-flex', 'gap-3');
    let followingParagraph = document.createElement('p');
    followingParagraph.textContent = 'Following';
    let followingSpan = document.createElement('span');
    followingSpan.textContent = followingData.length;
    followingContent.appendChild(followingParagraph);
    followingContent.appendChild(followingSpan);

    followingContent.addEventListener('click', () => {
        updateHeader('Following', followingData);
    });

    if(headerTitle === 'Followers'){
        followersParagraph.classList.remove('not-active')
        followersParagraph.classList.add('active')

        followersSpan.classList.remove('not-active-number')
        followersSpan.classList.add('active-number')

        followingParagraph.classList.remove('active')
        followingParagraph.classList.add('not-active')

        followingSpan.classList.remove('active-number')
        followingSpan.classList.add('not-active-number')
    }else{
        followersParagraph.classList.remove('active')
        followersParagraph.classList.add('not-active')

        followersSpan.classList.remove('active-number')
        followersSpan.classList.add('not-active-number')

        followingParagraph.classList.remove('not-active')
        followingParagraph.classList.add('active')

        followingSpan.classList.remove('not-active-number')
        followingSpan.classList.add('active-number')
    }

    headerContent.appendChild(followersContent);
    headerContent.appendChild(followingContent);

    const line = document.createElement('div');
    line.classList.add('line');

    const followersNumber = document.createElement('div');
    followersNumber.classList.add('followers-number', 'd-flex', 'align-items-center', 'justify-content-between');
    const h1 = document.createElement('h1');
    h1.textContent = headerTitle;
    const followersNumberSpan = document.createElement('span');
    followersNumberSpan.textContent = dataLength;
    followersNumber.appendChild(h1);
    followersNumber.appendChild(followersNumberSpan);

    container.appendChild(headerContent);
    container.appendChild(line);
    container.appendChild(followersNumber);

    return container;
}

function updateHeader(headerText, data) {
    const span = document.querySelector('.followers-number span');
    headerTitle = headerText
    dataLength = data.length
    span.textContent = data.length;
    currentData = data;

    updateFollowersSection(data);
}

function updateFollowersSection(data) {
    const followersContainer = document.getElementById('followersContainer');
    const followerElements = data.map((follower, index) => [
        createFollowerElement(follower),
        index < data.length - 1 ? createLineElement() : ''
    ]);

    followersContainer.innerHTML = '';
    followersContainer.appendChild(createFollowersHeaderAndNumber(data.length));
    followersContainer.append(...followerElements.flat());
}
function initializeFollowersSection(data) {
    const followersContainer = document.getElementById('followersContainer');
    followersContainer.appendChild(createFollowersHeaderAndNumber(data.length));
    const followerElements = data.map((follower, index) => [
        createFollowerElement(follower),
        index < data.length - 1 ? createLineElement() : ''
    ]);

    followersContainer.append(...followerElements.flat());
}
initializeFollowersSection(followersData);
