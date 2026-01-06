import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'

import WhoItIsFor from '@/components/sections/WhoItIsFor'

import VisionMission from '@/components/sections/VisionMission'
import CallToAction from '@/components/sections/CallToAction'

export default function Home() {
    return (
        <>
            {/* 1. Hero - Value Proposition */}
            <Hero />

            {/* 2. The Problem */}
            <Problem />

            {/* 3. Our Solution */}
            <Solution />

            {/* 4. How It Works */}
            <HowItWorks />

            {/* 5. Features */}
            <Features />



            {/* 7. Who It Is For */}
            <WhoItIsFor />



            {/* 9. Vision & Mission */}
            <VisionMission />

            {/* 10. Call to Action */}
            <CallToAction />
        </>
    )
}

