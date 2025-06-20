let projects = [
  {
    id: 1,
    title: "Sweet dreams",
    subtitle: "Creative Director / Art Director / Choreographer",
    description:
      "Director: Nur Niaz\nDOP: Dastan Zhumagulov\nProduction Designer: Yuki Kravchenko\nMUAH: An Milana\nColor: Nurtas Mamytbayev\nSound: Nick Alexander Park",
    img: "/images/portfolio2.png",
    link: "https://www.instagram.com/reel/CnCaZJoJ8Ko/",
    type: "instagram",
  },
  {
    id: 2,
    title: "Brunette: superstar illness",
    subtitle: "Choreographer / Dancer Casting Director",
    description:
      "Producer: Nare Manukyan\nDirector: SOBERSASHA\nCreative Director: Masha Zhemchuzhina \nDOP: Marc Miller",
    link: "https://www.youtube-nocookie.com/embed/-ImqhGe9G0s?si=qxouTisRdchnTq4G",
    type: "youtube",
  },
  {
    id: 3,
    title: "After Dark",
    subtitle: "Creative Director / Director / Choreographer",
    description:
      "DOP / Color / Edit: Usen Seidullaev\nSound: Nick Alexander Park\nDancers: TOLK Dance Company",
    img: "/images/portfolio6.png",
    link: "https://www.instagram.com/reel/CmMITEPq59I/?igsh=ZW1nenpoNHZwcnI0",
    type: "instagram",
  },

  {
    id: 4,
    title: "Viled f/w 202r5",
    subtitle: "Movement Director",
    description:
      "Production: Plan B\nDirection: Aibat Rakmanovsky\nDOP: Madiyar Satybaldiyev",
    img: "/images/portfolio7.png",
    link: "https://www.instagram.com/reel/DBESWTsijBO/",
    type: "instagram",
  },
];

// ✅ Добавим возможность чтения и временной модификации:
export function getProjects() {
  return projects;
}

export function getProjectById(id) {
  console.log("🔍 ID на входе:", id); // добавь это
  console.log("📦 Все проекты:", projects); // и это

  return projects.find((p) => p.id === Number(id)); // ← обязательно с Number(id)
}

export function addProject(project) {
  project.id = Date.now();
  projects.push(project);
  return project;
}

export function updateProject(updated) {
  projects = projects.map((p) => (p.id === updated.id ? updated : p));
  return updated;
}

export function deleteProject(id) {
  projects = projects.filter((p) => p.id !== id);
}
