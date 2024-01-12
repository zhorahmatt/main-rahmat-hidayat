export interface Template {
  title: string;
  location: string;
  company: string;
  company_link: string;
  startDate: string;
  endDate: string
};
const one: Template = {
  title: "Software Engineer",
  location: "Makassar, Indonesia",
  company: "Yuscorp",
  company_link: "https://yuscorp.co.id",
  startDate: "Dec 2022",
  endDate:"Present"
};
const two: Template = {
  title: "Technical Consultant",
  location: "Makassar, Indonesia",
  company: "Afila Media Karya",
  company_link : "https://afila.co.id/",
  startDate: "Jan 2023",
  endDate:"Jul 2023"
};
const three: Template = {
  title: "Engineering Manager",
  location: "Makassar, Indonesia",
  company: "Kioser",
  company_link: "https://kioser.com",
  startDate: "Jan 2021",
  endDate:"Dec 2022"
};
const four = {
  title: "Software Engineer - Backend ",
  location: "Makassar, Indonesia",
  company: "Kioser",
  company_link: "https://kioser.com",
  startDate: "Dec 2019",
  endDate:"Jan 2021"
};

const five = {
  title: "Head of DTC Academy",
  location: "Makassar, Indonesia",
  company: "DTC Academy",
  company_link: "https://dtcacademy.id/",
  startDate: "Mar 2019",
  endDate:"Nov 2019"
};

const six = {
  title: "Backend Developer, System Analyst",
  location: "Makassar, Indonesia",
  company: "Docotel Teknologi Celebes (DTC)",
  company_link: "https://dtc.co.id/",
  startDate: "May 2016",
  endDate:"Okt 2019"
};


export const bytitle = {
  one,
  two,
  three,
  four,
  five,
  six
};
export const details = Object.values(bytitle);
