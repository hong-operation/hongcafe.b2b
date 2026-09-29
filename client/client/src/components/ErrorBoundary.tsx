import { cn } from "@/lib/utils";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const homeUrl = import.meta.env.BASE_URL || "/";

      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-background">
          <div className="flex flex-col items-center w-full max-w-xl p-8 text-center">
            <AlertTriangle
              size={48}
              className="text-destructive mb-6 flex-shrink-0"
            />

            <h2 className="text-xl mb-3">페이지를 불러오는 중 문제가 발생했습니다.</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              잠시 후 다시 시도해주세요. 문제가 계속되면 홈으로 이동해 다시 이용해주세요.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90 cursor-pointer"
                )}
              >
                <RotateCcw size={16} />
                다시 불러오기
              </button>
              <a
                href={homeUrl}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg border",
                  "hover:bg-muted transition-colors"
                )}
              >
                <Home size={16} />
                홈으로 이동
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
