import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/layout/ScrollToTop";

// Import blog post pages
import AccreditationStandards from "@/pages/blog/2025-massachusetts-accreditation-standards";
import TechnologyAccreditation from "@/pages/blog/leveraging-technology-in-accreditation-process";
import PublicTrust from "@/pages/blog/building-public-trust-through-accreditation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog/2025-massachusetts-accreditation-standards" component={AccreditationStandards} />
      <Route path="/blog/leveraging-technology-in-accreditation-process" component={TechnologyAccreditation} />
      <Route path="/blog/building-public-trust-through-accreditation" component={PublicTrust} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <ScrollToTop />
        <Router />
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
