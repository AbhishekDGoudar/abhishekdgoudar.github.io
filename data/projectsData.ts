interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AI Architect',
    description: `AI Architect Studio transforms weeks of planning into minutes by standardizing architecture and generating base code. We designed this to support your product managers and engineers. The platform employs specialized AI agents acting as a virtual software team to analyze and align outputs with your specific requirements. `,
    imgSrc: '/static/images/AIArchitect.png',
    href: 'https://aiarchitect.streamlit.app/', // No link provided in source
  },
  {
    title: 'Influence Detection in Social Networks',
    description: `Identify the most influential users in social networks using graph analytics and Graph Neural Networks (GNNs).`,
    imgSrc: '/static/images/Influence_Detection.png',
    href: undefined, // No link provided in source
  },
  {
    title: 'Community Assistant',
    description: `A RAG-based assistant for online communities using DistilBERT and DPR with domain-specific fine-tuning.`,
    imgSrc: '/static/images/RAG-CommunityAssistant.png',
    href: undefined, // No link provided in source
  },
  {
    title: 'Paris Olympics 2024',
    description: `Explore trends and insights from the Paris 2024 Olympics, covering countries, age groups, and gender distribution through interactive visualizations.`,
    imgSrc: '/static/images/ParisOlympics.png',
    href: 'https://public.tableau.com/app/profile/abhishek.divakar.goudar/viz/OlympicsViz_17287785127600/Medals?publish=yes',
  },
  {
    title: 'House Sales Trends',
    description: `Real estate insights for King County, WA—explore patterns in pricing, locations, and other key factors via interactive visualizations.`,
    imgSrc: '/static/images/HouseSalesTrends.png',
    href: 'https://public.tableau.com/app/profile/abhishek.divakar.goudar/viz/OlympicsViz_17287785127600/Medals?publish=yes',
  },
  {
    title: 'Walmart Sales Prediction',
    description: `Enhance forecasting by using Weekly Sales to predict Walmart store demands across the U.S., including the impact of holidays.`,
    imgSrc: '/static/images/WalmartSalesPrediction.png',
    href: 'https://github.com/AbhishekDGoudar/Kaggle_walmart_sales_prediction',
  },
  {
    title: 'Airline Passenger Satisfaction',
    description: `Analyze air travel passenger experience and identify key drivers of satisfaction using ML and data analysis.`,
    imgSrc: '/static/images/AirlinePassengerSatisfaction.png',
    href: 'https://github.com/AbhishekDGoudar/Kaggle_airline_satisfaction',
  },
  {
    title: 'Maximum Power Point Tracker',
    description: `A Particle Swarm Optimization–assisted MPPT algorithm designed to improve photovoltaic system efficiency.`,
    imgSrc: '/static/images/MPTT.png',
    href: 'https://github.com/AbhishekDGoudar/Particle-Swarm-Optimization-Based-Maximum-Power-Point-Tracker-Algorithm',
  },
]

export default projectsData
