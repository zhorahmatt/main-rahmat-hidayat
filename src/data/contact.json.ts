export interface Template {
  link: string;
  type: string;
  title: string;
};
const one: Template = {
  link: "mailto:info.rahmathidayat@gmail.com",
  type: "Email",
  title: "info.rahmathidayat@gmail.com",
};
const two: Template = {
  link: "https://twitter.com/zhorahmat",
  type: "Twitter",
  title: "Rahmat Hidayat",
};
const three: Template = {
  link: "https://instagram.com/zhorahmatt",
  type: "Instagram",
  title: "zhorahmatt",
};
export const bytype = {
  one,
    two,
    three,
};
export const contact = Object.values(bytype);
