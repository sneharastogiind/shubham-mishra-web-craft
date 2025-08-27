import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <div className="text-8xl lg:text-9xl font-bold gradient-text">404</div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Page Not Found</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="button-glow">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <button onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </button>
          </Button>
        </div>

        <div className="mt-12 p-6 bg-muted/30 rounded-lg max-w-md mx-auto">
          <p className="text-sm text-muted-foreground">
            If you think this is an error, please{" "}
            <Link to="/contact" className="text-primary hover:underline">
              let me know
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
