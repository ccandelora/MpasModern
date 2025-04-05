import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/layout/ScrollToTop";

// Lazy load page components
const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/not-found"));
const AccreditationStandards = lazy(() => import("@/pages/blog/2025-massachusetts-accreditation-standards"));
const TechnologyAccreditation = lazy(() => import("@/pages/blog/leveraging-technology-in-accreditation-process"));
const PublicTrust = lazy(() => import("@/pages/blog/building-public-trust-through-accreditation"));

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

// Basic loading spinner component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Router />
        </Suspense>
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
