export async function GET() {
  const projects = [
    {
      id: 1,
      title: "Sweet dreams",
      subtitle: "Creative Director / Art Director / Choreographer",
      description: "можно крутое описание",
      img: "/images/portfolio2.png",
      link: "https://www.instagram.com/reel/CnCaZJoJ8Ko/",
      type: "instagram",
    },
    {
      id: 2,
      title: "Brunette: superstar illness",
      subtitle: "Choreographer / Dancer Casting Director",
      description: "Большая хореография для видео.",
      link: "https://www.youtube-nocookie.com/embed/-ImqhGe9G0s?si=qxouTisRdchnTq4G",
      type: "youtube", // без превью
    },
    {
      id: 3,
      title: "After Dark",
      subtitle: "Creative Director / Director / Choreographer",
      description: "можно крутое описание",
      img: "/images/portfolio6.png",
      link: "https://www.instagram.com/reel/CmMITEPq59I/?igsh=ZW1nenpoNHZwcnI0",
      type: "instagram",
    },
    {
      id: 4,
      title: "Viled f/w 202r5",
      subtitle: "Movement Director",
      description: "можно крутое описание",
      img: "/images/portfolio7.png",
      link: "https://www.instagram.com/reel/DBESWTsijBO/",
      type: "instagram",
    },
  ];

  return Response.json(projects);
}
