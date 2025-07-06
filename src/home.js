const home = (function () {
  const homePage = document.createElement("div");
  homePage.classList.add("page");
  const title = document.createElement("div");
  title.textContent = "UNI";
  title.classList.add("title");
  const container1 = document.createElement("div");
  container1.classList.add("container");
  container1.textContent =
    "Awarded Three Michelin Stars for Excellence in Sushi";
  const container2 = document.createElement("div");
  container2.classList.add("container");
  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "California's premier omakase destination! The fish is flown in daily, straight from Japan - no layovers. This is the freshest and most mouthwatering sushi experience in the lower forty-eight.";
  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "All the way from Louisiana, Bob comes from a long line of itamae. His passion and palate come together to create the rolls most sushi masters wouldn't even dare to try. If you're lucky, Bob will let you try the world renowned Nascar Roll today!";
  container2.appendChild(paragraph1);
  container2.appendChild(paragraph2);

  homePage.appendChild(title);
  homePage.appendChild(container1);
  homePage.appendChild(container2);
  return homePage;
})();

export default home;
