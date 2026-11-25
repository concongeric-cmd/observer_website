import { lazy, Suspense } from 'react'
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
import useLanguage from './hooks/useLanguage'
const CompanyPage = lazy(() => import('./pages/CompanyPage'))
const JapanResearchPage = lazy(() => import('./pages/JapanResearchPage'))
const JapanRegionsPage = lazy(() => import('./pages/JapanRegionsPage'))

function ResearchRoute({ children }) {
  const { pair } = useLanguage()
  return (
    <Suspense
      fallback={
        <p className="company-loading" role="status">
          {pair('正在载入研究资料…', 'Loading research…')}
        </p>
      }
    >
      {children}
    </Suspense>
  )
}

export default function App() {
  const { pair } = useLanguage()
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
          <Route
            path="research"
            element={
              <ResearchRoute>
                <JapanResearchPage view="all" />
              </ResearchRoute>
            }
          />
          <Route
            path="research/:topicId"
            element={
              <ResearchRoute>
                <JapanResearchPage />
              </ResearchRoute>
            }
          />
          <Route
            path="regions/:regionId"
            element={
              <ResearchRoute>
                <JapanRegionsPage />
              </ResearchRoute>
            }
          />
          <Route
            path="companies/:companyId"
            element={
              <Suspense
                fallback={
                  <p className="company-loading" role="status">
                    {pair('正在载入企业档案…', 'Loading company profile…')}
                  </p>
                }
              >
                <CompanyPage />
              </Suspense>
            }
          />
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
