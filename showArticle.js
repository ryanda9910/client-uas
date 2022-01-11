let dataMenuItem = [
  {
    createdAt: "",
    icon: "",
    id: "",
    nama: "",
  },
];
const API_URL =
  "http://wwwhenresearchcom-6db7f79c1504.cloudora-app.com:3000/api/v1";

const API_IMAGE = "http://wwwhenresearchcom-6db7f79c1504.cloudora-app.com:3000";

const navMenu = document.getElementById("navigationMenu");
const categoryList = document.getElementById("containerCategory");
const listArticle = document.getElementById("containerParentArticle");

const detailArticle = document.getElementById("containerParentIdArticle");

const headerContainer = document.getElementById("headerContainer");
const footerContainer = document.getElementById("footerContainer");
const socialMediaContainer = document.getElementById(
  "containerLinkSocialMedia"
);

const createLinkSocialMediaInstagram = (item) => {
  let socialMediaLinkInstagram = document.createElement("a");
  socialMediaLinkInstagram.style.marginBlock = "10px";
  socialMediaLinkInstagram.style.color = "white";
  socialMediaLinkInstagram.innerHTML = "Instagram";
  socialMediaLinkInstagram.setAttribute("class", "social-media");
  socialMediaLinkInstagram.setAttribute("target", "_blank");
  socialMediaLinkInstagram.setAttribute("href", item.instagram);
  return socialMediaLinkInstagram;
};

const createLinkSocialMediaFacebook = (item) => {
  let socialMediaLinkFacebook = document.createElement("a");
  socialMediaLinkFacebook.style.marginBlock = "10px";
  socialMediaLinkFacebook.style.color = "white";
  socialMediaLinkFacebook.innerHTML = "Facebook";
  socialMediaLinkFacebook.setAttribute("class", "social-media");
  socialMediaLinkFacebook.setAttribute("target", "_blank");
  socialMediaLinkFacebook.setAttribute("href", item.facebook);
  return socialMediaLinkFacebook;
};

const createLinkSocialMediaTwitter = (item) => {
  let socialMediaLinkTwitter = document.createElement("a");
  socialMediaLinkTwitter.style.marginBlock = "10px";
  socialMediaLinkTwitter.style.color = "white";
  socialMediaLinkTwitter.innerHTML = "Twitter";
  socialMediaLinkTwitter.setAttribute("class", "social-media");
  socialMediaLinkTwitter.setAttribute("target", "_blank");
  socialMediaLinkTwitter.setAttribute("href", item.twitter);
  return socialMediaLinkTwitter;
};

const createHeaderImageContainer = (item) => {
  let headerImageContainer = document.createElement("div");
  headerImageContainer.setAttribute("class", "container-flex");
  headerImageContainer.appendChild(setHeaderImage(item));
  headerImageContainer.appendChild(setTitleWeb(item));
  return headerImageContainer;
};

const createFooterImageContainer = (item) => {
  let footerImageContainer = document.createElement("div");
  footerImageContainer.setAttribute("class", "container-flex-footer");
  footerImageContainer.appendChild(setFooterImage(item));
  footerImageContainer.appendChild(setTitleFooter(item));
  return footerImageContainer;
};

const setDescFooter = (item) => {
  let descFooter = document.createElement("p");
  descFooter.setAttribute("class", "desc-footer");
  descFooter.innerHTML = item.deskripsi;
  return descFooter;
};

const setFooterImage = (item) => {
  let imageFooter = document.createElement("img");
  imageFooter.setAttribute("class", "image-footer");
  imageFooter.setAttribute(
    "src",
    `${API_IMAGE}/uploads/${item.info_gambar?.filename}`
  );
  imageFooter.setAttribute("alt", "footer-image");
  return imageFooter;
};

const setTitleFooter = (item) => {
  let titleFooter = document.createElement("h4");
  titleFooter.setAttribute("class", "footer-title");
  titleFooter.innerHTML = item.nama_website;
  return titleFooter;
};

const setDescHeader = (item) => {
  let descHeader = document.createElement("p");
  descHeader.setAttribute("class", "desc-web");
  descHeader.innerHTML = item.deskripsi;
  return descHeader;
};

const setDescHeaderLocation = (item) => {
  let descHeaderLocation = document.createElement("p");
  descHeaderLocation.setAttribute("class", "address-web");
  descHeaderLocation.innerHTML = item.lokasi;
  return descHeaderLocation;
};

