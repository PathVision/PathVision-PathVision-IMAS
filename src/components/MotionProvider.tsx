'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

interface MotionProviderProps {
    children: React.ReactNode
}

/**
 * LazyMotion provider that loads framer-motion features on demand.
 * This reduces the initial bundle size by loading animation features lazily.
 */
export default function MotionProvider({ children }: MotionProviderProps) {
    return (
        <LazyMotion features={domAnimation} strict>
            {children}
        </LazyMotion>
    )
}
