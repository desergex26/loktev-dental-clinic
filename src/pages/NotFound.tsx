import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Страница не найдена
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          К сожалению, запрашиваемая страница не существует. Возможно, она была удалена или перемещена.
        </p>
        <Link to="/">
          <Button size="lg">
            <Home className="mr-2 w-5 h-5" />
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
