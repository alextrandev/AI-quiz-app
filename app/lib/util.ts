// topics list
export const category_1 = [
  { id: "AI", name: "AI quiz" },
  { id: "PHP", name: "PHP quiz" },
  { id: "JS", name: "JavaScript quiz" },
];

export const category_2 = [
  { id: "CSS", name: "CSS quiz" },
  { id: "HTML", name: "HTML quiz" },
  { id: "UI", name: "UI Design quiz" },
];

// function to capitalize first character
export const capitalize = (str: string) => {
  str = str?.replace(/%20/g, " ");

  // nullish here to avoid error with empty string
  return str[0].toUpperCase + str.slice(1) + " Questions" ?? str;
}