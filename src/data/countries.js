export const countries = [
  {
    slug: 'united-states',
    code: 'US',
    name: ['美国', 'United States'],
    title: ['美国幼教', 'Early childhood education in the US'],
    description: [
      '从具体园所开始，了解教学方法、服务安排与公开的经营实践。也可按主题查看行业制度与政策资料。',
      'Start with individual schools to explore teaching, services and published operating practices, or browse sector and policy resources by topic.',
    ],
  },
  {
    slug: 'japan',
    code: 'JP',
    name: ['日本', 'Japan'],
    title: ['日本幼教', 'Early childhood education in Japan'],
    description: [
      '从具体园所开始，了解教育方针、课程生活与公开的管理做法。保留日本园所原名，并将国家政策与园所制度分开呈现。',
      'Explore schools, their educational policies, daily curriculum and published practices. Original Japanese names are retained; national policy is separate from school procedures.',
    ],
  },
]
export const getCountry = (slug) =>
  countries.find((country) => country.slug === slug)
