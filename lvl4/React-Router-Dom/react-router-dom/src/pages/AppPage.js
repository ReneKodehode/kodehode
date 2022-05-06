import { AppContent, AppLink } from "./appPage/AppComponents";

export default function AppPage() {
  return (
    <div>
      <AppContent>
        <AppLink to="/ApiCallAppPage">Api Call App</AppLink>
        <AppLink to="/IncrementAppPage">Increment App</AppLink>
      </AppContent>
    </div>
  );
}
