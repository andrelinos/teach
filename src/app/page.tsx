import {
  AllTheCoolFeatures,
  CarouselCases,
  FeaturesCount,
  Footer,
  Hero,
  JoinAWorldOfLearning,
  MeetInternational,
  ReadyForYourNextProject,
  TestimonialCarousel,
} from '@/components/landing-page'
import { VideoAppExplanation } from '@/components/landing-page/video-app-explanation'
import { getSEOTags } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getSEOTags({
  appName: 'teach',
  appDescription: 'teach - Teach students worldwide',
  keywords: [
    'teach',
    'students',
    'solutions',
    'products',
    'schools',
    'international students',
    'international schools',
    'international education',
    'international education solutions',
    'international education products',
    'international education schools',
  ],
  appDomain: 'https://ProjectInBio.com',
  canonicalUrlRelative: '/',
})

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col">
      {/* <Header /> */}
      <Hero />

      <VideoAppExplanation />

      <CarouselCases />
      <MeetInternational />
      <FeaturesCount />
      <div className="flex flex-col-reverse lg:flex-col">
        <TestimonialCarousel />
        <JoinAWorldOfLearning />
        <AllTheCoolFeatures />
      </div>
      <ReadyForYourNextProject />
      <Footer />
    </div>
  )
}
