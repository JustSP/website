import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ERPNextPage } from "./pages/ERPNextPage";
import { StartupsPage } from "./pages/StartupsPage";
import { WalletPage } from "./pages/WalletPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import ScrollToTop from "./components/ScrollToTop";
function Placeholder({ title }: { title: string }) {
  return (
    <main className="container py-32">
      <h1>{title}</h1>
      <p>This route is ready for its own parameterized page component.</p>
    </main>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/erpnext" element={<ERPNextPage />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />
        <Route path="*" element={<Placeholder title="Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}
