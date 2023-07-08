import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description:
    "Promptopia is a place for prompt engineers to find inspiration and share their prompts with the world.",
};

// to remove hydration warning: suppressHydrationWarning={true} in the body tag

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
