import { japanResearchReport as report } from './japanResearchReport.js'
import { japanCompanyReport as companies } from './japanCompanyReport.js'
import { regionalGroups } from './japanResearchPresentation.js'

// Values transcribed from the supplied figures; regional series use the report's
// reconciled records. Display rounding is retained where exact values were absent.
const rows = (labels, values) =>
  labels.map((label, i) => ({ label, value: values[i] }))
const group = (title, labels, values, unit, line = false) => ({
  title,
  rows: rows(labels, values),
  unit,
  line,
})
const regional = (key, limit = 47) =>
  [...report.regions]
    .sort((a, b) => b.metrics[key] - a.metrics[key])
    .slice(0, limit)
    .map((region) => ({ label: region.name[1], value: region.metrics[key] }))
const types = [
  'Integrated kindergarten–nursery',
  'Kindergarten-based',
  'Nursery-based',
  'Locally discretionary',
]
export function getResearchFigureSeries(id) {
  const companyChart = [...companies.companies, ...companies.context]
    .flatMap((entry) => entry.blocks)
    .find((block) => block.id === id)
  if (companyChart?.type === 'matrix') return { table: companyChart }
  if (companyChart?.type === 'chart')
    return {
      groups: companyChart.groups.map((item) => ({
        ...item,
        unit:
          id === 'chart-J16'
            ? 'Service sites'
            : id === 'chart-J20'
              ? '%'
              : 'JPY million',
        rows: item.rows.map((row) => ({ ...row, display: row.display })),
      })),
    }
  switch (id) {
    case 'chart-J01':
      return {
        groups: [
          group(
            'Live births',
            ['2024', '2025'],
            [686173, 671236],
            'Live births',
            true,
          ),
        ],
      }
    case 'chart-J02':
      return {
        groups: [
          group(
            '2025-04-01',
            ['Capacity', 'Children using services'],
            [3029282, 2678417],
            'Places / children',
          ),
          group(
            '2026-04-01 · provisional',
            ['Capacity', 'Children using services'],
            [3016417, 2646756],
            'Places / children',
          ),
        ],
      }
    case 'chart-J03':
      return {
        groups: [
          group(
            'Certified centres',
            Array.from({ length: 11 }, (_, i) => String(i + 2015)),
            [
              2836, 4001, 5081, 6160, 7208, 8016, 8585, 9220, 9822, 10483,
              11212,
            ],
            'Facilities',
            true,
          ),
        ],
      }
    case 'chart-J04':
      return {
        groups: [
          group(
            'Official waiting children',
            Array.from({ length: 14 }, (_, i) => String(2013 + i)),
            [
              22741, 21371, 23167, 23553, 26081, 19895, 16772, 12439, 5634,
              2944, 2680, 2567, 2254, 2435,
            ],
            'Children',
            true,
          ),
        ],
      }
    case 'chart-J05':
      return {
        groups: [
          group(
            'Founders',
            [
              'Social welfare corporations',
              'School corporations',
              'Public',
              'For-profit corporations',
              'Other corporations',
              'Religious corporations',
              'Individuals',
              'National government',
            ],
            [5668, 3545, 1652, 182, 94, 46, 24, 1],
            'Facilities',
          ),
        ],
      }
    case 'chart-J06':
      return {
        groups: [
          {
            title: 'Official waiting children',
            rows: regional('waiting', 15),
            unit: 'Children',
          },
        ],
      }
    case 'chart-J07':
      return {
        groups: [
          group(
            'Monthly ceilings · eligibility conditions apply',
            [
              'Kindergarten outside the new system',
              'Extended kindergarten care',
              'Eligible unlicensed care, ages 3–5',
              'Eligible unlicensed care, ages 0–2, tax-exempt households',
            ],
            [25700, 11300, 37000, 42000],
            'JPY per month',
          ),
        ],
      }
    case 'chart-J08':
      return {
        groups: [
          group(
            'JP Holdings · year ended 2026-03',
            ['Revenue', 'Operating profit'],
            [43325, 6533],
            'JPY million',
          ),
          group(
            'LIKE · year ended 2026-05',
            ['Revenue', 'Operating profit'],
            [67315, 2981],
            'JPY million',
          ),
          group(
            'Poppins · year ended 2025-12',
            ['Revenue', 'Operating profit'],
            [34409, 1840],
            'JPY million',
          ),
          group(
            'Teno · half-year ended 2026-06',
            ['Revenue', 'Operating profit'],
            [9550, 362],
            'JPY million',
          ),
        ],
      }
    case 'chart-J09':
      return {
        groups: [
          group(
            'Age three',
            ['Before reform', 'Improved standard'],
            [20, 15],
            'Children per staff member',
          ),
          group(
            'Ages four–five',
            ['Before reform', 'Improved standard'],
            [30, 25],
            'Children per staff member',
          ),
        ],
      }
    case 'chart-J10':
      return {
        groups: [
          {
            title: 'Highest utilisation',
            rows: regional('utilisation', 15),
            unit: '%',
          },
        ],
      }
    case 'chart-J11':
      return {
        groups: [
          {
            title: 'Largest capacity',
            rows: regional('capacity', 15),
            unit: 'Places',
          },
        ],
      }
    case 'chart-J12':
      return { scatter: report.regions }
    case 'chart-J13':
      return {
        groups: [
          group(
            'Certified-Centre Types',
            types,
            [7470, 1637, 2017, 88],
            'Facilities',
          ),
        ],
      }
    case 'chart-J14':
      return {
        groups: [
          group(
            'Enrolment by Certified-Centre Type',
            types,
            [854312, 176848, 180216, 4540],
            'Enrolled children',
          ),
        ],
      }
    case 'chart-J15':
      return {
        groups: [
          group(
            'Category 1 · Rounded as Published',
            ['Confirmed capacity', 'Enrolled children'],
            [42.1, 28.4],
            '10,000 places / children',
          ),
          group(
            'Category 2 · Rounded as Published',
            ['Confirmed capacity', 'Enrolled children'],
            [63.1, 59.7],
            '10,000 places / children',
          ),
          group(
            'Category 3 · Rounded as Published',
            ['Confirmed capacity', 'Enrolled children'],
            [39.5, 33.5],
            '10,000 places / children',
          ),
        ],
      }
    case 'chart-J22': {
      const sorted = [...report.regions].sort(
        (a, b) => b.metrics.waitingChange - a.metrics.waitingChange,
      )
      return {
        groups: [
          {
            title: 'Largest increases and decreases',
            unit: 'Children',
            rows: [...sorted.slice(0, 7), ...sorted.slice(-7)].map((r) => ({
              label: r.name[1],
              value: r.metrics.waitingChange,
            })),
          },
        ],
      }
    }
    case 'chart-J23':
      return {
        groups: regionalGroups.map((name, i) => {
          const regions = report.regions.filter((r) => r.group === i)
          return group(
            name[1],
            ['Capacity', 'Children using services'],
            ['capacity', 'children'].map((key) =>
              regions.reduce((n, r) => n + r.metrics[key], 0),
            ),
            'Places / children',
          )
        }),
      }
    case 'chart-J24':
      return {
        groups: [
          {
            title: 'All prefectures',
            rows: report.regions.map((r) => ({
              label: r.name[1],
              value: r.metrics.utilisation,
            })),
            unit: '%',
          },
        ],
      }
    case 'chart-J25':
      return {
        groups: [
          group(
            'Kindergartens',
            ['2025 confirmed', '2026 provisional'],
            [689609, 627450],
            'Enrolled children',
          ),
          group(
            'Integrated certified centres',
            ['2025 confirmed', '2026 provisional'],
            [875976, 881892],
            'Enrolled children',
          ),
        ],
      }
    default:
      throw new Error('Missing translated figure: ' + id)
  }
}