const setHeaderImage = (item) => {
  let imageHeader = document.createElement("img");
  imageHeader.setAttribute("class", "image-logo");
  imageHeader.setAttribute(
    "src",
    `${API_IMAGE}/uploads/${item.info_gambar?.filename}`
  );
  imageHeader.setAttribute("alt", "logo-image");
  return imageHeader;
};

const setTitleWeb = (item) => {
  let titleWeb = document.createElement("h4");
  titleWeb.innerHTML = item.nama_website;
  titleWeb.setAttribute("class", "title-web");
  return titleWeb;
};

const headerInformation = fetch(`${API_URL}/information`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data?.data.map((item) => {
      headerContainer.appendChild(createHeaderImageContainer(item));
      headerContainer.appendChild(setDescHeader(item));
      headerContainer.appendChild(setDescHeaderLocation(item));
      socialMediaContainer.appendChild(createLinkSocialMediaInstagram(item));
      socialMediaContainer.appendChild(createLinkSocialMediaFacebook(item));
      socialMediaContainer.appendChild(createLinkSocialMediaTwitter(item));
    });
  })
  .catch((err) => {
    return err;
  });

const footerInformation = fetch(`${API_URL}/information`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data?.data.map((item) => {
      footerContainer.appendChild(createFooterImageContainer(item));
      footerContainer.appendChild(setDescFooter(item));
    });
  })
  .catch((err) => {
    return err;
  });

const createMenuItem = (item) => {
  let itemMenu = document.createElement("a");
  itemMenu.textContent = item.nama;
  itemMenu.setAttribute("class", "menu-item");
  itemMenu.setAttribute("href", item.link);
  return itemMenu;
};


// const filterListArticle = (categoryId) => {
//   removeAllChildNodes(containerParentArticle);
//   fetch(`${API_URL}/artikel/kategori/${categoryId}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       data?.data.map((item) => listArticle.appendChild(containerArticle(item)));
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

/* Disabled When in Detail Page */
// itemCategory.addEventListener("click", () => {
//   filterListArticle(item.id);
// });

const createCategoryItem = (item) => {
  let itemCategory = document.createElement("button");
  itemCategory.innerHTML = item.nama_kategori;
  itemCategory.setAttribute("class", "btn-category");
  itemCategory.setAttribute("id", "filterCategory");
  return itemCategory;
};

const menuItem = fetch(`${API_URL}/menu`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data?.data.map((item) => navMenu.appendChild(createMenuItem(item)));
  })
  .catch((err) => {
    dataMenuItem.map((item) => navMenu.appendChild(createMenuItem(item)));
    return err;
  });

const listCategory = fetch(`${API_URL}/kategori`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data?.data.map((item) => {
      categoryList.appendChild(createCategoryItem(item));
    });
  })
  .catch((err) => {
    console.error(err);
  });

const containerArticle = (item) => {
  let contentArticle = document.createElement("div");
  contentArticle.setAttribute("class", "container-flex");
  contentArticle.appendChild(setImageContainer(item));
  contentArticle.appendChild(setContentContainer(item));
  return contentArticle;
};

const showArticle = fetch(
  `${API_URL}/artikel/${localStorage.getItem("article_id")}`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    detailArticle.appendChild(containerArticle(data?.data));
  })
  .catch((err) => {
    console.error(err);
  });

const setImageCategory = (item) => {
  let imageCategory = document.createElement("img");
  imageCategory.setAttribute("class", "image-article");
  imageCategory.setAttribute(
    "src",
    `${API_IMAGE}/uploads/${item.tbl_gambars?.filename}`
  );
  imageCategory.setAttribute("alt", "article-image");
  return imageCategory;
};

/* Image Div */
const setImageContainer = (item) => {
  let imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "image-container");
  imageContainer.appendChild(setImageCategory(item));
  return imageContainer;
};

/* Content Div */
const setContentContainer = (item) => {
  let contentContainer = document.createElement("div");
  contentContainer.setAttribute("class", "content-container");
  contentContainer.appendChild(setTitleArticle(item));
  contentContainer.appendChild(setDescriptionArticle(item));
  return contentContainer;
};

const setTitleArticle = (item) => {
  let titleArticle = document.createElement("h2");
  titleArticle.setAttribute("class", "title-article");
  titleArticle.innerHTML = item.nama_artikel;
  return titleArticle;
};

const setDescriptionArticle = (item) => {
  let descArticle = document.createElement("p");
  descArticle.innerHTML = item.deskripsi_artikel;
  return descArticle;
};
