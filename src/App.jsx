import { Navigate, Route, Routes } from 'react-router'
import SiteLayout from './components/layout/SiteLayout'
import CountryLayout from './components/country/CountryLayout'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import SchoolPage from './pages/SchoolPage'
import CountrySectionPage from './pages/CountrySectionPage'
import ArticlePage from './pages/ArticlePage'
import InfoPage from './pages/InfoPage'
import MonthlyUpdatesPage from './pages/MonthlyUpdatesPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="monthly" element={<MonthlyUpdatesPage />} />
        <Route path="about" element={<InfoPage section="about" />} />
        <Route path=":countrySlug" element={<CountryLayout />}>
          <Route index element={<CountryPage />} />
          <Route path="centres" element={<CountryPage />} />
          <Route path="centres/:schoolId" element={<SchoolPage />} />
          <Route path="operations/:articleId" element={<ArticlePage />} />
          <Route path=":sectionId" element={<CountrySectionPage />} />
        </Route>
        <Route
          path="japan/schools"
          element={<Navigate to="/japan" replace />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
