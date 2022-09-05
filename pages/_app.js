import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { DashboardProvider } from "../context/Dashboard-Context";
import { AdminDashboardProvider } from "../context/Admin-Context";
import { TesterProvider } from "../context/Tester-Context";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TesterProvider>
          <AdminDashboardProvider>
            <DashboardProvider>
              <Component {...pageProps} />
            </DashboardProvider>
          </AdminDashboardProvider>
        </TesterProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
