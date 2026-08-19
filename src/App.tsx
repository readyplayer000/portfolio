import { Router, Switch, Route } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/sonner";
import ErrorBoundary from "./components/ErrorBoundary";

function RootRouter() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <Router base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider delayDuration={0}>
          <div className="min-h-screen bg-background text-foreground antialiased">
            <Toaster />
            <RootRouter />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
