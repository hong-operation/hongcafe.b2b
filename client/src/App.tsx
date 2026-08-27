import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Partnership from "./pages/Partnership";
import UniTaro from "./pages/UniTaro";
import Recruit from "./pages/Recruit";

function AppRoutes() {
  const [location] = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    // Keep native anchor links working (e.g. #programs, #how).
    if (window.location.hash) {
      requestAnimationFrame(() => {
        const target = document.querySelector(window.location.hash);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/partnership" component={Partnership} />
      <Route path="/unitaro" component={UniTaro} />
      <Route path="/recruit" component={Recruit} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const basePath =
    import.meta.env.BASE_URL === "/"
      ? undefined
      : import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <WouterRouter base={basePath}>
            <AppRoutes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
