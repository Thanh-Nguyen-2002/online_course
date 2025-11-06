import React from 'react'
import HeroSection from './HeroSection'
import FeatureHighlights from './FeatureHighlights'
import CourseCurriculumPreview from './CourseCurriculumPreview'
import InstructorSpotlight from './InstructorSpotlight'
import TestimonialCarousel from './TestimonialCarousel'
import FAQSection from './FAQSection'
import BlogPreview from './BlogPreview'
import CallToAction from './CallToAction'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <FeatureHighlights />
            <CourseCurriculumPreview />
            <InstructorSpotlight />
            <TestimonialCarousel />
            <FAQSection />
            <BlogPreview /> 
            <CallToAction />
        </div>
    )
}
