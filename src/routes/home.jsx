import HomePage from '../../src/pages/homepage';

export function meta({}) {
  return [
    { title: "Obsidi - HomePage" },
    { name: "description", content: "Obsidi Web app" },
  ];
}

export default function Home() {
  return <HomePage/>;
}
