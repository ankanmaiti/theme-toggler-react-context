import ThemeToggleButton from "@/components/Elements/ThemeToggleButton";

export default function App() {
  return (
    <div className="w-screeen h-screen grid place-items-center bg-cyan-400 dark:bg-[#262626]">
      <ThemeToggleButton className="capitalize px-2 py-1 bg-white text-black dark:bg-cyan-400 dark:text-white rounded">
        toggle Theme
      </ThemeToggleButton>
    </div>
  );
}
