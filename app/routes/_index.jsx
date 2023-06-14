import styles from '../styles/tailwind.css';

export const meta = () => {
  return [
    { title: "My App with MongoDb" },
    { name: "description", content: "Welcome to My Struggle in mongodb!" },
  ];
};

export const links = () => {
  return [{rel: 'stylesheet', href: styles}]
}

export default function Index() {
  return (
    <div className="h-screen bg-slate-700 flex justify-center items-center">
    <h2 className="text-blue-600 font-extrabold text-5xl">TailwindCSS Is Working!</h2>
  </div>
  );
}